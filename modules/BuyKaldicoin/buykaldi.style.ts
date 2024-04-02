import styled from "styled-components";
import { screenSizes } from "../../shared/styles/theme";

export const ContentWrapper = styled.div`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 120px;
  padding: 0 140px 140px 140px;
  max-width: 1440px;

  @media (max-width: ${screenSizes.xl}px) {
    padding: 0 50px 50px 50px;
  }
  @media (max-width: ${screenSizes.s}px) {
    padding: 0 20px 20px 20px;
    gap: 50px;
  }

`;
export const FlexText = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 32px;
  z-index: 10;
  p {
    max-width: 960px;
  }
`;
export const ContentImageWrapper = styled.div<any>`
  width: 100%;
  max-height: 720px;
  display: grid;
  grid-template-columns: 1fr 1fr; 
  grid-gap: 20px;
  flex: 1;
`;
export const LeftContentWrapper = styled.div`
  position: relative; 

  @media (max-width: ${screenSizes.md}px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LeftContent = styled.div`
  width: 100%;
  margin-left: 100px;
  margin-top: 150px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 25px;
  max-width: 350px;

  @media (max-width: ${screenSizes.s}px){
    margin-left: 65px;
  }
`;

export const RightContent = styled.div<any>`
  display: flex;
  justify-content: ${(props: any)=> props.right ? 'flex-start' : 'flex-end'};
  align-items: ${(props: any)=> props.right ? 'flex-start' : 'flex-end'};

  @media(max-width: ${screenSizes.md}px){
    justify-content: center;
    align-items: center;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  
  .slick-prev:before,
  .slick-next:before {
    font-family: 'slick';
    font-size: 24px;
    line-height: 1;
    opacity: .75;
    color: ${(props: any)=> props.theme.lightGrey}; /* Unicode arrow character */
  }

  .slick-slider {
    width: 100%;
  }
  
`