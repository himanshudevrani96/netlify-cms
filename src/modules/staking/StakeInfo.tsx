// import React from 'react';
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { TierRates, StakingTierHeading, Container, Column, StakingLiquidityDetail, UnStake, Rewards, StakingLiqudityWrapper, RewardAndUnstakeWrapper } from "../staking/Stake.style";
import HeaderStaking from "../staking/StakingHeader";
import RightBarStaking from "../staking/RightBarStaking";
import Button from "../../shared/components/Button.style";
import Modal from "../../shared/components/Modal";
import { useEffect, useState } from "react";
import { H4, P1 } from "../../shared/components/Text.style";
import { useWeb3React } from "@web3-react/core";
import { useGetAllStakes } from "../../Blockchain/helperMethods/useGetAllStakes";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import { useCreateInstance } from "../../Blockchain/helperMethods/useCreateInstance";
import { useApprove } from "../../Blockchain/helperMethods/useApprove";
import { useStakes } from "../../Blockchain/helperMethods/useStake";
import { useUnStakes } from "../../Blockchain/helperMethods/useUnStake";
import { useClaim } from "../../Blockchain/helperMethods/useRewards";
import { useAllowence } from "../../Blockchain/helperMethods/useAllowence";
import "../../shared/loader/Loader.css"; // Import the CSS file for the blur effect

