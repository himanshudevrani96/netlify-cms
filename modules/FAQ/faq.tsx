import { useState } from "react";
import {
  BgImageCommon,
  BoldCommon,
  H1Common,
  ContentWrapperCommon,
  H6Common1,
} from "../../shared/components/common.style";
import { Answer, FAQContainer, FAQItem, Icon, Question } from "./faq.style";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import React from "react";
import { Paragliding } from "@mui/icons-material";
import ParallelDiv, { StyledParallelDiv } from "../../shared/components/ParallelDiv";
import { StripeDiv } from "../../shared/styles/GlobalStyles";

// FAQ data
const faqs = [
  {
    question: "What is staking",
    answer:
      "In the Kaldi ecosystem, staking your Kaldicoin helps secure the stability of Kaldicoin, contributes to connecting smallholder coffee farmers to the internet, and offers unique rewards.",
  },
  {
    question: "How to stake",
    answer:
      "To participate in staking, purchase one or more internet connectivity packages for $10 each. After this contribution, you can stake your Kaldicoin at a Tier of your choice, following the provided instructions.",
  },
  {
    question: "What is Kaldicoin",
    answer:
      "Kaldicoin is issued by Kaldi Company Ltd, a regulated and authorised issuer of digital currency by the Financial Conduct Authority (FCA) in the Isle of Man. Registered number 020415V. The currency is native to [KaldiMarket](https://www.kaldimarket.com/), a groundbreaking blockchain-powered coffee marketplace connecting smallholder farmers with wholesale buyers worldwide. Kaldicoin is the reward layer of the KaldiMarket platform and a powerful potential profit multiplier. It is minted based on real-world coffee sales on the platform, making farmers the miners.",
  },
  {
    question: "Why should I stake my Kaldicoin",
    answer:
      "By staking Kaldicoin, you will earn rewards and help contribute to the stability of the network. When you stake Kaldicoin, you also contribute to connecting smallholder coffee farmers to the internet and the digital economy. Win, win.",
  },
  {
    question: "How long will my funds be locked",
    answer:
      "Your staked Kaldicoin will be locked in the staking wallet for a period agreed upon at the time of staking, typically ranging from a few months to a year, depending on the staking terms you choose.",
  },
  {
    question: "What is the plan for activating the internet connectivity",
    answer:
      "All staking fees will be administered by [the Kaldi Foundation](https://www.kaldifoundation.ch/),in Switzerland and used to connect smallholder farmers to the Internet. The Kaldi Foundation will publish who and where in its updates to the Kaldi Community.",
  },
  {
    question: "How can I track the progress of my contribution?",
    answer: "You can track the progress here [KaldiConnect](/kaldiConnect)",
  },
  {
    question: "My Kaldicoin is not showing up in my wallet",
    answer:
      "Point to ‘coins not showing up’ troubleshooting pages on most popular compatible wallets, for [example](https://support.metamask.io/hc/en-us/articles/8324371826587-How-to-hide-an-asset-token-or-NFT-in-MetaMask-Portfolio#:~:text=To%20unhide%20tokens%2C%20go%20to,%2C%20and%20select%20'Unhide'.).",
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index: any) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };
  const title = <>FAQs</>;
  const description =
    "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
  const body = (
    <>
      KALDICOIN is coffee’s digital currency. It has been created to harness the
      vast global coffee market. Over 2 billion <br></br> cups of coffee are
      drunk every day.  Globally, over 3 billion people are still not connected
      to the internet, leaving them <br></br>locked out of the digital economy.
      It matters, and it needs to change.
    </>
  );
  const renderAnswer = (answer) => {
    const parts = answer.split(/\[(.*?)\]\((.*?)\)/); // Splitting answer into parts

    return parts.map((part, index) => {
      if (index % 3 === 0) {
        return <React.Fragment key={index}>{part}</React.Fragment>; // Plain text
      } else if (index % 3 === 1) {
        return (
          <a href={parts[index + 1]} key={index} target="_blank">
            {part}
          </a> // Clickable link
        );
      } else {
        return null; // Ignoring link target
      }
    });
  };
  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <StyledParallelDiv style={{top:'38%'}}/>
      <FAQContainer>
        {faqs.map((faq, index) => (
          <FAQItem key={index}>
            <Question onClick={() => toggleAccordion(index)}>
              {faq.question}
              <Icon>{activeIndex === index ? "-" : "+"}</Icon>
            </Question>
            {activeIndex === index && (
              <Answer>{renderAnswer(faq.answer)}</Answer>
            )}
          </FAQItem>
        ))}
      </FAQContainer>
    </StripeDiv>
  );
}

export default Faq;
