const HeroComponent = ({ title, description, body }: any) => {
  return (
    <BgImageCommon>
      {/* <ContentWrapper> */}
      <DiscriptionWrapper>
        <H1Common>{title}</H1Common>

        <Future>{description}</Future>

        <H6Common1>{body}</H6Common1>
      </DiscriptionWrapper>
      {/* </ContentWrapper> */}
    </BgImageCommon>
  );
};

export default HeroComponent;

import React from "react";
import styled from "styled-components";
import sBg from "../../public/assets/images/banners/dark.png";
import { screenSizes } from "../styles/theme";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* padding-top: 120px; */
  /* max-width: 950px; */
`;

const DiscriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  z-index: 10;
`;
const Future = styled.h4`
  font-family: "NeueHaasRegular";
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  letter-spacing: 0em;
  text-align: left;
  color: #fcfcfd;
  z-index: 10;
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;

const BgImageCommon = styled.div`
  /* position: relative; */
  max-width: 1440px;
  overflow: hidden;
  /* width: 100%; */
  padding: 140px;
  margin: 0 auto;
  background-image: ${({ theme }) => theme.gradientTilted}, url(${sBg?.src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;

  @media (max-width: ${screenSizes.xl}px) {
    padding: 50px;
  }

  @media (max-width: ${screenSizes.s}px) {
    padding: 20px;
  }
`;

const H1Common = styled.h1`
  background: ${(props) => props.theme.gradient};
  font-family: "Poppins";
  font-size: 84px;
  font-weight: 600;
  line-height: 108px;
  letter-spacing: 0em;
  text-align: left;
  z-index: 10;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  z-index: 10;

  @media (max-width: 900px) {
    font-size: 32px;
    line-height: 50px;
  }
`;
const H6Common1 = styled.h6`
  font-family: "NeueHaasRegular";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #fcfcfdab;
  max-width: 816px;
  z-index: 10;
  @media (max-width: 900px) {
    font-size: 12px;
  }
`;