type Stake = {
  0: number;
  1: number;
  2: number;
  3: boolean;
  isPaid: boolean;
  reward: number;
  stakeAmount: number;
  startTime: number;
};

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function StakeInfo() {
  const [allStakesData, setAllStakesData] = useState<Stake[]>([]);
  const { library } = useConnectWallet();
  const { getAllStakes } = useGetAllStakes();
  const { getCoinInstance } = useCreateInstance();
  const { checkAllowance, approve } = useApprove();
  const { stakes } = useStakes();
  const { unStakes } = useUnStakes();
  const { claim } = useClaim();
  const [allowenceValue, setAllowence] = useAllowence();
  const { account } = useWeb3React();
  const [isrewardModalOpen, rewardModalOpen] = useState(false);
  const [isStakeSuccessModalOpen, stakeSuccessModalOpen] = useState(false);
  const [coinBalance, setCoinBalance] = useState(Number);
  const [inputValue, setInputValue] = useState("");
  const [isBlurred, setIsBlurred] = useState<boolean>(true); // State to toggle blur effect
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const openRewardModal = () => {
    rewardModalOpen(true);
  };

  const closeRewardModal = () => {
    rewardModalOpen(false);
  };

  const stakeSuccessfullyModalOpen = () => {
    stakeSuccessModalOpen(true);
  };

  const closeStakeSuccessfullyModal = () => {
    stakeSuccessModalOpen(false);
  };

  const [isUnstakeModalOpen, unstakeModalOpen] = useState(false);
  const openUnstakeModal = () => {
    unstakeModalOpen(true);
  };

  const closeUnstakeModal = () => {
    unstakeModalOpen(false);
  };

  const [isStakeModalOpen, stakeModalOpen] = useState(false);
  const openStakeModal = async () => {
    const allowence = await checkAllowance(account, library);
    const allownceLimit = parseFloat(allowence.toString()) / Math.pow(10, 18);
    setAllowence(allownceLimit);
    stakeModalOpen(true);
  };

  const closeStakeModal = () => {
    stakeModalOpen(false);
  };

  const [isOpenStates, setIsOpenStates] = useState(Array(allStakesData.length).fill(false)); // Replace ARRAY_LENGTH with the length of your array
  const toggleIsOpen = (index: any) => {
    const updatedIsOpenStates = [...isOpenStates];
    updatedIsOpenStates[index] = !updatedIsOpenStates[index];
    setIsOpenStates(updatedIsOpenStates);
  };

  useEffect(() => {
    const fetchAllStakes = async () => {
      const data: any = await getAllStakes(account, library);
      setAllStakesData(data);
    };
    fetchAllStakes();
  }, [account, library, setAllStakesData]);

  const dateFormate = (timestamp: any) => {
    if (timestamp) {
      const date = new Date(Number(timestamp) * 1000); // Convert Unix timestamp to JavaScript Date object
      if (isNaN(date.getTime())) {
        console.error("Invalid timestamp provided.");
        return null;
      }
      // Add 30 days to the date
      date.setDate(date.getDate() + 30);
      const days = String(date.getDate()).padStart(2, "0");
      const months = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-based in JavaScript Date
      const years = date.getFullYear();
      // const hours = String(date.getHours()).padStart(2, "0");
      // const minutes = String(date.getMinutes()).padStart(2, "0");
      // const seconds = String(date.getSeconds()).padStart(2, "0");
      const formattedDate = `${days}/${months}/${years}`;
      return formattedDate;
    }
  };
  useEffect(() => {
    // Toggle blur effect by updating the class of the body element
    if (isBlurred) {
      document.body.classList.add("blur"); // Add blur class
    } else {
      document.body.classList.remove("blur"); // Remove blur class
    }
  }, [isBlurred]);

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
    fetchCoinBalance();
    setIsBlurred(false);
  }, []);

  const stakeing = async () => {
    setIsBlurred(true);
    try {
      const stakeResult = await stakes(account, inputValue, library);
      if (stakeResult) {
        updateAllData();
        closeStakeModal();
        stakeSuccessfullyModalOpen();
        setIsBlurred(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const approveAllowance = async () => {
    setIsBlurred(true);
    try {
      const approveResult = await approve(account, library);
      if (approveResult) {
        updateAllData();
        closeStakeModal();
        setIsBlurred(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const unStakesWithIndex = async (index: any) => {
    setIsBlurred(true);
    try {
      const unStakeResult = await unStakes(account, index, library);
      if (unStakeResult) {
        updateAllData();
        closeStakeModal();
        setIsBlurred(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const claimReward = async (index: any) => {
    setIsBlurred(true);
    try {
      const claimResult = await claim(account, index, library);
      if (claimResult) {
        updateAllData();
        openRewardModal();
        setIsBlurred(false);
      }
    } catch (error) {
      console.log(error);
    }
    // await claim(account, index, library);
  };

  const updateAllData = async () => {
    const data: any = await getAllStakes(account, library);
    setAllStakesData(data);
    try {
      const KaldiCoinTokenInstance = await getCoinInstance(library);
      const getKaldiKoinBalance = await KaldiCoinTokenInstance.methods.balanceOf(account).call();
      const coinbalance = parseFloat(getKaldiKoinBalance.toString()) / Math.pow(10, 18);
      setCoinBalance(coinbalance);
      openUnstakeModal();
    } catch (error) {
      console.error("Error fetching Kaldi coin balance:", error);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderAllStakeData = () => {
    console.log(allStakesData);
    if (allStakesData && allStakesData.length > 0) {
      return allStakesData.map((element, index) => {
        return (
          <StakingLiqudityWrapper key={index}>
            <Container className="mt-5">
              <Column>
                {" "}
                <P1 className="font-12">Staking Liquidity </P1>
                <P1 className="font-15 font-w-900">$ {parseFloat(element.stakeAmount.toString()) / Math.pow(10, 18)}</P1>
              </Column>
              <Column>
                {" "}
                <P1 className="font-12">Return</P1>
                <P1 className="font-15 font-w-900" style={{ color: "#2fd3b4" }}>
                  <img src="src/assets/images/rocket.png" alt="" />
                  77.67%
                </P1>
              </Column>
              <Column>
                {" "}
                <P1 className="font-12">Maturity</P1>
                <P1 className="font-15 font-w-900">{dateFormate(element.startTime)}</P1>
              </Column>
              <Column>
                {" "}
                <P1 className="font-12">Earned</P1>
                <P1 className="font-15 font-w-900">{(element.reward / Math.pow(10, 18)).toFixed(4)} Kaldi</P1>
              </Column>
              <div>
                <img src="src/assets/images/dropdownBottom.png" height={"25px"} className="mt-30 cursor-pointer mr-50" alt="" onClick={() => toggleIsOpen(index)} />
              </div>
            </Container>
            {isOpenStates[index] && (
              <RewardAndUnstakeWrapper>
                <Container className="ml-10">
                  <Column>
                    <UnStake className="p-10 pt-10">
                      <P1 className="ml-10 mt-5">
                        UNSTAKE <img src="src/assets/images/SVG.png" alt="" />
                      </P1>
                      <>
                        {parseFloat(element.stakeAmount.toString()) / Math.pow(10, 18) <= 0 ? (
                          <Button variant="outlined" style={{ background: "white", color: "black" }} disabled onClick={() => unStakesWithIndex(index)}>
                            Unstake
                          </Button>
                        ) : (
                          <Button variant="outlined" style={{ background: "white", color: "black" }} onClick={() => unStakesWithIndex(index)}>
                            Unstake
                          </Button>
                        )}
                      </>
                    </UnStake>
                  </Column>
                  <Column>
                    <Rewards className="p-10 pt-10">
                      <P1 className="ml-10 mt-5">REWARDS</P1>
                      <Button variant="outlined" style={{ background: "#E9EAEB", color: "#BDC2C4" }} onClick={() => claimReward(index)}>
                        Claim Rewards
                      </Button>
                    </Rewards>
                  </Column>
                </Container>
              </RewardAndUnstakeWrapper>
            )}
          </StakingLiqudityWrapper>
        );
      });
    } else {
      return null;
    }
  };
  // xs = -600
  // sm = 600 - 900
  // md = 900 - 1200
  // lg = 1200 -

  return (
    <>
      <HeaderStaking />
      <section className="ml-50">
        <Box sx={{ flexGrow: 1 }} className="mt-12">
          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10}>
              <Grid container direction="row" alignItems="center" spacing={5} justifyContent="center">
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Grid item xs={12}>
                    <Item>
                      <StakingTierHeading>
                        <H4>
                          Tier 1{" "}
                          {windowWidth < 900 && (
                            <Button width="15%" className="ml-40" height="40px" style={{ float: "inline-end" }} onClick={openStakeModal}>
                              STAKE
                            </Button>
                          )}
                        </H4>
                        <TierRates className="">
                          <P1 className="font-12">Locked Period</P1>
                          <P1 className="font-13 ml-10 font-w-900">30 Days</P1>
                          <P1 className="font-12 ml-10">Reward Rate</P1>
                          <P1 className="font-13 ml-10 font-w-900">2%</P1>
                          <P1 className="font-12 ml-10">Early Exit Reward Fee</P1>
                          <P1 className="font-13 ml-10 font-w-900">8%</P1>
                          <P1 className="font-12 ml-10">Early Exit Fee</P1>
                          <P1 className="font-13 ml-10 font-w-900">50%</P1>
                          {windowWidth > 900 && (
                            <Button width="15%" className="ml-40" height="40px" style={{ float: "inline-end" }} onClick={openStakeModal}>
                              STAKE
                            </Button>
                          )}
                        </TierRates>
                      </StakingTierHeading>
                    </Item>
                    <Item sx={{ height: "70vh" }}>
                      <P1 className="ml-30 mb-10 mt-10">KALDI in wallet: $ {coinBalance !== null ? coinBalance : "Loading..."}</P1>
                      <StakingLiquidityDetail>
                        <>{renderAllStakeData()}</>
                      </StakingLiquidityDetail>
                    </Item>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={4}>
                  <Grid item xs={12}>
                    <Item sx={{ height: 550 }}>
                      <RightBarStaking />
                    </Item>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </Box>
      </section>
      <Modal onClose={closeRewardModal} showModal={isrewardModalOpen} heading="Rewards Claimed Successfully!" isFooter={false} width="40%" height="40%">
        <P1>Once an Offer is sent, the owner will have 24 hours to accept. If the Offer expires, the funds will be available in your Marketplace Balance.</P1>
        <Button className="mt-30" onClick={closeRewardModal}>
          Done
        </Button>
      </Modal>
      <Modal onClose={closeUnstakeModal} showModal={isUnstakeModalOpen} heading="You've unstaked successfully!" isFooter={false} width="40%" height="40%">
        <P1>Once an Offer is sent, the owner will have 24 hours to accept. If the Offer expires, the funds will be available in your Marketplace Balance.</P1>
        <Button className="mt-30" onClick={closeUnstakeModal}>
          Done
        </Button>
      </Modal>

      <Modal onClose={closeStakeSuccessfullyModal} showModal={isStakeSuccessModalOpen} heading="You've Staked Successfully!" isFooter={false} width="40%" height="40%">
        <P1>Once an Offer is sent, the owner will have 24 hours to accept. If the Offer expires, the funds will be available in your Marketplace Balance.</P1>
        <Button className="mt-30" onClick={closeStakeSuccessfullyModal}>
          Done
        </Button>
      </Modal>

      <Modal onClose={closeStakeModal} showModal={isStakeModalOpen} heading="Stake Kaldi" isFooter={false} width="40%" height="60%">
        <P1>Once an Offer is sent, the owner will have 24 hours to accept. If the Offer expires, the funds will be available in your Marketplace Balance.</P1>
        <div style={{ backgroundColor: "#E4E4E4", borderRadius: "5px" }} className="p-5 mt-10">
          <div style={{ color: "#E4E4E4", position: "relative" }}>
            <input
              type="number"
              className="w-100 pt-10 pb-10"
              style={{ backgroundColor: "rgb(228, 228, 228)", color: "rgb(0 0 0 / 0%) !important", borderColor: "#0000001a" }}
              value={inputValue} // Set the value of the input to the state variable
              onChange={handleInputChange}
            />
            <span style={{ position: "absolute", top: "60%", right: "8%", transform: "translateY(-50%)", color: "rgb(122 141 138)" }}>Max</span>
          </div>
        </div>
        <P1 className="mt-10">KALDI in wallet: (${coinBalance !== null ? coinBalance : "Loading..."})</P1>
        <>
          {coinBalance < Number(inputValue) ? (
            <Button className="mt-30">Insufficient Balance</Button>
          ) : Number(inputValue) <= Number(allowenceValue) ? (
            <Button className="mt-30" onClick={stakeing}>
              Stake
            </Button>
          ) : (
            <Button className="mt-30" onClick={approveAllowance}>
              Approve
            </Button>
          )}
        </>
      </Modal>
    </>
  );
}
