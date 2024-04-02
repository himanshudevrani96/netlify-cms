import styled from "styled-components";
import stakeBgImage from "../../public/assets/images/banners/Homepage.png";
import Link from 'next/link';
import { P1 } from "../../shared/components/Text.style";
import ReactJoyride from "react-joyride";
import { screenSizes } from "../../shared/styles/theme";
import Image from 'next/image'
interface IconWrapperProps {
  selected: boolean;
}
export const BgImage = styled.div`
  background-image: url(${stakeBgImage?.src});
  height: 440px;
  position: relative;
  overflow: hidden; /* Add overflow: hidden to prevent text overflow */
  @media (min-width: 375px) and (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 375px) {
    height: 55vh;
  }
`;

export const CardPattern = styled(Image)`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  left: 130px;
  color: white; /* Added a color for better visibility on the background */
  top: 50px;
  @media (max-width: 600px) {
    left: 13px;
  }
`;

export const Heading = styled.h1`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  color: red;
  line-height: 2;
`;

export const Img = styled(Image)`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 12px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`;

export const WrapperDiv = styled.div`
  width: 100%;
  padding: 20px 0px 20px 0px;
  background-color: ${(props) => props.theme.background};
  border-radius: 12px 12px 0px 0px;
  border: 1px double #0000001c;
  border-color: #f7f7f7;
`;

export const RightSideBar = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 2px 2px 2px 0px;
  border-radius: 2%;
  height: 90vh;
  /* width: 320px; */
`;

export const WapperRightBar = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  border: 1px double ${(props) => props.theme.borderColor};
  border-color: ${(props) => props.theme.borderColor};
  border-radius: 12px;
  /* width: 377px; */
  position: relative;
  z-index: 10;
`;

export const WapperRightBarInRightBar1 = styled(WapperRightBar)`
  margin-top: 10px;
  position: relative;
  z-index: 10;
`;

export const WapperRightBarInRightBar2 = styled(WapperRightBar)`
  margin-top: 20px;
  position: relative;
`;

export const KaldiPrices = styled.a`
  font-weight: bold;
`;

export const StakingListHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "Wrapper", "Wrapper";
  background-color: ${(props) => props.theme.blocksColor};
  color: ${(props) => props.theme.primaryText};
  padding-bottom: 15px;
  padding-top: 10px;
  border: 1px double ${(props) => props.theme.borderColor};
  border-radius: 12px 12px 0px 0px;
`;

export const AllTiersBackGround = styled.div`
  background-color: ${(props) => props.theme.background};
  border: 1px double ${(props) => props.theme.borderColor};
  width: 100%;
  border-radius: 0px 0px 12px 12px;
  padding: 24px 0px;
`;

export const Statistics = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
  grid-template-areas: "Wrapper", "Wrapper";
`;

export const KaldiStakedWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 0px 7px 0px;
`;

export const Tier = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  height: 308px;
  border-radius: 16px;
  width: 204px;
  padding: 24px 16px;
  border: 1px double ${(props) => props.theme.borderColor};
`;

export const DottedLine = styled.div`
  width: 65px;
  border-top: dotted #878d96;
  display: inline-block;
  margin-left: 5px;
  vertical-align: middle;
  border-width: thick;
  @media (max-width: 1280px) and (min-width: 980px) {
    width: 20px !important;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: none;
  border-radius: 16px;
  &:hover {
    border: 1px solid var(--gradiet, #2fd3b4);
    box-shadow: 0px 0px 20px 0px rgba(172, 163, 163, 0.25), 0px 0px 250px 0px rgba(0, 0, 0, 0.25) inset;
  }
`;

export const CustomLink2 = styled(Link)`
  text-decoration: none;
  color: #2fd3b4;
`;
export const CustomLink2Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const UnstakeAmmountsTd = styled.td`
  padding: 5px;
  font-family: "NeueHaasRegular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

export const TableUnstale = styled.table`
  width: 100%;
`;

export const ImgDownload = styled(Image)`
  aspect-ratio: 0.86;
  object-fit: contain;
  object-position: center;
  width: 30px;
  fill: #697077;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
  margin-left: auto;
  padding-right: 10px;
  cursor: pointer;
  height: 36px;
`;

export const StakingTierHeading = styled.div`
  align-items: end;
  background-color: ${(props) => props.theme.blocksColor};
  width: 100%;
  padding: 0px 0px 20px 0px;
  border-radius: 12px 12px 0px 0px;
  color: ${(props) => props.theme.primaryText};
  border: 1px double ${(props) => props.theme.borderColor};
  border-bottom: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StakingLiquidityDetail = styled.div`
  height: 60vh;
  overflow: auto; /* This will add a scrollbar if content overflows */
  background-color: ${(props) => props.theme.background};
  border-radius: 0px 0px 12px 12px;
  border: 1px double ${(props) => props.theme.borderColor};
  // border-bottom: none;
  width: 100%;
  margin-bottom: 10vh;
`;

