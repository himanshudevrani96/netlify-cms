import Link from 'next/link';
import styled from "styled-components";
import stakeBgImage from "../../public/assets/images/banners/Homepage.png";
import { screenSizes } from "../../shared/styles/theme";
import Image from 'next/image'
//===========Header===============//

export const Container = styled.div`
  margin: auto;
  max-width: 1440px;
  overflow-x: hidden;
  /* position: relative; */
`;

export const ContentWrapper = styled.div`
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-50%, -50%);
  // text-align: center; /* Center align text */
  color: white; /* Set text color to white */
  max-width: 1440px;
`;

export const BgImage: any = styled.div`
  background-image: url(${stakeBgImage?.src});
  height: 850px;
  position: relative;
  max-width: 1600px;
  margin: 0 auto;
  margin-bottom: 50px;
  overflow: hidden;
  display: flex; /* Add flex display to center align vertically */
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  @media (min-width: 375px) and (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 375px) {
    height: 55vh;
  }
`;
export const Bold = styled.b`
  font-size: 20px;
  color: white;
`;

export const H1 = styled.h1`
  font-size: 88px;
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-top: 50px;
  font-family: "SuisseBold";
  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const H6 = styled.h6`
  font-size: 16px;
  align-items: center;
  color: rgba(255, 255, 255, 0.6);
  @media (max-width: 600px) {
    font-size: 12px;
    margin-left: 10%;
    margin-right: 5%;
  }
`;

//================================//

export const Background = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  color: ${(props) => props.theme.primaryText};
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  text-align: center; /* Align text content to the center */
  margin: 0 auto; /* Center the div itself horizontally */
  width: 90%; /* Set a width for the div */
  max-width: 1100px;
  padding-bottom: 270px;
`;

export const TopMainContent = styled.main`
  display: flex;
  flex-direction: column;
  text-align: left; /* Align text content to the center */
  margin: 0 auto; /* Center the div itself horizontally */
  width: 80%; /* Set a width for the div */
  max-width: 1600px;
  margin-bottom: 90px;
`;

export const Section = styled.section`
  margin-top: 40px;
  max-width: 1600px;
  z-index: 10;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 100px;
  }
`;
export const Section2 = styled.section``;

export const Heading = styled.h2`
  color: ${(props) => props.theme.primaryText};
  font-family: "Poppins";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px;
`;

export const SubHeading = styled.h3`
  color: ${(props) => props.theme.primaryText};
  font: 400 20px/34px Inter, sans-serif;
  margin-top: 24px;
`;

export const Paragraph = styled.p`
  color: ${(props) => props.theme.lightGrey};
  font-family: "NeueHaasRegular";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 26px;
`;

export const Links = styled.a`
  color: ${(props) => props.theme.secondaryText};
  text-decoration: underline;
`;

export const StepContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Step = styled.div`
  flex: 1;
  flex-direction: column;
  text-align: left;
  /* margin-top: 20%; */
  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const StepNumber = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  font-family: "NeueHaas";
  font-size: 240px;
  font-style: normal;
  font-weight: 700;
  line-height: 240px;
  color: ${(props: any) => props.theme.lightGrey};
  opacity: 0.1;

  @media (max-width: ${screenSizes.md}px) {
    left: 35px;
  }
  @media (max-width: ${screenSizes.s}px) {
    left: 0px;
  }
`;

export const StepNumber4 = styled(StepNumber)`
  margin-left: -5%;
`;

export const StepNumber2 = styled(StepNumber)`
  margin-left: -5%;
`;
export const StepNumber3 = styled.div`
  font: 700 240px/100% "NeueHaas", sans-serif;
  position: absolute;
  top: 80px;
  color: #5e9b9d3d;
`;

export const StepDetails = styled.div`
  flex: 2;
  flex-direction: column;
  text-align: left;
  /* margin-left: 10%; */
  margin-top: 10%;
  max-width: 350px;

  @media (max-width: 375px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StepDetails3 = styled.div`
  flex: 2;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
  max-width: 350px;
`;

export const StepHeading = styled.h4`
  color: ${(props) => props.theme.primaryText};
  font-family: "Poppins";
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: 52px;
`;

export const StepImage = styled(Image)<any>`
  /* max-width: 566px;
  max-height: 500px; */
  height: 600px;
  border-radius: 12px;
  @media (max-width: ${screenSizes.sm}px) {
    // padding: 0 20px;
    width: 100%;
    height: auto;
  }

  @media (max-width: ${screenSizes.s}px) {
    // padding: 0 20px;
    width: 100%;
    height: auto;
  }
`;

export const StepImageSlider = styled(Image)<any>`
  /* max-width: 566px;
max-height: 500px; */
  height: 600px;
  border-radius: 12px;
  @media (max-width: ${screenSizes.sm}px) {
    // padding: 0 20px;
    width: 300px;
  }
  @media (max-width: ${screenSizes.s}px) {
    // padding: 0 20px;
    width: 100%;
    height: auto;
  }
`;

export const StepImageMobile = styled(Image)`
  /* width: 330px; */
  height: 400px;
  border-radius: 12px;
`;
const ActionButton = styled.button`
  margin-top: 27px;
  background: linear-gradient(267deg, #2fd3b4 0%, #e1d91d 100%);
  color: #0e0e12;
  border: none;
  border-radius: 8px;
  padding: 15px 24px;
  font: 16px/112.5% "NeueHaasRegular", sans-serif;
  // text-transform: uppercase;
  cursor: pointer;
`;
export const ActionButtonStaking = styled(ActionButton)`
  margin-bottom: 10px;
`;

export const ActionButtonKaldi = styled(ActionButton)<any>`
  /* margin-left: 70px; */
`;

export const ImageSection = styled.section`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
  min-height: 720px;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  padding: 50px 60px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`;

export const BackgroundImage = styled(Image)`
  position: absolute;
  inset: 0;
  width: 566px;
  height: 720px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
`;

export const BackgroundImageMobile = styled(Image)`
  inset: 0;
  /* width: 350px; */
  height: 320px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  margin-top: 20px;
`;

export const IconTitleContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 225px;
  width: 113px;
  //   align-items: center;
  @media (max-width: 991px) {
    margin-top: 40px;
  }
`;

export const Icon = styled(Image)`
  width: 120px;
`;

export const Title = styled.h2`
  margin-top: 15px;
  color: white;
  font-family: "NeueHaasRegular";
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  font-family: "NeueHaasRegular";
  color: black;
`;

export const SwapWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: ${screenSizes.sx}px) {
    width: 300px;
  }
`;
