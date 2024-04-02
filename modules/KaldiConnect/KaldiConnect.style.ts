import styled from "styled-components";
import stakeBgImage from '../../public/assets/images/banners/Homepage.png';
import Link from 'next/link';
import { screenSizes } from "../../shared/styles/theme";

export const ContentWrapper = styled.div`
  position: relative;
  //   width: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px;
  gap: 8px;
  margin-left: 8%;
  @media (max-width: 900px) {
    margin-left: 2%;
  }
  @media (max-width: 600px) {
    margin-left: 3%;
  }
  @media (max-width: 375px) {
    margin-left: 5%;
  }
`;

export const BgImage = styled.div`
  background-image: url(${stakeBgImage});
  height: 850px;
  position: relative;
  overflow: hidden; /* Add overflow: hidden to prevent text overflow */
  @media (max-width: 900px) {
    height: 70vh;
  }
  @media (max-width: 600px) {
    height: 80vh;
  }
  @media (max-width: 375px) {
    height: 90vh;
  }
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
  margin-top: 5px;
  color: rgba(255, 255, 255, 0.6);
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
export const Bold = styled.b`
  margin-top: 20px;
  color: white;
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

export const Bold2 = styled(Bold)`
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  font-family: "NeueHaasRegular";
`;

export const StatsContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-top: 1px solid ${(props) => props.theme.borderColor};
  border-bottom: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.primaryText};
  padding: 24px 140px;
  gap: 20px;
  max-width: 1440px;
  position: relative;
  margin-bottom: 3%;
  background: ${(props) => props.theme.blocksColor};
  z-index: 1;

  @media (max-width: ${screenSizes.xl}px) {
    flex-wrap: wrap;
    padding: 24px 50px;
  }

  @media (max-width: ${screenSizes.s}px) {
    flex-wrap: wrap;
    padding: 12px 20px;
  }
`;

export const StatItem = styled.article`
  display: flex;
  gap: 14px;
  //   padding-left: 10%;
  @media (max-width: 991px) {
    flex-basis: 100%;
  }
  svg {
    margin-left: 80px;
  }
`;

export const StatDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatNumber = styled.h3`
  color: ${(props) => props.theme.primaryText};
  font-size: 36px;
  font-weight: 700;
  line-height: 42px;
  font-family: "NeueHaasRegular";
  background: ${(props) => props.theme.gradientForStaking};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const StatDescription = styled.p`
  color: ${(props) => props.theme.lightGrey};
  font: 500 14px/22px "Neue Haas Grotesk Display Pro", -apple-system, Roboto, Helvetica, sans-serif;
  font-family: "NeueHaasRegular";
`;

export const MainContent1 = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px 0px 20px 9%;
  width: 80%;
`;
export const Header1 = styled.header`
  color: #fff;
  z-index: 10;
`;
export const Title1 = styled.h1`
  font: 700 24px/150% "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
`;
export const Description1 = styled.p`
  color: #878d96;
  margin-top: 4px;
  font: 450 14px/20px "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  width: 60%;
`;

export const StakingTierHeading = styled.div`
  align-items: end;
  border-radius: 10px;
  width: 100%;
  color: ${(props) => props.theme.secondaryText};
  border: 1px double ${(props) => props.theme.borderColor};
`;

export const TierRates = styled.div`
  display: flex;
  flex-wrap: wrap; // Allow items to wrap to the next line
  justify-content: space-between; // Start items from the left
  margin-bottom: 15px;
  //   padding: 20px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
  // border: 1px double ${(props) => props.theme.borderColor};
  border-radius: 12px 12px 0px 0px;
  color: ${(props) => props.theme.secondaryText};
  background-color: ${(props) => props.theme.blocksColor};
  > * {
    @media (max-width: 600px) {
      flex: 1 0 calc(50% - 10px); // Set each item to occupy 50% width on smaller screens
    }
  }
`;

export const Section = styled.section`
  border-radius: 12px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.blocksColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 30px;
  padding: 24px 24px 24px 0;
  width: 83%;
  margin-left: 8%;
  @media (max-width: 991px) {
    padding: 10px;
  }
`;

export const ActivityImage = styled.img`
  aspect-ratio: 1;
  object-fit: auto;
  object-position: center;
  width: 60px;
  float: right;
  height: 60px;
`;

export const TextBlock = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ActivityTitle = styled.h3`
  color: ${(props) => props.theme.primaryText};
  text-align: center;
  font-family: "NeueHaasBold";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ActivityDescription = styled.p`
  color: ${(props) => props.theme.lightGrey};
  font-family: "NeueHaasRegular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const ViewTimelineButton = styled.button`
  justify-content: right;
  border-radius: 8px;
  background-color: #2fd3b4;
  color: black;
  white-space: nowrap;
  text-align: right;
  margin: auto 0;
  margin-top: 10px;
  padding: 15px 24px;
  font: 500 13px/138% "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  border: none;
  @media (max-width: 991px) {
    white-space: initial;
  }
`;

export const CountsImage = styled.img`
  width: 33px;
  margin: auto 0;
  object-fit: cover;
`;

export const ClickHere = styled(Link)`
  color: rgba(47, 211, 180, 1);
  cursor: pointer;
  text-decoration: none;
  font-size: 14px;
`;

export const PriceLable = styled.a`
  font-family: "NeueHaasRegular";
  padding-left: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 26px;
  color: ${(props) => props.theme.primaryText};
`;
export const CustomLink2 = styled(Link)`
  text-decoration: none;
  color: #2fd3b4;
  padding-top: 10px;
`;
export const CustomLink2Wrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
`;
