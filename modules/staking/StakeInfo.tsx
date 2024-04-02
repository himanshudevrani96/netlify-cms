import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import BigNumber from "bignumber.js";
import HeaderStaking from "../staking/StakingHeader";
import RightBarStaking from "../staking/RightBarStaking";
import Button from "../../shared/components/Button.style";
import Modal from "../../shared/components/Modal";
import dark from "../../public/assets/images/dark.png";
import light from "../../public/assets/images/light.png";
import rocketIcon from "../../public/assets/images/rocket.png";
import "react-toastify/dist/ReactToastify.css";
import Backdrop from "@mui/material/Backdrop";
import Image from 'next/image'
import {
  TierRates,
  StakingTierHeading,
  Container,
  Column,
  StakeColumn,
  StakingLiquidityDetail,
  AllOverStakingLiquidityWapper,
  StakingLiquidityWapper,
  CustomInput,
  CustomOption,
  Icon,
  IconText,
  IconWrapper,
  IconSet,
  PriceValue,
  PriceContainer,
  StakingInput,
  CustomLink2,
  CustomLink2Wrapper,
  SpanStyle,
  textStyle,
  imgStyle,
  UnstakeAmmountsTd,
  TableUnstale,
  WapperSection,
  StakingFlowIcons,
  FlowDescription,
  Clickhere,
  MaxButton,
  InputButtonWapper,
  TermsWapper,
  TermsAndConditions,
  NoDataFound,
  PayForConnectivityWarraper,
  StakingWarraper,
  H1,
  CustomLink,
  DottedLine,
  DivContainer,
  WapperUnstakeClaimButton,
  StyledJoyride,
  ContainerNoData,
  StyledParallelDiv,
} from "../staking/Stake.style";
import { GET_USERS_ALL_STAKES } from "../../pages/graphQlQueries";
import { useQuery } from "@apollo/client";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { H4, P1 } from "../../shared/components/Text.style";
import { useWeb3React } from "@web3-react/core";
import { useGetAllStakes } from "../../Blockchain/helperMethods/useGetAllStakes";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import { useCreateInstance } from "../../Blockchain/helperMethods/useCreateInstance";
import { useApprove } from "../../Blockchain/helperMethods/useApprove";
import { useStakes } from "../../Blockchain/helperMethods/useStake";
import { useUnStakes } from "../../Blockchain/helperMethods/useUnStake";
import { useDonate } from "../../Blockchain/helperMethods/useWhiteList";
import { useAllowence } from "../../Blockchain/helperMethods/useAllowence";
import Joyride from "react-joyride";
import { useTheme } from "styled-components";
import empty from "../../public/assets/images/empty.png";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import ParallelDiv from "../../shared/components/ParallelDiv";
import { StripeDiv } from "../../shared/styles/GlobalStyles";
import { GET_ALL_USERS } from "../../pages/graphQlQueries";
import { useRouter } from 'next/router';
import { darkTheme } from "../../shared/styles/theme";

type Stake = {
  0: number;
  1: number;
  2: number;
  3: boolean;
  isPaid: boolean;
  reward: number;
  stakeAmount: number;
  startTime: number;
  index: number;
};

let transactionHash: any;
let transactionHashForStake: any;
let allValuesAfterUnstaked: any;
let polygonscanUrl = "https://mumbai.polygonscan.com/tx/";

const title = "Staking";
const description =
  "Internet connectivity for smallholder farmers is a matter of survival";
const body = (
  <>
    Staking your Kaldicoin contributes to providing internet connectivity for
    smallholder coffee farmers. You also will earn rewards and help shape the
    future of coffee. A one-off payment of $10 must be made before staking, and
    a minimum of 100 Kaldicoin must be staked. Your $10 goes towards providing
    coffee farmers with high-speed internet connectivity.
  </>
);

const steps = [
  {
    id: 1,
    completeText: "Approve",
    incompleteText: "",
    detailText: "Connectivity",
  },
  {
    id: 2,
    completeText: "Pay",
    incompleteText: "",
    detailText: "Connectivity",
  },
  { id: 3, completeText: "Approve", detailText: "Staking" },
  { id: 4, completeText: "Staking" },
];

const guideSteps: any[] = [
  {
    target: ".step-1",
    title: (
      <>
        <p>1/4 Steps</p>
        <p>Approve Connectivity</p>
      </>
    ),
    content:
      "Please grant your approval to enable connectivity for farmers through our platform, fostering their access to the internet.",
    placement: "right",
    locale: {
      next: "Okay",
    },
    disableBeacon: true,
  },
  {
    target: ".step-2",
    title: (
      <>
        <p>2/4 Steps</p>
        <p>Pay for farmer's connectivity</p>
      </>
    ),
    content: `Contribute by selecting the number of farmers you wish to assist in gaining connectivity. Choose the "Custom" option for more than two farmers.`,
    placement: "right",
    locale: {
      next: "Okay",
    },
  },
  {
    target: ".step-3",
    title: (
      <>
        <p>2/4 Steps</p>
        <p>Pay for farmer's connectivity</p>
      </>
    ),
    content: `Contribute by selecting the number of farmers you wish to assist in gaining connectivity. Choose the "Custom" option for more than two farmers.`,
    placement: "right",
    locale: {
      next: "Okay",
    },
  },
  {
    target: ".step-4",
    title: (
      <>
        <p>3/4 Steps</p>
        <p>Approve for staking</p>
      </>
    ),
    content:
      "Now the platform requires your approval for the staking amount, follow the steps on metamask to complete the step.",
    placement: "right",
    locale: {
      next: "Okay",
    },
  },
  {
    target: ".step-5",
    title: (
      <>
        <p>4/4 Steps</p>
        <p>Staking</p>
      </>
    ),
    content:
      "Enter the desired amount of Kaldicoin you wish to stake in the platform.",
    placement: "right",
    locale: {
      next: "Okay",
    },
  },
  {
    target: ".step-6",
    title: (
      <>
        <p>4/4 Steps</p>
        <p>Staking</p>
      </>
    ),
    content: `Click "Stake" to conclude the transaction and successfully stake the specified amount of Kaldicoin.`,
    placement: "right",
    locale: {
      next: "Okay",
    },
  },
];