export const AllOverStakingLiquidityWapper = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  border-top: none;
  border: 1px double ${(props) => props.theme.borderColor};
  margin: 5px 20px 20px 20px;
  border-radius: 12px;
`;

export const StakingLiquidityWapper = styled.div`
  background-color: ${(props) => props.theme.background};
  border-top: none;
  z-index: 10;
`;

export const StakingLiqudityWrapper = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  width: 99%;
  border: 1px double #0000001c !important;
  border-bottom: none;
`;

export const UnStake = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 12px;
`;

export const Rewards = styled.div`
  background-color: ${(props) => props.theme.background};
  border-radius: 12px;
`;

export const TierRates = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow items to wrap to the next line
  justify-content: flex-start; // Start items from the left
  margin-bottom: 15px;
  margin-left: 10px;
  padding-top: 10px;
  color: ${(props) => props.theme.primaryText};
  width: 100%;
  > * {
    @media (max-width: 600px) {
      // Adjust breakpoint as needed
      flex: 1 0 calc(50% - 10px); // Set each item to occupy 50% width on smaller screens
    }
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
`;

export const Column = styled.div`
  flex: 1;
  padding: 16px;
  margin: 8px;
`;
export const StakeColumn = styled.div`
  flex: 1;
  padding: 10px;
  margin-top: 12px;
  margin-right: 12px;
`;

export const RewardAndUnstakeWrapper = styled.div`
  background-color: rgb(240 242 24 ${(props) => props.theme.background});
`;

export const ItemData = styled.div`
  background-color: rgb(240 242 24 ${(props) => props.theme.background});
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 3%;
`;

export const Div2 = styled.div`
  border-radius: 12px;
  border: 1px double ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.blocksColor};
  display: flex;
  width: 92%;
  flex-direction: column;
  padding: 44px 27px;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;

export const Div3 = styled.div`
  color: ${(props) => props.theme.primaryText};
  text-align: left;
  font: 700 16px/32px "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Div4 = styled.div`
  color: ${(props) => props.theme.secondaryText};
  margin-top: 12px;
  font: 450 14px/24px "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const StakingInput = styled.input`
  border-radius: 12px;
  background-color: ${(props) => props.theme.background};
  padding: 16px;
  margin-top: 4px;
  font-size: 16px;
  color: ${(props) => props.theme.secondary};
  border: 1px double ${(props) => props.theme.borderColor};
  border-color: ${(props) => props.theme.borderColor};
  width: -webkit-fill-available;
  -moz-appearance: textfield;
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const PriceContainer = styled.section`
  justify-content: space-between;
  border-radius: 8px;
  border: 1px double ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.background};
  display: flex;
  // max-width: 520px;
  gap: 20px;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  padding: 12px 7px;
  width: 93%;
  margin-left: 7px;
  margin-top: 10px;
`;

export const PriceValue = styled.div`
  color: ${(props) => props.theme.primaryText};
  margin: auto 0;
  font: 18px/111% "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  font-weight: 500;
`;

export const IconSet = styled.div`
  justify-content: flex-end;
  display: flex;
  padding-left: 80px;
  gap: 8px;
  font-size: 16px;
  color: #878d96;
  line-height: 105%;

  @media (max-width: ${screenSizes.s}px) {
    padding-left: 0;
  }
`;

export const IconWrapper = styled.div<IconWrapperProps>`
  border-radius: 4px;
  border: 1px solid ${(props) => (props.selected ? props.theme.primaryText : props.theme.borderColor)};
  display: flex;
  justify-content: space-between;
  gap: 4px;
  color: ${(props) => (props.selected ? props.theme.secondaryText : props.theme.primaryText)};
  padding: 4px 8px;
  cursor: pointer;
`;

export const IconText = styled.div<IconWrapperProps>`
  font-family: "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  color: ${(props) => (props.selected ? props.theme.primaryText : props.theme.secondaryText)};
  font-family: "NeueHaasRegular";
`;

export const Icon = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  width: 12px;
  margin: auto 0;
`;

export const CustomOption = styled.div`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  color: ${(props) => props.theme.primaryText};

  // background-color: #2a2c31;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4px 8px;
  font: 14px/120% "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  cursor: pointer;
`;

export const CustomInput = styled.input`
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.background};
  border: none;
  color: ${(props) => props.theme.primaryText};
  font: 14px/120% "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  padding: 4px 8px;
  width: 50%;
`;

export const H1 = styled.h1`
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 30px;
  font-family: SuisseBold;
`;

export const H6 = styled.h6`
  color: white;
  margin-top: 20px;
  color: rgba(255, 255, 255, 0.6);
