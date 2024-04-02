import { useQuery } from "@apollo/client";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useWeb3React } from "@web3-react/core";
import axios from "axios";
import BigNumber from "bignumber.js";
import * as React from "react";
import { useEffect, useState } from "react";
import { useAllowence } from "../../Blockchain/helperMethods/useAllowence";
import { useApprove } from "../../Blockchain/helperMethods/useApprove";
import { useCreateInstance } from "../../Blockchain/helperMethods/useCreateInstance";
import { useDonate } from "../../Blockchain/helperMethods/useWhiteList";
import { GET_ALL_USERS, GET_USERS_ALL_STAKEAMOUNT } from "../../pages/graphQlQueries";
import Button from "../../shared/components/Button.style";
import Modal from "../../shared/components/Modal";
import { P1 } from "../../shared/components/Text.style";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import {
  CustomInput,
  CustomOption,
  IconSet,
  IconText,
  IconWrapper,
  PriceContainer,
  PriceValue,
  StakingLiquidityWapper,
} from "../staking/Stake.style";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { StyledParallelDiv } from "../../shared/components/ParallelDiv";
import { ContentWrapperCommon2 } from "../../shared/components/common.style";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import { StripeDiv } from "../../shared/styles/GlobalStyles";
import {
  ContentHeading,
  SubContent,
  SubHeading,
} from "../../shared/styles/sharedStyle";
import { VerticalLine } from "../../shared/styles/svgIcons";
import {
  ActivityDescription,
  ActivityImage,
  ActivityTitle,
  ClickHere,
  CountsImage,
  CustomLink,
  CustomLink2,
  CustomLink2Wrapper,
  Header1,
  MainContent1,
  PriceLable,
  Section,
  StakingTierHeading,
  StatDescription,
  StatDetails,
  StatItem,
  StatNumber,
  StatsContainer,
  TextBlock,
  TierRates,
  ViewTimelineButton,
} from "./KaldiConnect.style";
let polygonscanUrl = "https://mumbai.polygonscan.com/tx/";
let transactionHash: any;

let totalStakedAmount = 0;
let allUsersDataLength = 0;
let donatedAmount = 0;
const statsData = [
  {
    id: 1,
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3c8ca2c3932fe4a72d12ee543c8d879a97abeac6c772017b6379c166460db734?apiKey=5b4a4e69c7f546538c34344a01a363c8&",
    altText: "Unique wallet icon",
    statsNumber: "20",
    description: "Number of unique wallet holders",
    padding: "5%",
  },
  {
    id: 2,
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/00812cf3aba5bee65333a9944eef5dc41245fcc6ce4b4dd2a936c657173ad201?apiKey=5b4a4e69c7f546538c34344a01a363c8&",
    altText: "$10 purchases icon",
    statsNumber: "679",
    description: "Number of $10 purchases",
    padding: "20%",
  },
  {
    id: 3,
    imgSrc:
      "https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/3113150f9a3d5ff851e2d35b8d6e6912db45382c154ccaf9d8868f503a122576?apiKey=5b4a4e69c7f546538c34344a01a363c8&",
    altText: "Kaldi Staked per wallet icon",
    statsNumber: "$23.3333",
    description: "Average amount of KALDI staked per wallet",
    padding: "20%",
  },
];

const title = <>KaldiConnect</>;
const description =
  "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
