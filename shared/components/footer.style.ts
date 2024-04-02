import Link from 'next/link';
import styled from "styled-components";
import darkTheamFooterLogo from "../../public/assets/images/kaldiLogoWhite.png";
import lightTheamFooterLogo from "../../public/assets/images/logoFooterLightTheam.png";
import { screenSizes } from "../styles/theme";
import Image from 'next/image'
export const Footer = styled.footer`
  align-items: center;
  border-color: rgba(225, 225, 225, 0.05);
  border-style: solid;
  border-top-width: 1px;
  background-color: ${(props) => props.theme.blocksColor};
  display: flex;
  flex-direction: column;
  padding: 48px 140px;

  @media (max-width: ${screenSizes.xl}px) {
    padding: 48px 50px;
  }

  @media (max-width: ${screenSizes.s}px) {
    padding: 38px 20px;
  }
`;

export const ContentWrapper = styled.div`
  justify-content: space-between;
  display: flex;
  width: 100%;
  max-width: 1440px;
  gap: 20px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

export const TextSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  color: #e1e1e1;
  font-weight: 450;
  line-height: 24px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const Logo = styled.div`
  aspect-ratio: 5.88;
  object-fit: cover;
  object-position: center;
  width: 164px;
  max-width: 100%;
  background-image: url(${(props) => (props.theme.mode === "dark" ? darkTheamFooterLogo.src : lightTheamFooterLogo.src)});
  background-size: cover; /* Adjust as needed */
  background-position: center; /* Adjust as needed */
`;

export const Description = styled.p`
  font-family: "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  margin-top: 17px;
  color: #777e90;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin: auto 0;
`;

export const SocialIcon = styled(Image)`
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
`;

export const Divider = styled.hr`
  border-width: 0px;
  background-color: #e1e1e1;
  opacity: 5%;
  margin-top: 18px;
  width: 90%;
  height: 1px;
`;

export const Copyright = styled.p`
  color: #777e90;
  align-self: stretch;
  margin: 19px 68px 0;
  font: 450 14px/24px "NeueHaasRegular", -apple-system, Roboto, Helvetica, sans-serif;
  @media (max-width: 991px) {
    margin-right: 10px;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  background: none;
  border-radius: 16px;
`;
