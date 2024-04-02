import { ATag, AllTiersBackGround, CardPattern, CustomLink, KaldiStakedWrapper, StakingListHeader, StyledParallelDiv, Td1, Td2, Td3, Td4, TextStaking, Tier } from "./Stake.style";
import HeaderStaking from "./StakingHeader";
const myArray = ["Tier 1", "Tier 2", "Tier 3"];
// import RightBarStaking from "./RightBarStaking";
import { useQuery } from "@apollo/client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LinearProgress from "@mui/material/LinearProgress";
import { useWeb3React } from "@web3-react/core";
import { JsonRpcProvider } from "ethers";
import { useEffect, useState } from "react";
import { useCreateInstance } from "../../Blockchain/helperMethods/useCreateInstance";
import { useGetAllStakes } from "../../Blockchain/helperMethods/useGetAllStakes";
import whitePaper from "../../public/assets/KaldiMarketWhitepaperV5.1.pdf";
import download from "../../public/assets/images/download.png";
import Pattern from "../../public/assets/images/pattern.svg";
import { GET_ALL_STAKES_FOR_TOTAL, GET_USERS_ALL_LOCKED_DATA, GET_USERS_ALL_UNCLAIMED_DATA, GET_USER_DATA } from "../../graphQlQueries";
import { H4, P1 } from "../../shared/components/Text.style";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import { ImgDownload, RightSideBar, WapperRightBar } from "../staking/Stake.style";
import { StripeDiv } from "../../shared/styles/GlobalStyles";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import ParallelDiv from "../../shared/components/ParallelDiv";
import React from "react";

type ResultObject = {
  tier1StakePerCap?: any;
  tier2StakePerCap?: any;
  tier3StakePerCap?: any;
  tier1TotalPerCap?: any;
  tier2TotalPerCap?: any;
  tier3TotalPerCap?: any;
};
let lockedTier1 = 0;
let lockedTier2 = 0;
let lockedTier3 = 0;

const title = "Staking";
const description = "Internet connectivity for smallholder farmers is a matter of survival";
const body = (
  <>
    Staking your Kaldicoin contributes to providing internet connectivity for smallholder coffee farmers. You also will earn rewards and help shape the future of coffee. A one-off payment of $10 must
    be made before staking, and a minimum of 100 Kaldicoin must be staked. Your $10 goes towards providing coffee farmers with high-speed internet connectivity.
  </>
);