const body = (
  <>
    KALDICOIN is coffee’s digital currency. It has been created to harness the
    vast global coffee market. Over 2 billion <br></br> cups of coffee are drunk
    every day.  Globally, over 3 billion people are still not connected to the
    internet, leaving them <br></br>locked out of the digital economy. It
    matters, and it needs to change.
  </>
);
export default function KaldiConnect() {
  const { library } = useConnectWallet();
  const { account } = useWeb3React();
  const [numberOfKaldiStakedPerWallet, setNumberOfKaldiStakedPerWallet] =
    useState(0);
  const [totalDonatedAmount, setTotalDonationAmount] = useState(0);
  const [totalUniqueUsers, setTotalUniqueUserValue] = useState(0);
  const [multiplePerUintAmount, setMultiplePerUintAmount] = useState("");

  const [allowenceValue, setAllowence] = useAllowence();
  const { approveForWhiteList, checkAllowanceForWhiteList } = useApprove();
  const { donate, multiplePerUintValue } = useDonate();
  const { totalDonationValue } = useDonate();
  const [open, setOpen] = React.useState(false);
  const { getCoinInstance, getWhitelistInstance } = useCreateInstance();
  const [coinBalance, setCoinBalance] = useState(Number);
  const [isStakeSuccessModalOpen, stakeSuccessModalOpen] = useState(false);
  const [dataCount, setData] = useState(0);
  const [priceValue, setPriceValue] = useState(0);

  const donationSuccessModalOpen = () => {
    stakeSuccessModalOpen(true);
  };
  const donationSuccessModalClose = () => {
    stakeSuccessModalOpen(false);
    // document.body.style.overflow = "scroll";
  };

  //=============Pay For Connectivity input box============//

  const [enteredValue, setEnteredValue] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [customValue, setCustomValue] = useState("3");

  const handleCustomClick = () => {
    setIsEditing(true);
    handleIconClick("3");
  };

  const handleInputChangePayForConnectivity = (event: any) => {
    const isValidInput = /^\d*$/.test(event.target.value) || /^[1-9]\d*$/.test(event.target.value);
    if (isValidInput) {
      setCustomValue(event.target.value);
      setEnteredValue(event.target.value);
      getMultiplePerUintValue(event.target.value);
    }
  };

  const handleInputBlur = () => {
    setIsEditing(false);
  };

  const handleIconClick = (icon: any) => {
    setEnteredValue(icon);
    setSelectedIcon(icon);
    setCustomValue("3");
    getMultiplePerUintValue(icon);
  };

  //===========End Pay for connectivity=========================//

  const handleLoaderClose = () => {
    setOpen(false);
  };

  const handleLoaderOpen = () => {
    setOpen(true);
  };

  const convertToEth = (value: number): number => {
    return value / Math.pow(10, 18); // Divide by 10^18 to convert to ETH
  };
  const {
    loading: loadingAllStakedAmount,
    error: errorAllStakedAmount,
    data: allStakedAmount,
    refetch: refetchAllStakedAmount,
  } = useQuery(GET_USERS_ALL_STAKEAMOUNT, {});
  const {
    loading: loadingAllUsers,
    error: errorAllUsers,
    data: allUsers,
    refetch: refetchAllUsers,
  } = useQuery(GET_ALL_USERS, {});
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  useEffect(() => {
    if (account) {
      const fetchCoinBalance = async () => {
        try {
          const KaldiCoinTokenInstance = await getCoinInstance(library);
          const getKaldiKoinBalance = await KaldiCoinTokenInstance.methods
            .balanceOf(account)
            .call();
          const coinbalance =
            parseFloat(getKaldiKoinBalance?.toString()) / Math.pow(10, 18);
          setCoinBalance(coinbalance);
        } catch (error) {
          console.error("Error fetching Kaldi coin balance:", error);
        }
      };
      fetchCoinBalance();
    }
  }, [account, open]);

  useEffect(() => {
    totalStakedAmount = 0;
    if (allStakedAmount) {
      allStakedAmount?.stakes.forEach((element: any) => {
        if (element.stakeAmount) {
          totalStakedAmount += Number(element.stakeAmount);
        }
      });
    }
  }, [allStakedAmount, open]);

  const checkAlreadyHaveAllowence = async () => {
    const allowence = await checkAllowanceForWhiteList(account, library);
    const allownceLimit = parseFloat(allowence?.toString()) / Math.pow(10, 18);
    setAllowence(allownceLimit);
  };

  useEffect(() => {
    checkAlreadyHaveAllowence();
    getTotalUniqueUserValue();
    handleIconClick("1");
  }, [account]);

  const approveWhiteListAllowance = async () => {
    try {
      const approveResult = await approveForWhiteList(
        account,
        library,
        handleLoaderClose
      );
      if (approveResult) {
        const allowence = await checkAllowanceForWhiteList(account, library);
        const allownceLimit =
          parseFloat(allowence?.toString()) / Math.pow(10, 18);
        setAllowence(allownceLimit);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTotalUniqueUserValue = async () => {
    try {
      const whitelistInstance = await getWhitelistInstance(library);
      const totalUniqueUser = await whitelistInstance.methods
        .totalUniqueUser()
        .call();
      if (totalUniqueUser) {
        setTotalUniqueUserValue(Number(totalUniqueUser));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const payForConnectivity = async () => {
    if (Number(enteredValue) > 0) {
      handleLoaderOpen();
      try {
        const donateSend: any = await donate(
          account,
          multiplePerUintAmount,
          library,
          handleLoaderClose
        );
        if (donateSend) {
          transactionHash = donateSend?.transactionHash;
          donatedAmount = convertToEth(
            donateSend?.events?.Donation?.returnValues?.amount
          );
          const allowence = await checkAllowanceForWhiteList(account, library);
          const allownceLimit =
            parseFloat(allowence?.toString()) / Math.pow(10, 18);
          setAllowence(allownceLimit);
          handleLoaderClose();
          setEnteredValue("0");
          donationSuccessModalOpen();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    if (allUsers) {
      allUsersDataLength = allUsers?.users?.length;
    }
  }, [allUsers]);

  useEffect(() => {
    setNumberOfKaldiStakedPerWallet(0);
    // if (account) {
    if (allUsers && allStakedAmount) {
      setNumberOfKaldiStakedPerWallet(
        convertToEth(totalStakedAmount) / allUsersDataLength
      );
      // }
    }
  }, [allStakedAmount, allUsers]);

  useEffect(() => {
    if (allUsers) {
      getTotalDonationAmount();
      getTotalUniqueUserValue();
    }
  }, [
    allStakedAmount,
    allUsers,
    account,
    allowenceValue,
    totalDonatedAmount,
    totalUniqueUsers,
    isStakeSuccessModalOpen,
  ]);

  const getTotalDonationAmount = async () => {
    try {
      const totalDonationAmount = await totalDonationValue(account, library);
      if (totalDonationAmount) {
        setTotalDonationAmount(convertToEth(Number(totalDonationAmount)));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getMultiplePerUintValue = async (unit: any) => {
    if (unit > 0) {
      try {
        // handleLoaderOpen();
        const multiplePerUint = await multiplePerUintValue(
          account,
          library,
          unit
        );
        if (multiplePerUint) {
          const value = new BigNumber(multiplePerUint.toString());
          setMultiplePerUintAmount(value.toFixed());
          handleLoaderClose();
        }
      } catch (error) {
        handleLoaderClose();
        console.log(error);
      }
    }
  };
  useEffect(() => {
    const apiUrl =
      "https://kaldistaking.rapidinnovation.dev/api/v1/subscribersCount";
    axios
      .get(apiUrl)
      .then((response) => {
        setData(response?.data?.data?.count);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  useEffect(() => {
    const apiUrl = "https://kaldistaking.rapidinnovation.dev/api/v1/kaldiPrice";
    axios
      .get(apiUrl)
      .then((response) => {
        setPriceValue(response?.data?.data?.price);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [library]);

  const connectWallet = async () => {
    notify("Please connect with your wallet");
  };

  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <StyledParallelDiv style={{ top: "38%" }} />
      <StatsContainer>
        {statsData.map(
          ({ id, imgSrc, altText, statsNumber, description }, index) => (
            <StatItem key={id}>
              <CountsImage loading="lazy" src={imgSrc} alt={altText} />
              <StatDetails>
                <StatNumber>
                  {id === 3
                    ? numberOfKaldiStakedPerWallet.toFixed(2)
                    : id === 2
                    ? totalUniqueUsers
                    : id === 1
                    ? dataCount
                    : statsNumber}
                </StatNumber>
                <StatDescription>{description}</StatDescription>
              </StatDetails>
              {index !== statsData.length - 1 && <VerticalLine />}
            </StatItem>
          )
        )}
      </StatsContainer>
      <br></br>
      <ContentWrapperCommon2>
        <SubHeading padding="10px 0px">
          We’re connecting millions of smallholder coffee farmers.
        </SubHeading>
        <SubContent>
          Over 5 million of the world's smallholder coffee farmers are living in
          poverty, and over 1 million are living in extreme poverty. Unfair
          business practices blight the coffee industry. We are a team of
          award-winning humanitarians, technologists, and coffee professionals
          with proven track records of interventions, and we believe it’s time
          for systemic and sustainable change in the massive global coffee
          sector.
          <br></br>
          <br></br>
          By connecting smallholder farmers to the internet, they can access a
          vast number of buyers directly. This increases their profitability and
          future-proofs our coffee supply. Without internet connectivity, there
          will be no next generation of coffee farmers. 
          <br></br>
          <br></br>
          ‘Do you really believe that the young people want to go to the
          countryside in an environment that is without connectivity … to do
          physical work so they can get paid peanuts for the golden bean?’ -
          Germán Bahamón, (formerly Apple, Inc.) CEO of The Colombian Coffee
          Growers Federation (FNC), representing 500,000+ Colombian smallholder
          coffee-growing families, addressing the Swiss Coffee Trade
          association, Sep 2023. Colombia is the third largest exporter of green
          coffee in the world. <br></br>
        </SubContent>
        <br></br>
        <SubHeading>
          KALDI is working with global ISPs to deliver a sustainable and
          affordable solution to connect coffee farmers to future-proof their
          livelihoods and your cup of coffee.
        </SubHeading>
      </ContentWrapperCommon2>
      <br></br>
      <Box sx={{ flexGrow: 1 }}>
        <StakingLiquidityWapper>
          <MainContent1>
            <Header1>
              <ContentHeading padding="8px 0px">
                Connectivity Purchase
              </ContentHeading>
              <SubContent>
                You are encouraged to contribute to the initiative as much as
                you wish. This is totally to support the welfare of coffee
                farmers.
                <ClickHere href={"/humanitarian-list"}> Click here </ClickHere>
                to view how your contributions are put to use.
              </SubContent>
            </Header1>
          </MainContent1>

          <Grid container>
            <Grid item xs={1}></Grid>
            <Grid item xs={10} style={{ padding: "10px" }} zIndex={10}>
              <Grid
                container
                direction="row"
                alignItems="center"
                spacing={5}
                justifyContent="center"
              >
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Grid item xs={12}>
                    <StakingTierHeading className="pb-20">
                      <TierRates>
                        <P1 fontSize="16px" weight="bold">
                          Total Amount Donated
                        </P1>
                        <P1 fontSize="16px" weight="bold">
                          ${(totalDonatedAmount * priceValue).toFixed(2)}
                        </P1>
                      </TierRates>
                      <Grid container style={{ paddingTop: "10px" }}>
                        {/* <Grid item xs={12} sm={12} md={1} lg={1}></Grid> */}
                        <Grid
                          item
                          xs={10}
                          sm={12}
                          md={7}
                          lg={9}
                          style={{ padding: "0px 14px" }}
                        >
                          <PriceLable>Amount</PriceLable>
                          <br />
                          <PriceContainer>
                            <PriceValue>
                              {convertToEth(Number(multiplePerUintAmount))}
                            </PriceValue>
                            <IconSet>
                              <IconWrapper
                                selected={selectedIcon === "1"}
                                onClick={() => handleIconClick("1")}
                              >
                                <IconText selected={selectedIcon === "1"}>
                                  1
                                </IconText>
                              </IconWrapper>
                              <IconWrapper
                                selected={selectedIcon === "2"}
                                onClick={() => handleIconClick("2")}
                              >
                                <IconText selected={selectedIcon === "2"}>
                                  2
                                </IconText>
                              </IconWrapper>
                              {isEditing ? (
                                <CustomInput
                                  value={customValue}
                                  onChange={handleInputChangePayForConnectivity}
                                  onBlur={handleInputBlur}
                                  autoFocus
                                />
                              ) : (
                                <CustomOption onClick={handleCustomClick}>
                                  <span>{customValue}</span>
                                </CustomOption>
                              )}
                            </IconSet>
                          </PriceContainer>
                        </Grid>
                        <Grid
                          item
                          xs={12}
                          sm={12}
                          md={5}
                          lg={3}
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            padding: "0px 15px",
                          }}
                        >
                          {Number(account) ? (
                            Number(coinBalance) > Number(enteredValue) ? (
                              Number(allowenceValue) >
                              Number(enteredValue) * 120 ? (
                                <Button
                                  padding="10px"
                                  minWidth="150px"
                                  width="auto"
                                  height="55%"
                                  color="secondary"
                                  margin="35px 0px 20px 0px"
                                  onClick={payForConnectivity}
                                  disabled={open}
                                >
                                  Donate
                                </Button>
                              ) : Number(allowenceValue) <
                                Number(enteredValue) * 120 ? (
                                <Button
                                  padding="10px"
                                  minWidth="150px"
                                  width="auto"
                                  height="55%"
                                  color="secondary"
                                  margin="35px 0px 20px 0px"
                                  onClick={approveWhiteListAllowance}
                                  disabled={open}
                                >
                                  Increase Allowance
                                </Button>
                              ) : (
                                <Button
                                  padding="10px"
                                  minWidth="150px"
                                  width="auto"
                                  height="55%"
                                  color="secondary"
                                  margin="35px 0px 20px 0px"
                                  onClick={approveWhiteListAllowance}
                                  disabled={open}
                                >
                                  Approve
                                </Button>
                              )
                            ) : (
                              <Button
                                padding="10px"
                                minWidth="150px"
                                width="auto"
                                height="55%"
                                margin="35px 0px 20px 0px"
                                color="secondary"
                              >
                                Insufficient Balance
                              </Button>
                            )
                          ) : (
                            <Button
                              padding="10px"
                              minWidth="150px"
                              width="auto"
                              height="55%"
                              margin="35px 0px 20px 0px"
                              color="secondary"
                              onClick={connectWallet}
                            >
                              Connect Wallet
                            </Button>
                          )}
                        </Grid>
                      </Grid>
                      <P1 padding="10px 24px 24px 24px" color="#878D96">
                        KALDI in wallet: &nbsp; &nbsp; &nbsp;(
                        {coinBalance.toFixed(2)})
                      </P1>
                    </StakingTierHeading>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={4}
                  style={{ display: "flex", alignItems: "start" }}
                >
                  <Grid item xs={12}></Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
          <br />
          <Section>
            <Grid container style={{ alignItems: "center" }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={1}
                lg={1}
                style={{ display: "flex", justifyContent: "center" }}
              >
                <ActivityImage
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/104fbf0bb76eda453e84624fc039c5150a45e3bab3d3b2a047b9990b6ca415fe?apiKey=5b4a4e69c7f546538c34344a01a363c8&"
                />
              </Grid>
              <Grid item xs={12} sm={12} md={8} lg={8}>
                <TextBlock>
                  <ActivityTitle>
                    Check our Humanitarian Activities
                  </ActivityTitle>
                  <ActivityDescription>
                    {" "}
                    Neque porro quisquam est qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit.{" "}
                  </ActivityDescription>
                </TextBlock>
              </Grid>
              <Grid item xs={12} sm={12} md={1} lg={1}></Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={2}
                lg={2}
                style={{ display: "flex", justifyContent: "end" }}
              >
                <ViewTimelineButton>
                  {" "}
                  <CustomLink href={"/humanitarian-list"}>
                    View Timeline
                  </CustomLink>{" "}
                </ViewTimelineButton>
              </Grid>
            </Grid>
          </Section>

          <br />
          <div style={{ height: "200px" }}></div>
        </StakingLiquidityWapper>
      </Box>
      <Modal
        onClose={donationSuccessModalClose}
        showModal={isStakeSuccessModalOpen}
        isFooter={false}
        width="40%"
      >
        <P1 fontSize="20px">You've donated successfully!</P1>
        <br></br>
        <P1>You have successfully donated {donatedAmount} KALDI</P1>
        <CustomLink2Wrapper>
          {/* <CustomLink2
            to={polygonscanUrl + transactionHash}
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on polygon scan
          </CustomLink2> */}
        </CustomLink2Wrapper>
        <Button margin="20px 0px 0px 0px" onClick={donationSuccessModalClose}>
          Done
        </Button>
      </Modal>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleLoaderClose}
        >
          Please Wait...
        </Backdrop>
      </div>
    </StripeDiv>
  );
}
