import styled, { createGlobalStyle, keyframes } from "styled-components";
import SuisseLight from "../../assets/fonts/SuisseLight.ttf";
import SuisseRegular from "../../assets/fonts/SuisseRegular.ttf";
import SuisseMidium from "../../assets/fonts/SuisseMedium.ttf";
import SuisseSemiBold from "../../assets/fonts/SuisseSemiBold.ttf";
import SuisseBold from "../../assets/fonts/SuisseBold.ttf";
import ClashSemibold from "../../assets/fonts/ClashDisplay-Semibold.ttf";

export const GlobalStyles = createGlobalStyle`
 @font-face {
  font-family: 'SuisseLight';
  src: url(${SuisseLight}) format('opentype');
  font-weight: 400;
}
 @font-face {
  font-family: 'SuisseRegular';
  src: url(${SuisseRegular}) format('truetype');
  font-weight: 500;

}
@font-face {
  font-family: 'SuisseMidium';
  src: url(${SuisseMidium}) format('opentype');
  font-weight: 600;
}
@font-face {
  font-family: 'SuisseSemiBold';
  src: url(${SuisseSemiBold}) format('opentype');
}
@font-face {
  font-family: 'SuisseBold';
  src: url(${SuisseBold}) format('opentype');
}

@font-face {
  font-family: 'ClashSemibold';
  src: url(${ClashSemibold}) format('truetype');
  font-weight: 600;
}
  * {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.primaryText};
    font-size: 1rem;
  }
  body {
    font-family:SuisseRegular
  }

  .Toastify__toast-body > div:last-child{
    color:${(props) => props.theme.primaryText};
    font-family:SuisseRegular ;
    font-size: 14px;
  }

  ${Array.from(
    { length: 101 },
    (_, i) => `
    .m-${i} {
      margin: ${i}px ${i}px ${i}px ${i}px !important;;
    }
    .mt-${i} {
      margin-top: ${i}px !important;
    }
    .mb-${i} {
      margin-bottom: ${i}px !important;;
    }
    .ml-${i} {
      margin-left: ${i}px !important;;
    }
    .mr-${i} {
      margin-right: ${i}px !important;;
    }
    .p-${i} {
      padding: ${i}px ${i}px ${i}px ${i}px !important;;
    }
    .pt-${i} {
      padding-top: ${i}px !important;;
    }
    .pb-${i} {
      padding-bottom: ${i}px !important;;
    }
    .pl-${i} {
      padding-left: ${i}px !important;;
    }
    .pr-${i} {
      padding-right: ${i}px !important;;
    }
  `
  )}

${Array.from(
  { length: 50 },
  (_, i) => `
    .font-${i} {
      font-size: ${i}px !important;
    }
  `
)}

${Array.from(
  { length: 900 },
  (_, i) => `
    .font-w-${i} {
      font-weight: ${i} !important;
    }
  `
)}

${Array.from(
  { length: 50 },
  (_, i) => `
    .lineHeight-${i} {
      line-height: ${i}px;
    }
  `
)}

${Array.from(
  { length: 50 },
  (_, i) => `
    .border-${i} {
      border: ${i}px solid !important;
    }
  `
)}


.fontSuisseLight{
  font-family:SuisseLight
}

.fontSuisseRegular{
  font-family:SuisseRegular
}

.fontSuisseMidium{
  font-family:SuisseMidium
}
.fontSuisseSemiBold{
  font-family:SuisseSemiBold
}
.fontSuisseBold{
  font-family:SuisseBold
}

.fontClashSemibold{
  font-family:ClashSemibold
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
  background-color:${(props) => props.theme.primaryBackground};
}
h3{
  font-family:ClashSemibold;
  font-size:24px;
  line-height:32px;

}

h5{
  font-family:SuisseRegular;
  font-size:16px;
  line-height:24px;
}

h6{
  font-family:SuisseLight;
  font-size:14px;
  line-height:22px;
}

p{
  font-size:14px;
  line-height:22px;
}

label{
  font-size:13px;
  font-family:SuisseRegular;
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
.loader{
  font-size:14px;
  font-family:SuisseRegular;
  text-align:center;
  color:${(props) => props.theme.primaryText};
}
.Toastify__toast-container{
  z-index: 11000000000000000000000;
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
    width: 48%; /* 50% minus some padding */
    height: 30px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }
  .cursor-pointer{
    cursor: pointer;
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
