import styled from "styled-components";
import sBg from "../../public/assets/images/banners/dark.png";
import { screenSizes } from "../styles/theme";

//===========Header===============//

export const ContentWrapperCommon = styled.div`
  position: absolute;
  top: 35%;
  left: 44%;
  transform: translate(-50%, -50%);
  color: white; /* Set text color to white */
  max-width: 1600px;
  @media (max-width: 900px) {
    left: 40%;
  }
`;

export const BgImageCommon = styled.div`
  height: 100vh;
  position: relative;
  max-width: 1600px;
  overflow: hidden;
  width: 100%;

  @media (min-width: 375px) and (max-width: 900px) {
    height: 50vh;
  }
  @media (max-width: 375px) {
    height: 55vh;
  }

  background-image: ${({ theme }) => theme.gradientHome}, url(${sBg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

export const BoldCommon = styled.b`
  font-size: 20px;
  color: white;
`;
export const BoldCommon2 = styled.b`
  font-size: 20px;
  color: ${(props) => props.theme.primaryText};
`;
export const H1Common = styled.h1`
  background: ${(props) => props.theme.gradient};
  font-family: Poppins;
  font-size: 84px;
  font-weight: 600;
  line-height: 108px;
  letter-spacing: 0em;
  text-align: left;

  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;
export const H6Common1 = styled.h6`
  font-family: "NeueHaas";
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
`;
export const H6Common2 = styled.h6`
  font-size: 16px;
  align-items: center;
  color: ${(props) => props.theme.primaryText};
  @media (max-width: 600px) {
    font-size: 12px;
    margin-left: 10%;
    margin-right: 5%;
  }
`;
export const Bold2Common = styled(BoldCommon)`
  background: ${(props) => props.theme.primaryText};
  -webkit-background-clip: text;
  background-clip: text;
  color: ${(props) => props.theme.primaryText};
`;

export const ContentWrapperCommon2 = styled.div`
  color: ${(props) => props.theme.primaryText};
  position: relative;
  width: 85%;
  padding-left: 140px;
  max-width: 1440px;
  z-index: 10;
  @media (max-width: ${screenSizes.xl}px) {
    padding-left: 50px;
  }

  @media (max-width: ${screenSizes.s}px) {
    padding-left: 20px;
  }
  @media (max-width: ${screenSizes.xs}px) {
    padding-left: 10px;
  }
`;

interface FlexProps {
  alignitems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  justifycontent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
  gap?: string;
  width?: string;
  height?: string;
  flexwrap?: string;
  padding?: string;
  margin?: string;
  fontfamily?: string;
  disabled?: boolean;
  cursor?: string;
  backgroundColor?: string;
  borderRadius?: string;
  flexDirection?: string;
  zindex?: number;
}

export const FlexRow = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => (flexDirection ? flexDirection : "row")};
  justify-content: ${({ justifycontent }) => (justifycontent ? justifycontent : "center")};
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
  gap: ${({ gap }) => (gap ? gap : "")};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "")};
  cursor: ${({ cursor }) => (cursor ? cursor : "auto")};
  z-index: ${({ zindex }) => zindex || ""};
`;
export const FlexColumn = styled.div<FlexProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifycontent }) => (justifycontent ? justifycontent : "center")};
  align-items: ${({ alignitems }) => (alignitems ? alignitems : "center")};
  gap: ${({ gap }) => (gap ? gap : "")};
  flex-wrap: ${({ flexwrap }) => (flexwrap ? flexwrap : "")};
  width: ${({ width }) => (width ? width : "")};
  height: ${({ height }) => (height ? height : "")};
  padding: ${({ padding }) => (padding ? padding : "")};
  margin: ${({ margin }) => (margin ? margin : "")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "")};
`;

interface SVGWrapperProps {
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
}

export const SVGWrapper = styled.div<SVGWrapperProps>`
  svg {
    width: ${({ width }) => width || "fit-content"};
    height: ${({ height }) => height || "fit-content"};
    path {
      fill: ${({ fill }) => fill || ""};
      stroke: ${({ stroke }) => stroke || ""};
    }
  }
`;
