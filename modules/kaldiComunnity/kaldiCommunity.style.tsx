import styled from "styled-components";
import  Link  from "next/link";
import stakeBgImage from "../../public/assets/images/staking.png";
import Button from "../../shared/components/Button.style";
import { screenSizes } from "../../shared/styles/theme";
import Image from 'next/image'
export const CustomLink = styled(Link)`
  text-decoration: none;
  color: black;
`;
export const MainContainer = styled.main`
  display: flex;
  max-width: 928px;
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  z-index: 10;
  position: relative;
  margin: 0 140px;
  @media (max-width: 900px) {
    margin-left: 0%;
    margin-top: 5%;
  }

  @media (max-width: ${screenSizes.xl}px) {
    margin: 0 50px;
  }
`;

export const OptionsContainer = styled.section`
  justify-content: center;
  display: flex;
  gap: 12px;
  padding: 16px 0px 16px 0px;
  flex-wrap: wrap;
  cursor: pointer;
  @media (max-width: ${screenSizes.md}px) {
    padding: 50px;
  }
  @media (max-width: ${screenSizes.s}px) {
    padding: 10px;
  }
`;

export const Option = styled.div`
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.background};
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  flex-direction: column;
  padding: 17px;
`;

export const OptionImage = styled(Image)`
  aspect-ratio: 1;
  object-fit: contain;
  width: 24px;
`;

export const OptionTitle = styled.h3`
  color: ${(props) => props.theme.primaryText};
  margin-top: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  font-family: "NeueHaasRegular";
`;

export const OptionDescription = styled.p`
  color: ${(props) => props.theme.secondaryText};
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  font-family: "NeueHaasRegular";
`;

export const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 16px 0px 16px 0px;
  @media (max-width: ${screenSizes.md}px) {
    padding: 50px;
  }
  @media (max-width: ${screenSizes.s}px) {
    padding: 10px;
  }
`;

export const ContactTitle = styled.h2`
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 16px;
  font-family: "NeueHaasRegular";
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-top: 24px;
  font-size: 16px;
`;

export const EmailInput = styled.input`
  border-radius: 12px;
  background-color: ${(props) => props.theme.background};
  padding: 0px 16px 0px 16px;
  font-size: 16px;
  color: ${(props) => props.theme.primaryText};
  border: 1px double ${(props) => props.theme.borderColor};
  border-color: ${(props) => props.theme.borderColor};
  width: 480px;
  height: 48px;
  @media (max-width: ${screenSizes.s}px) {
    width: 88%;
  }
`;

export const EmailButtonWapper = styled.div`
  display: flex;
  @media (max-width: ${screenSizes.s}px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const SubscribeButton = styled(Button)`
  border-radius: 8px;
  background-color: ${(props) => props.theme.accentColor};
  margin-left: 16px;
  color: #0e0e12;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 500;
  width: 150px;
  height: 48px;
  cursor: pointer;
  line-height: 18px;
  @media (min-width: 375px) and (max-width: 600px) {
    width: 90%;
  }
  @media (max-width: ${screenSizes.s}px) {
    margin-left: 0px;
  }
  border: none;
`;

export const FormInfo = styled.p`
  margin-top: 18px;
  font-size: 14px;
  color: #777e90;
  font-weight: 500;
  line-height: 22px;
  font-family: "NeueHaasRegular";
`;
export const KaldiCommunityWrapper = styled.div`
  // margin-top: 10%;
  // margin-left: 7%;
  padding-bottom: 10%;
  z-index: 10;
`;

export const ContentWrapper = styled.div`
  position: relative;
  //   width: 800px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  padding: 40px;
  gap: 8px;
`;

export const BgImage = styled.div`
  background-image: url(${stakeBgImage.src});
  height: 200px; /* Removed quotes around the height value */
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
`;

export const H1 = styled.h1`
  font-size: 30px;
  margin-left: 100px;
  margin-top: 52px;
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: SuisseBold;
`;

export const StyledParallelDiv = styled.div`
  width: 106vw;
  height: 200px;
  background: ${({ theme }) => theme?.gradientParallel};
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(6deg);
  z-index: 1;

  @media (max-width: ${screenSizes.md}px) {
    top: 13%;
    height: 200px;
  }

  @media (max-width: ${screenSizes.sx}px) {
    top: 10%;
    height: 80px;
  }
`;
