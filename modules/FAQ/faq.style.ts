import styled from "styled-components";
import stakeBgImage from "../../public/assets/images/banners/Homepage.png";

export const Background = styled.div`
  background-color: ${(props) => props.theme.blocksColor};
  color: ${(props) => props.theme.primaryText};
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
  background-image: url(${stakeBgImage});
  height: 850px; /* Removed quotes around the height value */
  position: relative;
  overflow: hidden; /* Add overflow: hidden to prevent text overflow */
  margin-bottom: 50px;
`;
export const H1 = styled.h1<any>`
  margin-left: 100px;
  margin-top: 52px;
  font-size: 30px;
  font-family: 'SuisseBold';
  background: ${(props) => props.theme.gradient};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;

export const FaqWarpper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -15%;
`;
export const WidthSetup = styled.div`
  width: 80%;
`;

// Styled components
export const FAQContainer = styled.div`
  width: 80%;
  margin-top: -5%;
  position: relative;
  margin-left: 10%;
  padding-bottom: 10%;
  z-index: 10;
`;

export const FAQItem = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  width: Fixed (1, 144px);
  height: Hug (72px);
  padding: 14px;
  border-radius: 8px;
  justify: space-between;
  margin-top: 20px;
  background-color: ${(props) => props.theme.blocksColor};
`;

export const Question = styled.div`
  background-color: ${(props) => props.theme.gradient};
  padding: 10px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
`;

export const Answer = styled.div`
  padding: 10px;
  // background-color: ${(props) => props.theme.gradient};
  font-family: "NeueHaasRegular";
  font-size: 14px;
  font-weight: 450;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  color: #777e90;
`;

export const Icon = styled.span`
  font-size: 25px;
`;
