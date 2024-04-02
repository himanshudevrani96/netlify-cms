import styled, { createGlobalStyle, keyframes } from "styled-components";
import NeueHaasDisplayBold from "../../public/assets/fonts/NeueHaasDisplayBold.ttf";
import NeueHaasDisplayMedium from "../../public/assets/fonts/NeueHaasDisplayMedium.ttf";
import NeueHaasDisplayRegular from "../../public/assets/fonts/NeueHaasDisplayRegular.ttf";
import SuisseLight from "../../public/assets/fonts/SuisseLight.ttf";
import Poppins from "../../public/assets/fonts/Poppins.ttf";
import { screenSizes } from "./theme";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SuisseLight';
    src: url(${SuisseLight}) format('opentype');
    font-weight: 400;
    font-display: block;
  }
  @font-face {
    src: url(${NeueHaasDisplayMedium}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-family: 'NeueHaas';
  }
  @font-face {
    src: url(${NeueHaasDisplayRegular}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-family: 'NeueHaasRegular';
  }
  @font-face {
    src: url(${NeueHaasDisplayBold}) format('truetype');
    font-weight: 500;
    font-display: block;
    font-family: 'NeueHaasBold';
  }
 
  @font-face {
    font-family: 'Poppins';
    src: url(${Poppins}) format('truetype');
    font-display: block;
  }


  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.primaryText};
    font-size: 1rem;
  }
  body {
    font-family:'Poppins';
    overflow-x: hidden;
    max-width: 1440px;
    margin: 0 auto;
    background: ${(props) => props.theme.background};
  }
  div {
    width: auto;
  }

  .Toastify__toast-body > div:last-child{
    color:black;
    font-family:'Poppins' ;
    font-size: 14px;
  }
  .css-jsexje-MuiSwitch-thumb{
    background-color: white !important;
  }

  .textSecondary{
    color:${(props) => props.theme.secondaryText};
  }
  .textPrimary{
    color:${(props) => props.theme.primaryText};
  }

  .textAccent{
    color:${(props) => props.theme.accentColor};
  }

  .primaryBg{
    background-color:"${(props) => props.theme.primaryBackground}";
  }

  h3{
    font-family:'Poppins';
    font-size:24px;
    line-height:32px;

  }

  h5{
    font-family:'Poppins';
    font-size:16px;
    line-height:24px;
  }

  h6{
    font-family:'Poppins';
    font-size:14px;
    line-height:22px;
  }

  p{
    font-size:14px;
    line-height:22px;
  }

  label{
    font-size:13px;
    font-family:'Poppins';
    line-height: 20px;
    color:${(props) => props.theme.primaryText};
    display: block;
    text-align: justify;
    span{
      font-size:13px;
    }
  }

  .w-100{
    width:100%
  }

  .link{
  text-decoration:none
  }

  @keyframes slideFromRight {
    from {
      transform: translateX(0); /* Starting position on the screen */
    }
    to {
      transform: translateX(100%); /* Ending position off-screen */
    }
  }

  @keyframes slideFromLeft {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    .scroll-up {
    transition: all 0.3s ease-in-out;
  }
  .Toastify__toast-container{
    z-index: 11000000000000000000000;
  }

  .textColorGray{
    color:${(props: any) => props.theme.secondaryText};
  }

  .loadMore {
      text-align: center;
      padding: 16px 0px;
      width: 100%;
      button {
        font-size: 16px !important;
      }
  }

  .container {
    width: 400px;
    border: 1px solid #ccc;
    padding: 20px;
  }
  
  .column {
    width: 23%; /* Adjust as needed */
    height: 100px;
    background-color: #f2f2f2;
    margin: 2px;
    display: inline-block;
  }
  
  .dropdown-container {
    width: 100%;
    height: 40px;
    background-color: #ddd;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  
  .dropdown {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  
  .button {
    color: white;
    border: none;
    cursor: pointer;
  }
  .cursor-pointer{
    cursor: pointer;
  }
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }

  .revealed {
      opacity: 1;
      transform: translateY(0);
  }

  .gradient-text {
    background:${(props) => props.theme.gradient};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  .gradient-text-for-staking {
    background:${(props) => props.theme.gradientForStaking};
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .__floater{
    left: 15px !important;
  }
  polygon {
    fill: ${(props) => props.theme.background} !important;
  }
  .fontChange{
    @media (max-width: 900px) {
      font-size:10px;
    }
    @media (max-width: 600px) {
      font-size:10px;
  
    }
    @media (max-width: 375px) {
      font-size:10px;
    }
  }
  .modalFooter {
    padding: 20px;
    background-color: ${(props) => props.theme.primaryBackground};
    border-radius: 16px;
  }
`;

/* Additional styles for your content can be added here */

export const HorizontalLine = styled.hr<any>`
  border: 0.1px solid ${(props) => props.theme.stroke};
  opacity: 0.8;
  margin: ${(props) => props.margin || "0px"};
  width: 100%;
`;

const rotateAnimation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SpinnerContainer = styled.div<any>`
  display: inline-block;
  border: 1px solid white;
  border-top: 1px solid #333;
  border-radius: 50%;
  width: ${(props) => props.width || "16px"};
  height: ${(props) => props.width || "16px"};
  animation: ${rotateAnimation} 1s linear infinite;
`;

export const OutletDiv = styled.div<any>`
  background-color: ${(props) => props.theme.background};
`;
export const TwoColumns = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 0px;
  grid-template-columns: 1fr 1fr;
  /* padding: 100px 0; */

  @media (max-width: ${screenSizes.xl}px) {
    grid-gap: 40px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${screenSizes.md}px) {
    grid-gap: 50px;
    grid-template-columns: 1fr;
    align-items: center;
  }
`;

export const ThreeColumns = styled.div`
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: 600px) {
    grid-gap: 20px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 1400px) {
    grid-gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StripeDiv = styled.div`
  position: relative;
  overflow-x: hidden;
`;
