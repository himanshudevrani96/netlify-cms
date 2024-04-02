import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import firstImage from "../../public/assets/images/HomePage/first11.png";
import FourthImage from "../../public/assets/images/HomePage/fourth.png";
import SecondImage from "../../public/assets/images/HomePage/second2.png";

import step1 from "../../public/assets/images/step1.png";
import step2 from "../../public/assets/images/step2.png";
import step3 from "../../public/assets/images/step3.png";
import step4 from "../../public/assets/images/step4.png";
import step5 from "../../public/assets/images/step5.png";
import step6 from "../../public/assets/images/step6.png";
import step7 from "../../public/assets/images/step7.png";
import Modal from "../../shared/components/Modal";
import ParallelDiv from "../../shared/components/ParallelDiv";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import { StripeDiv, TwoColumns } from "../../shared/styles/GlobalStyles";
import {
  ContentWrapper,
  FlexText,
  LeftContent,
  LeftContentWrapper,
  RightContent,
  SliderWrapper
} from "./buykaldi.style";
import {
  ActionButtonKaldi,
  ActionButtonStaking,
  CustomLink,
  Heading,
  Links,
  Paragraph,
  StepImage,
  StepImageSlider,
  StepNumber,
  SwapWrapper
} from "./buyKaldicoin.style";

interface BuyKaldiProp {
  isLight: boolean;
}
const title = (
  <>
    KALDICOIN: Coffee’s<br></br> Digital Currency
  </>
);
const description =
  "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