export default function StakingList() {
  const { totalStakePerTier, StakingCapPerTier } = useGetAllStakes();
  const [resultObjectAllTier, setResultObjectAllTier] = useState<ResultObject>({});
  const { library } = useConnectWallet();
  const [coinBalance, setCoinBalance] = useState(Number);
  const [totalEarn, setTotalEarn] = useState(Number);
  const [totalStaked, setTotalStaked] = useState(Number);
  const [totalUnClaimed, setTotalUnClaimed] = useState(Number);
  const { getCoinInstance } = useCreateInstance();
  const { account } = useWeb3React();
  const userId = account?.toLocaleLowerCase();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const YOUR_RPC_URL = "https://polygon-mumbai.g.alchemy.com/v2/RTKL91xHmpGZk-CMVGEPNNmL-UhvrDh1";

  const {
    loading: loadingAllStakesForTotal,
    error: errorAllStakesForTotal,
    data: allStakesForTotal,
    refetch: refetchAllStakesForTotal,
  } = useQuery(GET_ALL_STAKES_FOR_TOTAL, {
    variables: { userId },
  });

  const { loading, error, data } = useQuery(GET_USER_DATA, {
    variables: { userId },
  });

  const {
    loading: loadingUnClaimed,
    error: errorUnClaimed,
    data: allUnClaimedData,
    refetch: refetchUnClaimed,
  } = useQuery(GET_USERS_ALL_UNCLAIMED_DATA, {
    variables: { userId },
  });

  const {
    loading: loadingLockedTier,
    error: errorLockedTier,
    data: allLockedTier,
    refetch: refetchLockedTier,
  } = useQuery(GET_USERS_ALL_LOCKED_DATA, {
    variables: { userId },
  });

  // var currentDate = new Date();
  // // Get the Unix timestamp (in milliseconds)
  // var timestamp = currentDate.getTime();
  // // Convert milliseconds to seconds
  // var seconds = Math.floor(timestamp / 1000);

  const fetchBlockTimestamp = async () => {
    try {
      // Initialize your Ethereum provider (e.g., Infura, Alchemy, etc.)
      const provider = new JsonRpcProvider(YOUR_RPC_URL);
      // Fetch the latest block
      const blockNumber = await provider.getBlockNumber();
      const block: any = await provider.getBlock(blockNumber);
      // Access the timestamp of the block
      const timestamp = block.timestamp;
      // console.log("timestamp===>>>", timestamp);
      return timestamp;
    } catch (error) {
      console.error({ error });
    }
  };

  const convertToEth = (value: number): number => {
    return value / Math.pow(10, 18); // Divide by 10^18 to convert to ETH
  };

  useEffect(() => {
    const fetchCoinBalance = async () => {
      try {
        const KaldiCoinTokenInstance = await getCoinInstance(library);
        const getKaldiKoinBalance = await KaldiCoinTokenInstance.methods.balanceOf(account).call();
        const coinbalance = parseFloat(getKaldiKoinBalance.toString()) / Math.pow(10, 18);
        setCoinBalance(coinbalance);
      } catch (error) {
        console.error("Error fetching Kaldi coin balance:", error);
      }
    };
    if (account) {
      fetchCoinBalance();
    }
  }, [account]);

  useEffect(() => {
    if (allLockedTier?.users[0]) {
      const allStakes = allLockedTier?.users[0]?.stakes;
      allStakes.forEach((element: any) => {
        if (element.tier === 1) {
          lockedTier1 += Number(element.stakeAmount);
        } else if (element.tier === 2) {
          lockedTier2 += Number(element.stakeAmount);
        } else {
          lockedTier3 += Number(element.stakeAmount);
        }
      });
    }
  }, [allLockedTier]);

  useEffect(() => {
    return () => {
      lockedTier1 = 0;
      lockedTier2 = 0;
      lockedTier3 = 0;
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const newResultObject: ResultObject = {};
      for (let tier = 1; tier <= 3; tier++) {
        const totalStakePerCap = await StakingCapPerTier(library, tier);
        const totalTotalPerCap = await totalStakePerTier(library, tier, true);
        newResultObject[`tier${tier}StakePerCap` as keyof ResultObject] = convertToEth(totalStakePerCap as number);
        newResultObject[`tier${tier}TotalPerCap` as keyof ResultObject] = convertToEth(totalTotalPerCap as number);
      }
      setResultObjectAllTier(newResultObject);
    };
    if (account) {
      fetchData();
    }
  }, [account]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);
  const calculateRewardTillNow = async (tier: any, stakeAmount: any, startTime: any) => {
    let projectedReward = 0;
    let earnedRewardTillNow = 0;
    let timeTillUserStaked = 0;
    let tier1RewardPercentage = 200;
    let tier2RewardPercentage = 500;
    let tier3RewardPercentage = 1000;
    let currentTimeStamp = await fetchBlockTimestamp();
    let tier1Duartion = 900; // 15 min
    let tier2Duartion = 1800; // 30 min
    let tier3Duartion = 2700; // 45 min

    if (tier == 1) {
      projectedReward = (tier1RewardPercentage * stakeAmount) / 10000; // projected reward if time duration was completed
      timeTillUserStaked = currentTimeStamp - startTime; // time passed from staking time
      earnedRewardTillNow = (projectedReward * timeTillUserStaked) / tier1Duartion;
    } else if (tier == 2) {
      projectedReward = (tier2RewardPercentage * stakeAmount) / 10000; // projected reward if time duration was completed
      timeTillUserStaked = currentTimeStamp - startTime; // time passed from staking time
      earnedRewardTillNow = (projectedReward * timeTillUserStaked) / tier2Duartion;
    } else if (tier == 3) {
      projectedReward = (tier3RewardPercentage * stakeAmount) / 10000; // projected reward if time duration was completed
      timeTillUserStaked = currentTimeStamp - startTime; // time passed from staking time
      earnedRewardTillNow = (projectedReward * timeTillUserStaked) / tier3Duartion;
    }
    return earnedRewardTillNow;
  };

  useEffect(() => {
    const wapper = async () => {
      let currentStakes = 0;
      let projectedRewardMatured = 0;
      let projectedRewardUnmatured = 0;
      let tier1RewardPercentage = 200; //
      let tier2RewardPercentage = 500; //
      let tier3RewardPercentage = 1000; //

      let currentTimeStamp = await fetchBlockTimestamp();

      for (let i = 0; i < allStakesForTotal?.users[0]?.stakes.length; i++) {
        // calculating current stake for user
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked) {
          currentStakes += parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount);
        }
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked && currentTimeStamp > allStakesForTotal?.users[0]?.stakes[i].endTime && !allStakesForTotal?.users[0]?.stakes[i].isRewardPaid) {
          let reward = 0;
          if (allStakesForTotal?.users[0]?.stakes[i].tier == 1) {
            reward = (tier1RewardPercentage * parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount)) / 10000;
          } else if (allStakesForTotal?.users[0]?.stakes[i].tier == 2) {
            reward = (tier2RewardPercentage * parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount)) / 10000;
          } else if (allStakesForTotal?.users[0]?.stakes[i].tier == 3) {
            reward = (tier3RewardPercentage * parseInt(allStakesForTotal?.users[0]?.stakes[i].stakeAmount)) / 10000;
          }
          projectedRewardMatured += reward;
        }

        // calculating reward for unmatured stakes
        if (!allStakesForTotal?.users[0]?.stakes[i].isUnstaked && currentTimeStamp < allStakesForTotal?.users[0]?.stakes[i].endTime) {
          let unMaturedReward = 0;
          if (allStakesForTotal?.users[0]?.stakes[i].tier == 1) {
            unMaturedReward = await calculateRewardTillNow(
              allStakesForTotal?.users[0]?.stakes[i].tier,
              allStakesForTotal?.users[0]?.stakes[i].stakeAmount,
              allStakesForTotal?.users[0]?.stakes[i].startTime
            );
          } else if (allStakesForTotal?.users[0]?.stakes[i].tier == 2) {
            unMaturedReward = await calculateRewardTillNow(
              allStakesForTotal?.users[0]?.stakes[i].tier,
              allStakesForTotal?.users[0]?.stakes[i].stakeAmount,
              allStakesForTotal?.users[0]?.stakes[i].startTime
            );
          } else if (allStakesForTotal?.users[0]?.stakes[i].tier == 3) {
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
    if (allStakesForTotal) {
      wapper();
    }
  }, [allStakesForTotal]);

  const downloadFile = () => {
    window.open(whitePaper, "_blank");
  };

  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <StyledParallelDiv />
      <HeaderStaking />
      <section style={{ marginLeft: "5px" }}>
        <Box sx={{ flexGrow: 1 }} marginTop="20px">
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} zIndex={10}>
              <Grid container direction="row" alignItems="center" spacing={5} justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={8} marginTop="10px" style={{ height: windowWidth > 900 ? "100vh" : "" }}>
                  <br></br>
                  <Grid item xs={12} border={"1px double #fffff"} borderRadius={"10px"}>
                    <StakingListHeader>
                      <H4 fontSize="16px" padding="10px 0px 0px 25px">
                        Your Staked KALDI
                      </H4>
                      <H4 padding="10px 25px 0px 0px" textalign="right">
                        {totalStaked.toFixed(2) || "00.00"} KALDI
                      </H4>
                      <P1 padding="7px 0px 0px 25px" color="#878D96">
                        Earn KALDI & More KALDI!{" "}
                      </P1>
                    </StakingListHeader>
                    <AllTiersBackGround>
                      <Grid sx={{ flexGrow: 1 }} container>
                        <Grid item xs={12}>
                          <Grid container justifyContent="center" gap="14px">
                            
                          </Grid>
                          {/* <P3 padding="0px 0px 0px 25px" margin="12px 0px 0px 0px" color="#808191">
                            KALDI in wallet: {coinBalance !== null ? coinBalance?.toFixed(2) || "00.00" : "Loading..."}
                          </P3> */}
                          <P1 padding="0px 0px 0px 25px" margin="12px 0px 0px 0px" color="#878D96">
                            KALDI in wallet: &nbsp; &nbsp;( {coinBalance !== null ? coinBalance?.toFixed(2) || "00.00" : "Loading..."})
                          </P1>
                          <br></br>
                        </Grid>
                      </Grid>
                    </AllTiersBackGround>
                    {/* </Item> */}
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Grid item xs={12}>
                    <div>
                      <RightSideBar style={{ marginTop: "25px" }}>
                        <WapperRightBar>
                          <CardPattern src={Pattern} alt="pattern" />
                          <P1 fontSize="16px" padding="20px 0px 0px 20px" weight="bold">
                            Portfolio Statistics
                          </P1>
                          <Grid container paddingLeft="20px">
                            <Grid item xs={6} padding="12px 0px" maxWidth="48% !important">
                              <P1 className="textColorGray" margin="15px 0px 0px 0px">
                                Total Current Staked
                                <br />
                                <ATag>{totalStaked.toFixed(2) || "00.00"} KALDI</ATag>{" "}
                              </P1>
                              <P1 className="textColorGray" margin="15px 0px 0px 0px">
                                Matured Rewards
                                <br />
                                <ATag>{totalEarn.toFixed(2) || "00.00"} KALDI</ATag>
                              </P1>
                              <P1 className="textColorGray" margin="15px 0px 0px 0px">
                                UnMatured Rewards <br />
                                <ATag>{totalUnClaimed.toFixed(2) || "00.00"} KALDI</ATag>
                                {/* <a>00.00 KALDI</a> */}
                              </P1>
                            </Grid>
                            <div
                              style={{
                                border: "1px solid #ccc1",
                                margin: "15px 0px",
                              }}
                            ></div>
                            <Grid item xs={6} padding="12px">
                              <TextStaking>
                                Locked Tier 1
                                <br />
                                <ATag>{convertToEth(lockedTier1).toFixed(2) || "00.00"} KALDI</ATag>{" "}
                              </TextStaking>
                              <P1 className="textColorGray" margin="15px 0px 0px 0px">
                                Locked Tier 2
                                <br />
                                <ATag>{convertToEth(lockedTier2).toFixed(2) || "00.00"} KALDI</ATag>
                              </P1>
                              <P1 className="textColorGray" margin="15px 0px 0px 0px">
                                Locked Tier 3 <br />
                                <ATag>{convertToEth(lockedTier3).toFixed(2) || "00.00"} KALDI</ATag>
                                {/* <a>00.00 KALDI</a> */}
                              </P1>
                            </Grid>
                          </Grid>
                        </WapperRightBar>
                        {/* top, right, bottom, left */}

                        <WapperRightBar style={{ marginTop: "20px" }}>
                          <CardPattern src={Pattern} alt="pattern" />
                          <Grid container padding="20px 10px">
                            <Grid item xs={12}>
                              <P1 fontSize="16px" margin="0px 0px 0px 10px" style={{ display: "flex" }}>
                                White paper
                                <ImgDownload onClick={downloadFile} loading="lazy" src={download} alt=''/>
                              </P1>
                              <P1 lineheight="20px" margin="0px 0px 0px 10px" className="textColorGray">
                                You can download white paper
                                <br /> from here.
                              </P1>
                            </Grid>
                          </Grid>
                        </WapperRightBar>
                      </RightSideBar>
                    </div>
                  </Grid>
                </Grid>
                <br></br>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </section>
    </StripeDiv>
  );
}
