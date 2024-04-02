import React, { useState } from "react";
import { RightSideBar, ImgDownload, KaldiPrices, WapperRightBarInRightBar1, WapperRightBarInRightBar2, CardPattern } from "../staking/Stake.style";
import { H3, P1 } from "../../shared/components/Text.style";
import Grid from "@mui/material/Grid";
import whitePaper from "../../public/assets/KaldiMarketWhitepaperV5.1.pdf";
import { GET_ALL_STAKES_FOR_TOTAL, GET_USER_DATA } from "../../pages/graphQlQueries";
import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import download from "../../public/assets/images/download.png";
import { JsonRpcProvider } from "ethers";
import Pattern from "../../public/assets/images/pattern.svg";

type UserData = {
  tier1TotalEarned: number;
  tier1TotalStaked: number;
  tier2TotalEarned: number;
  tier2TotalStaked: number;
  tier3TotalEarned: number;
  tier3TotalStaked: number;
  data: string;
};
const YOUR_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/RTKL91xHmpGZk-CMVGEPNNmL-UhvrDh1";

const RightBarStaking: React.FC<{
  userData: boolean;
  tierNumber: number;
  isWhiteListed: boolean;
  sumUnclaimed: any;
}> = ({ userData, tierNumber }) => {
  const convertToEth = (value: number): number => {
    return value / Math.pow(10, 18); // Divide by 10^18 to convert to ETH
  };
  const [totalEarn, setTotalEarn] = useState(Number);
  const [totalStaked, setTotalStaked] = useState(Number);
  const [totalUnClaimed, setTotalUnClaimed] = useState(Number);
  const downloadFile = () => {
    window.open(whitePaper, "_blank");
  };
  const { account } = useWeb3React();
  const userId = account?.toLocaleLowerCase();
  const {
    loading: loadingAllStakesForTotal,
    error: errorAllStakesForTotal,
    data: allStakesForTotal,
    refetch: refetchAllStakesForTotal,
  } = useQuery(GET_ALL_STAKES_FOR_TOTAL, {
    variables: { userId },
  });

  const fetchBlockTimestamp = async () => {
    // Initialize your Ethereum provider (e.g., Infura, Alchemy, etc.)
    const provider = new JsonRpcProvider(YOUR_RPC_URL);

    // Fetch the latest block
    const blockNumber = await provider.getBlockNumber();
    const block = await provider.getBlock(blockNumber);

    // Access the timestamp of the block
    const timestamp = block.timestamp;

    return timestamp;
  };
  const calculateRewardTillNow = async (tier: any, stakeAmount: any, startTime: any) => {
    let projectedReward = 0;
    let earnedRewardTillNow = 0;
    let timeTillUserStaked = 0;
    let tier1RewardPercentage = 200;
    let tier2RewardPercentage = 500;
    let tier3RewardPercentage = 1000;
    let currentTimeStamp = await fetchBlockTimestamp(); // hardcoded , use function to create timestamp
    let tier1Duartion = 900; // 15 min hardcoded for now, fetch exact from contract directly
    let tier2Duartion = 1800; // 30 min hardcoded for now, fetch exact from contract directly
    let tier3Duartion = 2700; // 45 min hardcoded for now, fetch exact from contract directly

    if (tier == tierNumber) {
      projectedReward = ((tierNumber === 1 ? tier1RewardPercentage : tierNumber === 2 ? tier2RewardPercentage : tier3RewardPercentage) * stakeAmount) / 10000; // projected reward if time duration was completed
      timeTillUserStaked = currentTimeStamp - startTime; // time passed from staking time
      earnedRewardTillNow = (projectedReward * timeTillUserStaked) / (tierNumber === 1 ? tier1Duartion : tierNumber === 2 ? tier2Duartion : tier3Duartion);
    }
    return earnedRewardTillNow;
  };

  useEffect(() => {
    const wapper = async () => {
      let currentStakes = 0;
      let projectedRewardMatured = 0;
      let projectedRewardUnmatured = 0;
      let currentTimeStamp = await fetchBlockTimestamp(); // hardcoded , use function to create timestamp

      // Map tierNumber to corresponding reward percentage
      let tierRewardPercentages: any = {
        1: 200,
        2: 500,
        3: 1000,
      };

      let tierRewardPercentage = tierRewardPercentages[tierNumber]; // Get the reward percentage for the given tierNumber

      for (let i = 0; i < allStakesForTotal?.users[0]?.stakes.length; i++) {
        // calculating current stake for user
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked && allStakesForTotal?.users[0]?.stakes[i]?.tier === tierNumber) {
          currentStakes += parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount);
        }

        // calculate matured reward
        // should not have unstaked, time condition, reward should not be claimed
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked && currentTimeStamp > allStakesForTotal?.users[0]?.stakes[i].endTime && !allStakesForTotal?.users[0]?.stakes[i].isRewardPaid) {
          let reward = 0;
          if (allStakesForTotal?.users[0]?.stakes[i].tier == tierNumber) {
            reward = (tierRewardPercentage * parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount)) / 10000;
          }
          projectedRewardMatured += reward;
        }

        // calculating reward for unmatured stakes
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked && currentTimeStamp < allStakesForTotal?.users[0]?.stakes[i].endTime) {
          let unMaturedReward = 0;
          if (allStakesForTotal?.users[0]?.stakes[i].tier == tierNumber) {
            unMaturedReward = await calculateRewardTillNow(
              allStakesForTotal?.users[0]?.stakes[i].tier,
              allStakesForTotal?.users[0]?.stakes[i].stakeAmount,
              allStakesForTotal?.users[0]?.stakes[i].startTime
            );
          }
          projectedRewardUnmatured += unMaturedReward;
        }
      }
      setTotalEarn(convertToEth(projectedRewardMatured));
      setTotalStaked(convertToEth(currentStakes));
      setTotalUnClaimed(convertToEth(projectedRewardUnmatured));
    };
    wapper();
  }, [allStakesForTotal, userData]);

  return (
    <RightSideBar>
      <WapperRightBarInRightBar1>
        <CardPattern src={Pattern} alt="pattern" />
        <Grid container marginLeft="20px">
          <P1 fontSize="16px" margin="20px 0px 10px 0px" weight="bold">
            Portfolio Statistics
          </P1>
          <Grid item xs={12} padding-top="5px" paddingBottom="15px">
            <P1 className="textColorGray" margin="15px 0px 0px 0px">
              Total Current Staked
              <br />
              <KaldiPrices className={`tier-${tierNumber}`}>{totalStaked.toFixed(2) || "00.00"} KALDI</KaldiPrices>{" "}
            </P1>
            <P1 className="textColorGray" margin="15px 0px 0px 0px">
              Matured Rewards
              <br />
              <KaldiPrices>{totalEarn.toFixed(2) || "00.00"} KALDI</KaldiPrices>
            </P1>
            <P1 className="textColorGray" margin="15px 0px 0px 0px">
              UnMatured Rewards <br />
              <KaldiPrices>{totalUnClaimed.toFixed(2) || "00.00"} KALDI</KaldiPrices>
            </P1>
          </Grid>
        </Grid>
      </WapperRightBarInRightBar1>

      <WapperRightBarInRightBar2>
        <CardPattern src={Pattern} alt="pattern" />
        <Grid container padding="20px 10px">
          <Grid item xs={12}>
            <P1 fontSize="16px" margin="0px 0px 0px 10px" style={{ display: "flex" }}>
              White paper <ImgDownload onClick={downloadFile} loading="lazy" src={download} alt='' />
            </P1>
            <P1 lineheight="20px" margin="0px 0px 0px 10px" className="textColorGray">
              You can download white paper
              <br /> from here.
            </P1>
          </Grid>
        </Grid>
      </WapperRightBarInRightBar2>
    </RightSideBar>
  );
};

export default RightBarStaking;