export default function StakeInfo() {
  const convertToEth = (value: number): number => {
    return value / Math.pow(10, 18); // Divide by 10^18 to convert to ETH
  };

  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });

  const [allStakesData, setAllStakesData] = useState<Stake[]>([]);
  const { library } = useConnectWallet();
  const { getAllStakes, getStakeLength, totalStakePerTier, tierDuration } =
    useGetAllStakes();
  const { getCoinInstance, getWhitelistInstance } = useCreateInstance();
  const {
    checkAllowance,
    approve,
    approveForWhiteList,
    checkAllowanceForWhiteList,
  } = useApprove();
  const { stakes } = useStakes();
  const { unStakes } = useUnStakes();
  const { donate, multiplePerUintValue } = useDonate();
  const [multiplePerUintAmount, setMultiplePerUintAmount] = useState(0);
  const [allowenceValue, setAllowence] = useAllowence();
  const [allowenceValueStaking, setAllowenceForStaking] = useState(0);
  const [unstakeIndexValue, setUnstakeIndexValue] = useState(0);
  const { account } = useWeb3React();
  const [isStakeSuccessModalOpen, stakeSuccessModalOpen] = useState(false);
  const [isDisclaimerOpen, setDisclaimerModal] = useState(false);
  const [isUnstakeWarrningOpen, setUnstakeWarrningModal] = useState(false);
  const [coinBalance, setCoinBalance] = useState(Number);
  const [inputValue, setInputValue] = useState("1");
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' && window.innerWidth);
  const [isWhiteListed, setIsWhiteListed] = useState(false);
  const [isUnstakeModalOpen, unstakeModalOpen] = useState(false);
  const [isStakeModalOpen, stakeModalOpen] = useState(false);
  const [isCheckoxIsChecked, setCheckoxIsChecked] = useState(
    typeof sessionStorage !== 'undefined' && sessionStorage.getItem("terms") === "true" ? true : false
  );
  const itemsPerPage = 4;
  const [loadedData, setLoadedData] = useState<any[]>([]);
  const [userData, setUserData] = useState<boolean>(false);
  const [open, setOpen] = React.useState(false);
  const [tierMaturityForLocked, setTierMaturityForLocked] = useState("");
  const [tierMaturity, setTierMaturity] = useState(0);
  const [sumUnclaimed, setSumUnclaimed] = useState("");
  const [userNotStakedYet, setUserNotStakedYet] = useState<boolean>(false);
  const router = useRouter();
  let { id } = router.query;
  
  let currentPage = 0;
  let unstakedData: any[] = [];
  let unClaimedData: any[] = [];
  const tierNumber = Number(id);
  const tier = Number(id);
  const userId = account?.toLocaleLowerCase();
  const [runJoyride, setRunJoyride] = useState(false);

  //=Pay For Connectivity input box=//

  const [isEditing, setIsEditing] = useState(false);
  const [customValue, setCustomValue] = useState("3");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [enteredValue, setEnteredValue] = useState("");
  const theme = useTheme();
  const [currentStep, setCurrentStep] = useState(0);

  const handleCustomClick = () => {
    setIsEditing(true);
    handleIconClick("3");
  };

  const handleInputChangePayForConnectivity = (event: any) => {
    const isValidInput =
      /^\d*$/.test(event.target.value) || /^[1-9]\d*$/.test(event.target.value);
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

  //==========End==============//

  //========Stepper===========//
  const [step, setStep] = useState(1);

  const nextStep = (step: any) => {
    // console.log(step);
    setStep(step);
  };

  //========End Stepper===========//

  const {
    loading: loadingAllStakes,
    error: errorAllStakes,
    data: allUnstakedData,
    refetch: refetchAllStakes,
  } = useQuery(GET_USERS_ALL_STAKES, {
    variables: { userId, tier },
  });

  const {
    loading: loadingAllUsers,
    error: errorAllUsers,
    data: allUsers,
    refetch: refetchAllUsers,
  } = useQuery(GET_ALL_USERS, {});

  const handleLoaderClose = () => {
    setOpen(false);
  };
  const handleLoaderOpen = () => {
    setOpen(true);
  };
  const handleInputChange = (event: any) => {
    let value = event.target.value;
    const regex = /^\d*\.?\d{0,4}$/;
    if (regex.test(value) || value === "") {
      setInputValue(value);
    }
  };

  const handleKeyDown = (event: any) => {
    if (event.code === "Minus") {
      setInputValue("");
    }
  };

  const stakeSuccessfullyModalOpen = () => {
    stakeSuccessModalOpen(true);
  };

  const closeStakeSuccessfullyModal = () => {
    stakeSuccessModalOpen(false);
    // document.body.style.overflow = "scroll";
  };

  const showDisclaimerModal = () => {
    setDisclaimerModal(true);
  };

  const closeDisclaimerModal = () => {
    // if (sessionStorage.getItem("terms") === "true") {
    setDisclaimerModal(false);
    // document.body.style.overflow = "scroll";
    // }
  };

  const doneCloseDisclaimerModalButton = () => {
    if (isCheckoxIsChecked) {
      setDisclaimerModal(false);
      openStakeModal();
    } else {
      toast(
        "Please click the checkbox to acknowledge our disclaimer before proceeding."
      );
    }
  };

  const closeUnstakeWarrningModal = () => {
    setUnstakeWarrningModal(false);
    // document.body.style.overflow = "scroll";
  };

  const showUnstakeWarrningModal = (index: any) => {
    setUnstakeIndexValue(index);
    setUnstakeWarrningModal(true);
  };

  const openUnstakeModal = () => {
    unstakeModalOpen(true);
  };
  const closeUnstakeModal = () => {
    unstakeModalOpen(false);
    // document.body.style.overflow = "scroll";
  };

  const closeStakeModal = () => {
    stakeModalOpen(false);
    // document.body.style.overflow = "scroll";
  };

  const openStakeModal = async () => {
    setInputValue("1");
    if (!account) {
      notify("Please connect with your wallet");
      return;
    }
    const totalStakes: any = await getStakeLength(
      account,
      library,
      tierNumber,
      isWhiteListed
    );
    if (totalStakes === 0 && !isCheckoxIsChecked) {
      showDisclaimerModal();
      return;
    }
    
    if (isWhiteListed) {
      const allowance = await checkAllowance(account, library, tierNumber);
      if (!Number(allowance)) {
        nextStep(3);
      }
      setAllowenceForStaking(allowance);
    } else {
      const allowance = await checkAllowanceForWhiteList(account, library);
      const allowanceLimit =
        parseFloat(allowance?.toString()) / Math.pow(10, 18);
      setAllowence(allowanceLimit);
    }
    stakeModalOpen(true);
  };

  useEffect(() => {
    if (userNotStakedYet) {
      setRunJoyride(false);
    } else {
      setRunJoyride(true);
    }
  }, [userNotStakedYet]);

  const getAllStakesFunction = async (hasDonated: any, currentpage: any) => {
    if (hasDonated && account) {
      const totalStakes: any = await getStakeLength(
        account,
        library,
        tierNumber,
        hasDonated
      );
      if (totalStakes > 0) {
        const startIndex = currentpage * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, totalStakes - 1);
        if (
          Number(totalStakes) >= startIndex &&
          Number(totalStakes) >= endIndex
        ) {
          const data: any = await getAllStakes(
            account,
            library,
            tierNumber,
            hasDonated,
            startIndex === 0 ? startIndex : startIndex,
            endIndex
          );
          await updateAllStakes(data, totalStakes);
        }
      }
    }
  };

  const isElementExist = (arrayToCheck: any, arrayOfArrays: any) => {
    return arrayOfArrays.some(
      (array: any) =>
        array.length === arrayToCheck.length &&
        array.every((value: any, index: any) => value === arrayToCheck[index])
    );
  };

  const updateAllStakes = async (data: any, totalStakes: any) => {
    await data?.forEach((element: any) => {
      if (element.isUnstaked === false) {
        if (!isElementExist(element, unstakedData)) {
          unstakedData.push(element);
        }
      }
    });
    if (Number(totalStakes) > currentPage * itemsPerPage) {
      currentPage++;
      const nextStartIndex = currentPage * itemsPerPage;
      const nextEndIndex = Math.min(
        nextStartIndex + itemsPerPage,
        Number(totalStakes) - 1
      );
      if (
        nextStartIndex < Number(totalStakes) &&
        Number(totalStakes) > nextEndIndex && account
      ) {
        const nextData: any = await getAllStakes(
          account,
          library,
          tierNumber,
          true,
          nextStartIndex === 0 ? nextStartIndex : nextStartIndex,
          nextEndIndex
        );
        await updateAllStakes(nextData, Number(totalStakes));
      } else {
        setAllStakesData(unstakedData);
        setLoadedData(unstakedData);
        calculateUnClaimedData(unstakedData);
      }
    } else {
      setAllStakesData(unstakedData);
      setLoadedData(unstakedData);
      calculateUnClaimedData(unstakedData);
    }
  };

  const calculateUnClaimedData = async (data: any) => {
    data.forEach((element: any) => {
      if (element.isPaid === false) {
        unClaimedData.push(element.reward);
        const sum = unClaimedData.reduce(
          (acc, currentValue) => acc + parseFloat(currentValue),
          0
        );
        setSumUnclaimed(sum);
      }
    });
  };

  useEffect(() => {
    if (allUsers) {
      const have = allUsers?.users?.some((user: any) => user.id === userId);
      setUserNotStakedYet(have);
    }
  }, [allUsers]);

  useEffect(() => {
    const checkUserIsWhiteListedOrNot = async () => {
      try {
        const whitelistInstance = await getWhitelistInstance(library);
        const hasDonated = await whitelistInstance.methods
          .hasDonated(account)
          .call();
        setIsWhiteListed(hasDonated);
        if (hasDonated) {
          getAllStakesFunction(hasDonated, currentPage);
        } else {
          setInputValue("50");
        }
      } catch (error) {
        console.error("Error fetching Kaldi coin balance:", error);
      }
    };
    if (account) {
      checkUserIsWhiteListedOrNot();
    }
  }, [account, allUnstakedData]);

  useEffect(() => {
    const fetchAllStakes = async () => {
      if (isWhiteListed) {
        getAllStakesFunction(isWhiteListed, currentPage);
      }
    };
    if (account) {
      fetchAllStakes();
      handleIconClick("1");
    }
  }, [account, library, setAllStakesData]);

  useEffect(() => {
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
    if (account) {
      fetchCoinBalance();
      handleLoaderClose();
      tierDurationCount();
    }
  }, [account, transactionHash]);

  const convertDuration = (seconds: any) => {
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);

    if (months > 0) {
      if (months === 1) {
        return "30 days";
      } else {
        return `${months} months`;
      }
    } else if (days > 0) {
      if (days === 1) {
        return "1 day";
      } else {
        return `${days} days`;
      }
    } else {
      return minutes ? `${minutes} minutes` : `0 minutes`;
    }
  };

  const tierDurationCount = async () => {
    try {
      const totalStakePerCap = await tierDuration(library, tierNumber);
      setTierMaturity(totalStakePerCap / 60);
      const durationInDays = convertDuration(totalStakePerCap);
      setTierMaturityForLocked(durationInDays);
    } catch (error) {
      console.log("tierDurationCount Error==>>", error);
    }
  };

  const stakeMaturityDate = (startTime: any) => {
    if (startTime) {
      const monthsArray = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

      const date = new Date(Number(startTime) * 1000); // Convert Unix timestamp to JavaScript Date object
      if (isNaN(date.getTime())) {
        return null;
      }
      const newDate = new Date(date.getTime() + tierMaturity * 60 * 1000);
      const day = String(newDate.getDate()).padStart(2, "0");
      const monthIndex = newDate.getMonth();
      const year = newDate.getFullYear();

      const formattedDate = `${monthsArray[monthIndex]} ${day}, ${year}`;
      return formattedDate;
    }
  };

  const approveWhiteListAllowance = async () => {
    handleLoaderOpen();

    try {
      const approveResult = await approveForWhiteList(
        account,
        library,
        handleLoaderClose
      );
      if (approveResult) {
        const allowence = await checkAllowanceForWhiteList(account, library);
        const allownceLimit =
          parseFloat(allowence.toString()) / Math.pow(10, 18);
        setAllowence(allownceLimit);
        nextStep(2);
        updateAllData();
        handleLoaderClose();
        setCurrentStep(1);
      }
    } catch (error) {
      handleLoaderClose();
      console.log(error);
    }
  };

  const getMultiplePerUintValue = async (unit: any) => {
    if (unit > 0) {
      try {
        handleLoaderOpen();
        const multiplePerUint = await multiplePerUintValue(
          account,
          library,
          unit
        );
        if (multiplePerUint) {
          // console.log("multiplePerUintAmount==>>", convertToEth(Number(multiplePerUint)));
          setMultiplePerUintAmount(Number(multiplePerUint));
          // setInputValue(JSON.stringify(convertToEth(Number(multiplePerUint))));
          handleLoaderClose();
        } else {
          handleLoaderClose();
        }
      } catch (error) {
        handleLoaderClose();
        console.log(error);
      }
    }
  };

  const payForConnectivity = async () => {
    if (Number(enteredValue) >= 1) {
      handleLoaderOpen();
      try {
        const donateSend = await donate(
          account,
          JSON.stringify(multiplePerUintAmount),
          library,
          handleLoaderClose
        );
        if (donateSend) {
          const allowence = await checkAllowance(account, library, tierNumber);
          setAllowenceForStaking(allowence);
          setInputValue("1");
          nextStep(3);
          updateAllData();
          handleLoaderClose();
          setIsWhiteListed(true);
          setCurrentStep(3);
        } else {
          handleLoaderClose();
        }
      } catch (error) {
        handleLoaderClose();
        console.log(error);
      }
    }
  };

  const approveAllowance = async () => {
    handleLoaderOpen();
    try {
      const approveResult = await approve(
        account,
        library,
        tierNumber,
        handleLoaderClose
      );
      if (approveResult) {
        const allowence = await checkAllowance(account, library, tierNumber);
        setAllowenceForStaking(allowence);
        updateAllData();
        nextStep(4);
        setCurrentStep(4);
        handleLoaderClose();
      } else {
        handleLoaderClose();
      }
    } catch (error) {
      handleLoaderClose();
      console.log(error);
    }
  };

  const stakeing = async () => {
    handleLoaderOpen();
    try {
      const stakeResult: any = await stakes(
        account,
        inputValue,
        library,
        tierNumber,
        handleLoaderClose
      );
      if (stakeResult) {
        transactionHashForStake = stakeResult?.transactionHash;
        setUserData((prev: boolean) => {
          return !prev;
        });
        updateAllData();
        closeStakeModal();
        stakeSuccessfullyModalOpen();
        handleLoaderClose();
        setInputValue("0");
      } else {
        handleLoaderClose();
      }
    } catch (error) {
      handleLoaderClose();
      console.log(error);
    }
  };

  const arraysAreEqual = (array1: any, array2: any) => {
    if (array1.length !== array2.length) {
      return false;
    }
    return array1.every((value: any, index: any) => value === array2[index]);
  };

  const unStakesWithIndex = async () => {
    handleLoaderOpen();
    try {
      const unStakeResult: any = await unStakes(
        account,
        unstakeIndexValue,
        library,
        tierNumber,
        handleLoaderClose
      );
      if (unStakeResult) {
        transactionHash = unStakeResult?.transactionHash;
        allValuesAfterUnstaked = unStakeResult?.events?.Unstaked?.returnValues;
        setUserData((prev: boolean) => {
          return !prev;
        });
        updateAllData();
        closeUnstakeWarrningModal();
        openUnstakeModal();
        handleLoaderClose();
        return unstakedData.filter(
          (array) => !arraysAreEqual(array, unstakedData[unstakeIndexValue])
        );
      } else {
        handleLoaderClose();
      }
    } catch (error) {
      handleLoaderClose();
      console.log(error);
    }
  };

  const updateAllData = async () => {
    try {
      if (account) {
        getAllStakesFunction(isWhiteListed, currentPage);
        const KaldiCoinTokenInstance = await getCoinInstance(library);
        const getKaldiKoinBalance = await KaldiCoinTokenInstance.methods
          .balanceOf(account)
          .call();
        const coinbalance =
          parseFloat(getKaldiKoinBalance?.toString()) / Math.pow(10, 18);
        setCoinBalance(coinbalance);
      }
    } catch (error) {
      console.error("Error fetching Kaldi coin balance:", error);
    }
  };

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
    if (
      Number(inputValue) >= Number(allowenceValue) &&
      isWhiteListed === false
    ) {
      nextStep(1);
    }
    if (
      Number(inputValue) <= Number(allowenceValue) &&
      isWhiteListed === false
    ) {
      nextStep(2);
    }
    if (
      Number(inputValue) >= Number(new BigNumber(allowenceValueStaking)) &&
      isWhiteListed === true
    ) {
      nextStep(3);
    }
    if (
      Number(inputValue) <= Number(new BigNumber(allowenceValueStaking)) &&
      isWhiteListed === true
    ) {
      nextStep(4);
    }
  }, [allowenceValue, allowenceValueStaking, inputValue, step]);

  const totalReturnPerStake = (element: any) => {
    let obj = {
      reward: element.reward,
      stakedAmount: element.stakeAmount,
    };
    let perStakePercentage = (obj.reward / obj.stakedAmount) * 100;
    return perStakePercentage.toFixed(2);
  };

  const max = () => {
    let fixedNumber = Math.floor(coinBalance * 100) / 100; // Floor the number to two decimal places
    setInputValue(fixedNumber.toFixed(2));
  };

  const handleCheckboxClick = (event: any) => {
    setCheckoxIsChecked(event.target.checked);
    sessionStorage.setItem("terms", event.target.checked);
  };

  const renderAllStakeData = () => {
    if (isWhiteListed && allStakesData && allStakesData?.length > 0) {
      return loadedData.map((element, index) => {
        return element.isUnstaked === true ? (
          ""
        ) : (
          <AllOverStakingLiquidityWapper key={index}>
            <Container>
              <Column>
                <P1 className="textColorGray">Staking Liquidity </P1>
                <P1 fontSize="15px" weight="bold">
                  {" "}
                  {(
                    parseFloat(element.stakeAmount.toString()) /
                    Math.pow(10, 18)
                  ).toFixed(2)}{" "}
                  KALDI
                </P1>
              </Column>
              <Column>
                <P1 className="textColorGray">Return</P1>
                <P1 fontSize="15px" weight="bold" color="#2fd3b4">
                  <Image src={rocketIcon} alt="" />
                  {totalReturnPerStake(element)}%
                </P1>
              </Column>
              <Column>
                <P1 className="textColorGray">Maturity</P1>
                <P1 fontSize="14px" weight="bold">
                  {stakeMaturityDate(element.startTime)}
                </P1>
              </Column>
              <Column>
                <P1 className="textColorGray">Earned</P1>
                <P1 fontSize="15px" weight="bold">
                  {convertToEth(element.reward).toFixed(2)} KALDI
                </P1>
              </Column>
              <StakeColumn>
                <Button
                  border="16px"
                  variant="outlined"
                  weight="700"
                  color="accent"
                  height="28px"
                  margin="5px 0px 0px 0px"
                  onClick={() => showUnstakeWarrningModal(element.index)}
                >
                  Unstake
                </Button>
              </StakeColumn>
            </Container>
          </AllOverStakingLiquidityWapper>
        );
      });
    } else {
      return (
        <ContainerNoData>
          <Image src={empty} alt="empty" />
          <P1
            fontSize="16px"
            lineheight="24px"
            weight="700"
            margin="24px 0px 0px 0px"
          >
            You’ve no stakes
          </P1>
          <P1
            fontSize="14px"
            lineheight="24px"
            weight="500"
            margin="24px 0px 0px 0px"
          >
            All your current stakes will be displayed here.
          </P1>
        </ContainerNoData>
      );
    }
  };

  // xs = -600
  // sm = 600 - 900
  // md = 900 - 1200
  // lg = 1200 -

  const renderStepText = (step: any, isCompleted: boolean) => {
    const { completeText, detailText } = step;
    const text = isCompleted ? completeText : completeText;
    return (
      <p
        className={isCompleted ? "gradient-text" : ""}
        style={{
          ...textStyle,
          color: isCompleted ? "" : "gray",
          margin: "5px 0px 0px 0px",
          fontFamily: "NeueHaasRegular",
          fontSize: "11px",
        }}
      >
        {text} <br /> {detailText}
      </p>
    );
  };

  const handleJoyrideCallback = (data: any) => {
    const { action } = data;
    if (action === "reset") {
      setRunJoyride(true);
    }
  };

  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <StyledParallelDiv />
      <HeaderStaking />
      <WapperSection>
        <Box sx={{ flexGrow: 1 }} marginTop="12px">
          <StakingLiquidityWapper>
            <Grid container>
              <Grid item xs={1}></Grid>
              <Grid item xs={10} zIndex={10}>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  spacing={5}
                  justifyContent="center"
                >
                  <Grid item xs={12} sm={12} md={12} lg={8}>
                    <Grid item xs={12}>
                      <StakingTierHeading>
                        <Grid item xs={12} md={9} lg={10}>
                          <H4 margin="20px 0px 0px 20px" fontSize="16px">
                            Tier {tierNumber}{" "}
                            {windowWidth < 900 && (
                              <Button
                                margin="0px 25% 0px 0px"
                                width="30%"
                                height="40px"
                                color="secondary"
                                style={{ float: "inline-end" }}
                                onClick={openStakeModal}
                              >
                                Stake
                              </Button>
                            )}
                          </H4>
                          <TierRates>
                            <P1
                              margin="0px 0px 0px 10px"
                              className="textColorGray"
                            >
                              Locked Period
                            </P1>
                            <P1
                              fontSize="13px"
                              margin="0px 0px 0px 10px"
                              weight="bold"
                            >
                              {tierMaturityForLocked}
                            </P1>
                            <P1
                              margin="0px 0px 0px 10px"
                              className="textColorGray"
                            >
                              APR
                            </P1>
                            <P1
                              fontSize="13px"
                              margin="0px 0px 0px 10px"
                              weight="bold"
                            >
                              {tierNumber === 1
                                ? "2%"
                                : tierNumber === 2
                                ? "5%"
                                : "10%"}
                            </P1>
                            <P1
                              margin="0px 0px 0px 10px"
                              className="textColorGray"
                            >
                              Early Unstake Reward Penalty
                            </P1>
                            <P1
                              fontSize="13px"
                              margin="0px 0px 0px 10px"
                              weight="bold"
                            >
                              {tierNumber === 1
                                ? "50%"
                                : tierNumber === 2
                                ? "20%"
                                : "10%"}
                            </P1>
                            <P1
                              margin="0px 0px 0px 10px"
                              className="textColorGray"
                            >
                              Early Unstake Penalty
                            </P1>
                            <P1
                              fontSize="13px"
                              margin="0px 0px 0px 10px"
                              weight="bold"
                            >
                              {tierNumber === 1
                                ? "8%"
                                : tierNumber === 2
                                ? "20%"
                                : "35%"}
                            </P1>
                          </TierRates>
                        </Grid>
                        <Grid item xs={6} md={3} lg={2}>
                          {windowWidth > 900 && (
                            <Button
                              width="60%"
                              margin="0px 15px"
                              height="40px"
                              color="secondary"
                              style={{ float: "inline-end" }}
                              onClick={openStakeModal}
                            >
                              Stake
                            </Button>
                          )}
                        </Grid>
                      </StakingTierHeading>

                      <StakingLiquidityDetail>
                        <P1 margin="20px 0px 10px 30px">
                          KALDI in wallet:{" "}
                          {coinBalance !== null
                            ? coinBalance?.toFixed(2) || "00.00"
                            : "Loading..."}
                        </P1>
                        <>{renderAllStakeData()}</>
                      </StakingLiquidityDetail>
                    </Grid>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={4}>
                    <Grid item xs={12}>
                      <RightBarStaking
                        userData={userData}
                        tierNumber={tierNumber}
                        isWhiteListed={isWhiteListed}
                        sumUnclaimed={sumUnclaimed}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={1}></Grid>
            </Grid>
          </StakingLiquidityWapper>
        </Box>
      </WapperSection>

      <Modal
        onClose={closeUnstakeModal}
        showModal={isUnstakeModalOpen}
        isFooter={false}
        width="35%"
      >
        <P1 fontSize="20px" weight="600" fontFamily="Poppins" lineheight="40px">
          You've unstaked successfully!
        </P1>
        <br></br>
        <TableUnstale>
          <tbody>
            <tr>
              <UnstakeAmmountsTd className="textColorGray">
                Principal amount
              </UnstakeAmmountsTd>
              <td></td>
              <UnstakeAmmountsTd style={{ float: "right" }}>
                {convertToEth(
                  Number(allValuesAfterUnstaked?.amount) +
                    Number(allValuesAfterUnstaked?.stakePenalty) -
                    (Number(allValuesAfterUnstaked?.reward) +
                      Number(allValuesAfterUnstaked?.extraReward))
                ).toFixed(2)}{" "}
                KALDI
              </UnstakeAmmountsTd>
            </tr>
            <tr>
              <UnstakeAmmountsTd className="textColorGray">
                Reward amount
              </UnstakeAmmountsTd>
              <td></td>
              <UnstakeAmmountsTd style={{ float: "right" }}>
                {convertToEth(
                  Number(allValuesAfterUnstaked?.reward) +
                    Number(allValuesAfterUnstaked?.extraReward)
                ).toFixed(2)}{" "}
                KALDI
              </UnstakeAmmountsTd>
            </tr>
            {allValuesAfterUnstaked?.isPenalty === true ? (
              <tr>
                {" "}
                <UnstakeAmmountsTd>Penalty amount</UnstakeAmmountsTd>
                <td></td>
                <UnstakeAmmountsTd style={{ color: "red", float: "right" }}>
                  {convertToEth(
                    Number(allValuesAfterUnstaked?.stakePenalty)
                  ).toFixed(2)}{" "}
                  KALDI
                </UnstakeAmmountsTd>
              </tr>
            ) : (
              ""
            )}
            <tr>
              <UnstakeAmmountsTd className="textColorGray">
                Total Received
              </UnstakeAmmountsTd>
              <td></td>
              <UnstakeAmmountsTd style={{ float: "right" }}>
                {convertToEth(Number(allValuesAfterUnstaked?.amount)).toFixed(
                  2
                )}{" "}
                KALDI
              </UnstakeAmmountsTd>
            </tr>
          </tbody>
        </TableUnstale>
        <br />
        <CustomLink2Wrapper>
          <CustomLink2
            href={polygonscanUrl + transactionHash}
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on polygon scan
          </CustomLink2>
        </CustomLink2Wrapper>

        <Button margin="30px 0px 0px 0px" onClick={closeUnstakeModal}>
          Done
        </Button>
      </Modal>

      <Modal
        onClose={closeStakeSuccessfullyModal}
        showModal={isStakeSuccessModalOpen}
        isFooter={false}
      >
        <P1 fontSize="20px">You've Staked Successfully!</P1>
        <br></br>
        <P1 className="textColorGray">
          A substantial commitment of KALDI has been securely staked with our
          platform.
        </P1>
        <br />
        <CustomLink2Wrapper>
          <CustomLink2
            href={polygonscanUrl + transactionHashForStake}
            target="_blank"
            rel="noopener noreferrer"
          >
            View more on polygon scan
          </CustomLink2>
        </CustomLink2Wrapper>
        <Button margin="20px 0px 0px 0px" onClick={closeStakeSuccessfullyModal}>
          Done
        </Button>
      </Modal>

      <Modal
        onClose={closeUnstakeWarrningModal}
        showModal={isUnstakeWarrningOpen}
        isFooter={false}
        width="40%"
      >
        <P1 fontSize="24px" fontFamily="Poppins" weight="600" lineheight="40px">
          Warning-Premature/Early Unstaking{" "}
        </P1>
        <br></br>
        <P1
          className="textColorGray"
          fontSize="14px"
          fontFamily="NeueHaasRegular"
          weight="500"
          lineheight="22px"
        >
          Tokens are locked until maturity dates that you staked for. However if
          unstaked prior to maturity, there will incur a{" "}
          {tierNumber === 1 ? "8%" : tierNumber === 2 ? "20%" : "35%"} unstaking
          penalty fee. Early Unstake Reward Penality{" "}
          {tierNumber === 1 ? "50%" : tierNumber === 2 ? "20%" : "10%"}.
        </P1>
        <WapperUnstakeClaimButton>
          <Button
            margin="30px 0px 0px 0px"
            color="accent"
            variant="outlined"
            width="247px"
            height="48px"
            onClick={closeUnstakeWarrningModal}
          >
            Cancel
          </Button>
          <Button
            margin="30px 0px 0px 10px"
            width="247px"
            height="48px"
            onClick={unStakesWithIndex}
          >
            Unstake/Claim
          </Button>
        </WapperUnstakeClaimButton>
      </Modal>

      <Modal
        onClose={closeDisclaimerModal}
        showModal={isDisclaimerOpen}
        isFooter={false}
      >
        <P1 fontFamily="Poppins" weight="600" fontSize="24px" lineheight="40px">
          Disclaimer
        </P1>
        <br></br>
        <P1
          fontSize="14px"
          weight="500"
          lineheight="22px"
          className="textColorGray"
        >
          When participating in KaldiMarket's staking process, please be aware
          that it involves various
          <br /> risks, including market volatility, which can significantly
          impact the value of KALDICOIN. The initial
          <br /> $10 committed is allocated to supporting smallholder coffee
          farmer connectivity and is non-
          <br />
          refundable. Your assets will be locked for the duration of the staking
          period, and changes in
          <br /> cryptocurrency regulations could affect the staking mechanism
          and rewards. Additionally,
          <br /> network and smart contract risks could pose threats to your
          staked assets. The staking
          <br /> rewards, estimated at annual percentage rates (APR), are
          subject to change and are not
          <br />
          guaranteed. It is important to note that staking KALDICOIN is
          contingent upon purchasing internet
          <br /> connectivity packages for coffee farmers, with staking being a
          secondary benefit. This
          <br />
          disclaimer is not financial advice, and we strongly recommend
          conducting thorough research
          <br /> and possibly consulting a financial advisor before engaging in
          staking activities. By staking, you
          <br />
          acknowledge and accept the risks and uncertainties inherent in
          cryptocurrency staking.
          <br />
        </P1>
        <TermsWapper>
          <input
            type="checkbox"
            defaultChecked={isCheckoxIsChecked}
            name=""
            id=""
            onClick={handleCheckboxClick}
          />
          <TermsAndConditions>
            <P1
              weight="500"
              fontSize="12px"
              lineheight="18px"
              className="textColorGray"
            >
              I Agree to the
            </P1>
            <P1 margin="0px 0px 0px 5px"> Terms and Conditions</P1>
          </TermsAndConditions>
        </TermsWapper>
        <Button
          margin="50px 0px 0px 0px"
          onClick={doneCloseDisclaimerModalButton}
        >
          Done
        </Button>
      </Modal>

      <Modal
        onClose={closeStakeModal}
        showModal={isStakeModalOpen}
        isFooter={false}
        width="35%"
      >
        <div>
          <DivContainer>
            {steps.map((item) => (
              <SpanStyle key={item.id}>
                <StakingFlowIcons>
                  <Image
                    loading="lazy"
                    style={imgStyle}
                    src={item.id <= step ? light : dark}
                    alt="StakeIcon"
                  />
                  {item.id !== steps.length && <DottedLine></DottedLine>}
                </StakingFlowIcons>
                {renderStepText(item, item.id <= step)}
              </SpanStyle>
            ))}
          </DivContainer>
          <br />
          <div>
            {Number(inputValue) === 0 && Number(allowenceValue) === 0 ? (
              <>
                <P1 fontSize="20px">Approve for Farmer’s Connectivity</P1>
                <br></br>
                <FlowDescription>
                  Please approve to donate for Farmer's Connectivity.
                  <CustomLink href="/humanitarian-list" target="_blank">
                    <Clickhere> Click here </Clickhere>
                  </CustomLink>
                  to know more about the humanitarian activity.
                </FlowDescription>
              </>
            ) : Number(inputValue) === 0 &&
              Number(new BigNumber(allowenceValueStaking)) === 0 ? (
              <>
                <P1 fontSize="20px">Approve for Staking</P1>
                <br></br>
                <FlowDescription>
                  Kindly authorize the eligibility for staking privileges from
                  your wallet by granting approval.
                </FlowDescription>
              </>
            ) : Number(inputValue) <= Number(allowenceValue) &&
              !isWhiteListed ? (
              <div className="step-2">
                <P1 fontSize="20px">Pay for Farmer's Connectivity</P1>
                <br></br>
                <FlowDescription>
                  Your contribution to this is the sole eligibility criterion
                  for staking. Choose the number of farmers you want to support
                  and make a difference today.
                </FlowDescription>
                <br></br>
                <br></br>
                <PayForConnectivityWarraper>
                  <PriceContainer>
                    <PriceValue>
                      {convertToEth(Number(multiplePerUintAmount))}
                    </PriceValue>
                    <IconSet>
                      <IconWrapper
                        selected={selectedIcon === "1"}
                        onClick={() => handleIconClick("1")}
                      >
                        <IconText selected={selectedIcon === "1"}>1</IconText>
                      </IconWrapper>
                      <IconWrapper
                        selected={selectedIcon === "2"}
                        onClick={() => handleIconClick("2")}
                      >
                        <IconText selected={selectedIcon === "2"}>2</IconText>
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
                          {customValue}
                        </CustomOption>
                      )}
                    </IconSet>
                  </PriceContainer>
                  <P1
                    margin="10px 10px 10px 10px"
                    color="white"
                    padding="0px 0px 10px 0px"
                  >
                    KALDI in wallet: (
                    {coinBalance !== null
                      ? coinBalance.toFixed(2)
                      : "Loading..."}
                    )
                  </P1>
                </PayForConnectivityWarraper>
              </div>
            ) : Number(inputValue) >=
                Number(new BigNumber(allowenceValueStaking)) &&
              isWhiteListed ? (
              <div className="step-4">
                <P1 fontSize="20px">Approve for Staking</P1>
                <br></br>
                <FlowDescription>
                  Kindly authorize the eligibility for staking privileges from
                  your wallet by granting approval.
                </FlowDescription>
              </div>
            ) : Number(inputValue) <=
                Number(new BigNumber(allowenceValueStaking)) &&
              isWhiteListed ? (
              <div className="step-5">
                <P1 fontSize="20px">Staking</P1>
                <br></br>
                <P1 fontSize="14px" className="textColorGray">
                  You are now eligible to stake KALDICOIN.
                </P1>
                <br></br>
                <StakingWarraper>
                  <InputButtonWapper>
                    <StakingInput
                      type="number"
                      style={{ margin: "0px 9px" }}
                      value={inputValue}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                    />
                    <MaxButton onClick={max}>Max</MaxButton>
                  </InputButtonWapper>
                  <P1
                    margin="10px 10px 10px 10px"
                    padding="0px 0px 10px 0px"
                    color="#878D96"
                  >
                    KALDI in wallet: (
                    {coinBalance !== null
                      ? coinBalance.toFixed(2)
                      : "Loading..."}
                    )
                  </P1>
                </StakingWarraper>
              </div>
            ) : (
              <div className="step-1">
                <P1 fontSize="20px">Approve for Farmer’s Connectivity</P1>
                <br></br>
                <FlowDescription>
                  Please approve to donate for Farmer's Connectivity.{" "}
                  <CustomLink href="/humanitarian-list" target="_blank">
                    <b className="cursor-pointer" style={{ color: "#2fd3b4" }}>
                      {" "}
                      Click here{" "}
                    </b>
                  </CustomLink>
                  to know more about the humanitarian activity.
                </FlowDescription>
              </div>
            )}
          </div>

          <div>
            {Number(inputValue) === 0 && Number(allowenceValue) === 0 ? (
              <Button
                margin="15px 0px 15px 0px"
                onClick={approveWhiteListAllowance}
                disabled={open}
              >
                Approve
              </Button>
            ) : Number(inputValue) === 0 &&
              Number(new BigNumber(allowenceValueStaking)) === 0 ? (
              <Button
                margin="15px 0px 15px 0px"
                onClick={approveAllowance}
                disabled={open}
              >
                Approve
              </Button>
            ) : Number(inputValue) <= Number(allowenceValue) &&
              !isWhiteListed ? (
              <>
                {Number(allowenceValue) >=
                convertToEth(multiplePerUintAmount) ? (
                  <Button
                    margin="15px 0px 15px 0px"
                    onClick={payForConnectivity}
                    disabled={open}
                    className="step-3"
                  >
                    Pay Now
                  </Button>
                ) : (
                  <Button
                    margin="15px 0px 15px 0px"
                    width="100%"
                    height="48px"
                    onClick={approveWhiteListAllowance}
                    disabled={open}
                  >
                    Increase Allowence
                  </Button>
                )}
              </>
            ) : Number(inputValue) >=
                Number(new BigNumber(allowenceValueStaking)) &&
              isWhiteListed &&
              Number(inputValue) >=
                Number(new BigNumber(allowenceValueStaking)) /
                  1000000000000000000 ? (
              <Button
                margin="15px 0px 15px 0px"
                onClick={approveAllowance}
                disabled={open}
              >
                Approve
              </Button>
            ) : Number(inputValue) <=
                Number(new BigNumber(allowenceValueStaking)) &&
              isWhiteListed ? (
              <>
                {Number(inputValue) >
                Number(new BigNumber(allowenceValueStaking)) /
                  1000000000000000000 ? (
                  <Button
                    margin="15px 0px 15px 0px"
                    width="100%"
                    height="48px"
                    onClick={approveAllowance}
                    disabled={open}
                  >
                    Increase Allowence
                  </Button>
                ) : (
                  <Button
                    margin="15px 0px 15px 0px"
                    width="100%"
                    height="48px"
                    onClick={stakeing}
                    disabled={open}
                    className="step-6"
                  >
                    Stake
                  </Button>
                )}
              </>
            ) : (
              <Button
                margin="15px 0px 15px 0px"
                onClick={approveWhiteListAllowance}
                disabled={open}
              >
                Approve
              </Button>
            )}
          </div>
        </div>
        <Joyride
          steps={guideSteps}
          run={runJoyride}
          continuous={true}
          showProgress={false}
          showSkipButton={true}
          hideBackButton={true}
          disableScrolling={false}
          hideCloseButton={true}
          stepIndex={currentStep}
          spotlightClicks={false}
          disableOverlay={true}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              primaryColor: darkTheme.background,
              zIndex: 1000,
              backgroundColor: darkTheme.background,
              arrowColor: "#0C0C11",
              textColor: darkTheme.primaryText,
            },
            buttonNext: {
              borderRadius: 4,
              color: darkTheme.stroke,
            },
            tooltip: {
              borderRadius: 5,
              boxSizing: "border-box" as const,
              fontSize: 16,
              maxWidth: "100%",
              padding: 15,
              position: "relative" as const,
              width: 400,
              fontFamily: "NeueHaasRegular",
            },
            tooltipTitle: {
              fontSize: 16,
              color: "#F7F7F7",
              textAlign: "start",
            },
            tooltipContent: {
              fontSize: 14,
              fontWeight: 400,
              color: "#777E90",
              textAlign: "start",
            },
          }}
        />
        {/* <StyledJoyride
          steps={guideSteps}
          run={runJoyride}
          continuous={true}
          showProgress={false}
          showSkipButton={true}
          hideBackButton={true}
          disableScrolling={false}
          hideCloseButton={true}
          spotlightClicks={false}
          disableOverlay={true}
          callback={handleJoyrideCallback}
          styles={{
            options: {
              primaryColor: "#2FD3B4",
              zIndex: 1000,
              backgroundColor: "#0C0C11",
              arrowColor: "#0C0C11",
              textColor: "#F7F7F7",
            },
          }}
        /> */}
      </Modal>
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
          open={open}
          onClick={handleLoaderClose}
        >
          Please Wait...
        </Backdrop>
      </div>
    </StripeDiv>
  );
}