const body = (
  <>
    KALDICOIN is coffee’s digital currency. It has been created to harness the
    vast global coffee market. Over 2 billion cups of coffee are drunk every
    day.  Globally, over 3 billion people are still not connected to the
    internet, leaving them locked out of the digital economy. It matters, and it
    needs to change.
  </>
);

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export const BuyKaldi = ({ isLight }: BuyKaldiProp) => {
  const [showSwap, setShowSwap] = useState<boolean>(false);

  const closeSwap = () => {
    setShowSwap(false);
  };

  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <ParallelDiv />
      <ContentWrapper>
        <FlexText>
          <Heading>It starts with Kaldicoin</Heading>
          <Paragraph>
            New KALDICOIN is minted through the sale of coffee lots on{" "}
            <Links href="https://www.kaldimarket.com/" target="_blank">
              KaldiMarket
            </Links>
            , a groundbreaking blockchain-powered coffee marketplace set to
            connect millions of smallholder farmers directly to roasteries
            worldwide. KALDICOIN is issued to smallholder coffee farmers and
            buyers as a reward for trades, making farmers the miners in the
            KALDI ecosystem and onboarding them into the global digital currency
            ecosystem.
          </Paragraph>
        </FlexText>
        <FlexText>
          <Heading>Getting started/How to buy</Heading>
          <Paragraph>
            Below are instructions using the MetaMask wallet and a swap from
            MATIC to KALDI as an example.
          </Paragraph>
        </FlexText>
        {/* 1st content */}
        <TwoColumns>
          <LeftContentWrapper>
            <StepNumber>01</StepNumber>
            <LeftContent>
              <Heading>Set up a digital wallet.</Heading>
              <Paragraph>
                Download Metamask or a wallet of your choice and follow the
                instructions on your phone or desktop. (Google Chrome is best,
                or Web3-enabled smartphones)
              </Paragraph>
              <ActionButtonKaldi>
                <CustomLink
                  href={"https://metamask.io/buy-crypto/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Metamask
                </CustomLink>
              </ActionButtonKaldi>
            </LeftContent>
          </LeftContentWrapper>
          <RightContent>
            <StepImage src={firstImage} alt=''/>
          </RightContent>
        </TwoColumns>
        {/* 2nd content */}
        <TwoColumns>
          <RightContent right>
            <StepImage src={SecondImage} alt=''/>
          </RightContent>
          <LeftContentWrapper>
            <StepNumber>02</StepNumber>
            <LeftContent>
              <Heading>Purchase some MATIC</Heading>
              <Paragraph>
                You need some MATIC in your wallet to swap to Kaldicoin. A tiny
                amount of your MATIC (less than 0.03% of your trade) will be
                used for gas fees to fuel the transaction, so you won’t be able
                to swap the entire amount. <br></br> <br></br>
                You can buy MATIC from Metamask directly, transfer them to your
                wallet from another wallet, or buy them on any exchange (like
                Coinbase.)
              </Paragraph>
              {/* <ActionButtonKaldi>
                <CustomLink
                  to={"https://metamask.io/buy-crypto/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Metamask
                </CustomLink>
              </ActionButtonKaldi> */}
            </LeftContent>
          </LeftContentWrapper>
        </TwoColumns>
        {/* 3rd content */}
        <SliderWrapper>
          <Slider {...settings}>
            {/* step 1 */}
            {/* step 2 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>Use integrated widget to buy KALDI</Heading>
                    <Paragraph>
                      We have uniswap widget integrated to ease the buy for
                      KALDI.
                    </Paragraph>
                    <ActionButtonKaldi onClick={() => setShowSwap(true)}>
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step2} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>

            {/* step 3 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>Connect wallet & choose network</Heading>
                    <Paragraph>
                      Seamlessly connect to the platform and select the Polygon
                      Network by clicking on the 'Connect' button.
                    </Paragraph>
                    <ActionButtonKaldi onClick={() => setShowSwap(true)}>
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step3} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>
            {/* step 4 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>Add KALDI to your trading list</Heading>
                    <Paragraph>
                      Upon switching to the Polygon Network, KALDI will be
                      automatically selected as the output token. Click on 'I
                      Understand' and add it to your trading list.
                    </Paragraph>
                    <ActionButtonKaldi onClick={() => setShowSwap(true)}>
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step4} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>
            {/* step 5 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>Choose MATIC to swap for KALDI</Heading>
                    <Paragraph>
                      Choose MATIC as the input token from the list.
                    </Paragraph>
                    <ActionButtonKaldi
                      onClick={() => {
                        setShowSwap(true);
                      }}
                    >
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step5} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>
            {/* step 6 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>Select some amount of MATIC for the swap</Heading>
                    <Paragraph>
                      Select the desired amount of MATIC you wish to swap for
                      KALDI. Initiate the swap process by clicking on "Confirm
                      swap".
                    </Paragraph>
                    <ActionButtonKaldi
                      onClick={() => {
                        setShowSwap(true);
                      }}
                    >
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step6} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>
            {/* step7 */}
            <div>
              <TwoColumns>
                <LeftContentWrapper>
                  <StepNumber>03</StepNumber>
                  <LeftContent>
                    <Heading>
                      Becoming a Kaldicoin holder: Celebrating your successful
                      acquisition
                    </Heading>
                    <Paragraph>
                      Congratulations! You are now a proud owner of Kaldicoin
                    </Paragraph>
                    <ActionButtonKaldi
                      onClick={() => {
                        setShowSwap(true);
                      }}
                    >
                      Buy Kaldicoin
                    </ActionButtonKaldi>
                  </LeftContent>
                </LeftContentWrapper>
                <RightContent>
                  <StepImageSlider src={step7} alt=''/>
                </RightContent>
              </TwoColumns>
            </div>
          </Slider>
        </SliderWrapper>

        <TwoColumns>
          <RightContent right>
            <StepImage src={FourthImage} alt=''/>
          </RightContent>
          <LeftContentWrapper>
            <StepNumber>04</StepNumber>
            <LeftContent>
              <Heading>
                Get staking, connect farmers online, and harvest rewards.
              </Heading>
              <Paragraph>
                Now you own Kaldicoin; you can stake your coins, help coffee
                farmers connect to the internet, and earn rewards.
              </Paragraph>
              <ActionButtonStaking>
                <CustomLink href={"/stake"}>Start Staking</CustomLink>
              </ActionButtonStaking>
            </LeftContent>
          </LeftContentWrapper>
        </TwoColumns>
      </ContentWrapper>
      <Modal
        onClose={closeSwap}
        showModal={showSwap}
        isSwap={showSwap}
        isDark={isLight}
      >
        <SwapWrapper>
          <iframe
            className="swap"
            src={`https://app.uniswap.org/#/swap?theme=${
              isLight ? "dark" : "light"
            }&outputCurrency=0x0CA5f487da682eDedB820a5b4572A532044e0d07`}
            height="500px"
            width="100%"
            scrolling="no"
            style={{
              zIndex: 10,
              border: "none",
              borderRadius: "5px",
            }}
          />
        </SwapWrapper>
      </Modal>
    </StripeDiv>
  );
};