`;

export const Bold = styled.b`
  color: white;
  margin-top: 20px;
  @media (max-width: 900px) {
    font-size: 10px;
  }
  @media (max-width: 600px) {
    font-size: 10px;
  }
  @media (max-width: 375px) {
    font-size: 10px;
  }
`;

export const Td = styled.td`
  font-size: 12px;
  padding-bottom: 5px;
`;
export const Td1 = styled(Td)`
  padding-top: 20px;
  color: ${(props) => props.theme.secondaryText};
  width: 60%;
  font-family: "NeueHaasRegular";
`;
export const Td2 = styled(Td)`
  padding-top: 20px;
  font-family: SuisseBold;
  text-align: right;
  font-size: 12px;
  width: 40%;
  font-family: "NeueHaasRegular";
`;

export const Td3 = styled(Td)`
  padding-top: 5px;
  color: ${(props) => props.theme.secondaryText};
  width: 60%;
  font-family: "NeueHaasRegular";
`;
export const Td4 = styled(Td)`
  padding-top: 5px;
  text-align: right;
  width: 10%;
  font-family: "NeueHaasRegular";
`;

export const ATag = styled.a`
  font-weight: bold;
  font-size: 14px;
`;

export const DivContainer = styled.div`
  margin-bottom: 20px;
  white-space: nowrap;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-top: 20px;

  @media (max-width: 980px) {
    flex-direction: column;
  }
`;

export const SpanStyle = styled.span`
  margin-right: 10px;
  display: flex;
  flex-direction: column;
`;

export const textStyle = {
  margin: "0",
};

export const imgStyle = {
  height: "75%",
  marginRight: "5px",
};
export const WapperSection = styled.section`
  margin-left: 5px;
  // margin-top: -15%;
`;

export const StakingFlowIcons = styled.div`
  display: inline-flex;
  align-items: center;
`;

export const FlowDescription = styled.a`
  margin-top: 10px;
  font-size: 14px;
  color: ${(props) => props.theme.secondaryText};
  font-family: "NeueHaasRegular";
`;

export const Clickhere = styled.b`
  color: #2fd3b4;
  cursor: pointer;
`;
export const InputButtonWapper = styled.div`
  position: relative;
`;

export const MaxButton = styled.button`
  position: absolute;
  top: 9px;
  right: 0px;
  height: 70%;
  padding: 5px 30px;
  background: none;
  border-color: transparent;
  color: ${(props) => props.theme.secondary};
`;

export const IncreaseAllowance = styled.button`
  padding: 5px;
  background: red;
  border-color: transparent;
  color: white;
  cursor: pointer;
`;
export const TermsAndConditions = styled.div`
  position: relative;
  top: -20px;
  left: 20px;
  display: flex;
`;

export const TermsWapper = styled.div`
  position: absolute;
  margin-top: 1%;
`;

export const NoDataFound = styled.div`
  text-align: center;
  margin: 0 auto;
  font-family: "NeueHaasRegular";
`;

export const PayForConnectivityWarraper = styled.div`
  background: ${(props) => props.theme.blocksColor};
  border-radius: 8px;
  padding: 10px 0px 0px 0px;
`;

export const StakingWarraper = styled.div`
  background: ${(props) => props.theme.background};
  border-radius: 8px;
  padding: 10px 0px 0px 0px;
`;
export const TextStaking = styled(P1)`
  color: ${(props) => props.theme.secondaryText};
  margin-top: 15px;
`;

export const WapperUnstakeClaimButton = styled.div`
  padding-bottom: 32px;
`;

export const StyledJoyride = styled(ReactJoyride)`
  .react-joyride__options--primary {
    background-color: ${({ theme }) => theme.background};
    z-index: 1000;
  }
  .react-joyride__tooltip {
    border-radius: 5px;
    box-sizing: border-box;
    font-size: 16px;
    max-width: 100%;
    padding: 15px;
    position: relative;
    width: 400px;
    font-family: "NeueHaasRegular";
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.textColor};
  }

  .react-joyride__tooltip__header {
    font-size: 16px;
    color: ${({ theme }) => theme.secondary};
    text-align: start;
  }

  .react-joyride__tooltip__main {
    font-size: 14px;
    font-weight: 400;
    color: ${({ theme }) => theme.tooltipTextColor};
    text-align: start;
  }
`;

export const ContainerNoData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 300px; /* Set the height of the container */
`;
export const StyledParallelDiv = styled.div`
  width: 106vw;
  height: 350px;
  background: ${({ theme }) => theme?.gradientParallel};
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(6deg);
  z-index: 1;

  @media (max-width: ${screenSizes.md}px) {
    top: 13%;
    height: 200px;
  }

  @media (max-width: ${screenSizes.sx}px) {
    top: 15%;
    height: 80px;
  }
`;
