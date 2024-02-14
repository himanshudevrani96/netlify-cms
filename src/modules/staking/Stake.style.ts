import styled from "styled-components";
import stakeBgImage from "../../assets/images/stake_bg.png";
import { Link } from "react-router-dom";

export const BgImage = styled.div`
  background-image: url(${stakeBgImage});
  height: 239px; /* Removed quotes around the height value */
  position: relative;
`;

export const ContentWrapper = styled.div`
  position: absolute;
  bottom: 33px; /* Adjusted the bottom value */
  left: 168px; /* Adjusted the left value */
  color: white; /* Added a color for better visibility on the background */
`;

export const Heading = styled.h1`
  font-size: 16px;
  font-family: "Courier New", Courier, monospace;
  color: red;
  line-height: 2;
`;

export const Img = styled.img`
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
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  border: 1px double #0000001c;
  bordercolor: #f7f7f7;
`;

export const RightSideBar = styled.div`
  background-color: white;
  // width: 55%;
  // margin-left: 20%;
  padding: 2px 2px 2px 0px;
  border-radius: 2%;
  height: 70vh;
`;

export const StakingListHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  grid-template-areas: "Wrapper", "Wrapper";
`;

export const Statistics = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
  grid-template-areas: "Wrapper", "Wrapper";
`;

export const Tier = styled.div`
  background-color: #ffffff;
  height: 297px;
  border-radius: 16px;
  width: 200px;
`;

export const TierRatesAndFees = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 2fr;
  grid-template-areas: "Wrapper", "Wrapper";
`;

export const ImgDownload = styled.img`
  aspect-ratio: 0.86;
  object-fit: contain;
  object-position: center;
  width: 25px;
  fill: #697077;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`;

export const StakingTierHeading = styled.div`
  align-items: end;
  background-color: #ffffff;
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  padding: 0px 0px 20px 0px;
`;

export const StakingLiquidityDetail = styled.div`
  height: 60vh;
  overflow: auto; /* This will add a scrollbar if content overflows */
`;

export const StakingLiqudityWrapper = styled.div`
  background-color: white;
  width: 99%;
  border-radius: 10px;
  border: 1px double #0000001c !important;
`;
export const UnStake = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px double #0000001c;
  bordercolor: #f7f7f7;
`;
export const Rewards = styled.div`
  background-color: white;
  border-radius: 10px;
  border: 1px double #0000001c;
  bordercolor: #f7f7f7;
`;
export const TierRates = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow items to wrap to the next line
  justify-content: flex-start; // Start items from the left

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
`;

export const Column = styled.div`
  flex: 1;
  padding: 16px;
  margin: 8px;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  border: 1px double #0000001c;
  bordercolor: #f7f7f7;
`;

export const WapperRightBar = styled.div`
  background-color: white;
  border: 1px double #0000001c;
  bordercolor: #f7f7f7;
  border-radius: 10px;
`;
export const RewardAndUnstakeWrapper = styled.div`
  background-color: rgb(240 242 242);
  border: outlined;
`;
