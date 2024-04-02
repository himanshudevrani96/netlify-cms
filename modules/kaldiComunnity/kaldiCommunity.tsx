import { useState } from "react";
import {
  MainContainer,
  OptionsContainer,
  KaldiCommunityWrapper,
  EmailInput,
  ContactSection,
  Option,
  SubscribeButton,
  FormInfo,
  Label,
  ContactTitle,
  CustomLink,
  OptionImage,
  OptionTitle,
  OptionDescription,
  EmailButtonWapper,
  StyledParallelDiv,
} from "./kaldiCommunity.style";
import KaldiCommunityHeader from "./kaldiCommunityHeader";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Backdrop from "@mui/material/Backdrop";
import React from "react";

//=====images=====//
import discort from "../../public/assets/footerIcons/discord.png";
import twitter from "../../public/assets/footerIcons/twitter.png";
import github from "../../public/assets/footerIcons/github.png";
import document from "../../public/assets/footerIcons/documents.png";
import linkedin from "../../public/assets/footerIcons/linkedin.png";
import { StripeDiv } from "../../shared/styles/GlobalStyles";
import HeroComponent from "../../shared/heroComponent/HeroComponent";

const title = <>Join the Kaldi Community</>;
const description = "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";
const body = (
  <>
    KALDICOIN is coffee’s digital currency. It has been created to harness the vast global coffee market. Over 2 billion <br></br> cups of coffee are drunk every day.  Globally, over 3 billion people
    are still not connected to the internet, leaving them <br></br>locked out of the digital economy. It matters, and it needs to change.
  </>
);

const KaldiCommunity = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });

  const [enteredEmail, setEnteredEmail] = useState("");
  const [open, setOpen] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleLoaderClose = () => {
    setOpen(false);
  };
  const handleLoaderOpen = () => {
    setOpen(true);
  };

  const constOptions = [
    {
      id: 1,
      imgSrc: discort,
      imgAlt: "Discord icon",
      title: "Discord",
      description: "Chat with us",
      link: "",
    },
    {
      id: 2,
      imgSrc: document,
      imgAlt: "Documentation icon",
      title: "Documentation",
      description: "Learn about Kaldi",
      link: "https://www.kaldicompany.com/kaldi-whitepaper",
    },
    {
      id: 3,
      imgSrc: github,
      imgAlt: "GitHub icon",
      title: "GitHub",
      description: "Contribute to Kaldi",
      link: "https://github.com/Kaldi-Company",
    },
    {
      id: 4,
      imgSrc: twitter,
      imgAlt: "Twitter icon",
      title: "Twitter",
      description: "Follow @Kaldi",
      link: "https://twitter.com/kaldicompany",
    },
    {
      id: 5,
      imgSrc: linkedin,
      imgAlt: "LinkedIn icon",
      title: "LinkedIn",
      description: "Connect with us",
      link: "https://www.linkedin.com/company/kaldicompany",
    },
  ];

  const enterEmail = (event: any) => {
    setIsValidEmail(validateEmail(event?.target?.value));
    setEnteredEmail(event?.target?.value);
  };

  const sendEmail = async () => {
    if (enteredEmail && isValidEmail) {
      handleLoaderOpen();
      let formData = {
        user_email: enteredEmail,
      };
      const apiUrl = "https://kaldistaking.rapidinnovation.dev/api/v1/newsletter";
      try {
        const response = await axios.post(apiUrl, formData);
        if (response?.data?.error) {
          notify(response?.data.error?.message.detail.charAt(0).toUpperCase() + response?.data.error?.message.detail.slice(1));
          reset();
        } else {
          notify(response?.data?.data.charAt(0).toUpperCase() + response?.data?.data?.slice(1));
          reset();
        }
      } catch (error) {
        notify(error);
        console.error("Error:", error);
      }
    } else {
      toast("Please enter a valid email address so we can keep you updated!");
    }
  };
  const validateEmail = (email: any) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const reset = async () => {
    setEnteredEmail("");
    handleLoaderClose();
  };
  return (
    <StripeDiv>
      <HeroComponent title={title} description={description} body={body} />
      <StyledParallelDiv />
      <KaldiCommunityWrapper>
        <MainContainer>
          <OptionsContainer>
            {constOptions.map(({ id, imgSrc, imgAlt, title, description, link }) => (
              <Option key={id}>
                <CustomLink href={link ? link : 'https://google.com'} target="_blank" rel="noopener noreferrer">
                  <OptionImage src={imgSrc} alt={imgAlt} />
                  <OptionTitle>{title}</OptionTitle>
                  <OptionDescription>{description}</OptionDescription>
                </CustomLink>
              </Option>
            ))}
          </OptionsContainer>
          <ContactSection>
            <ContactTitle>Get in touch</ContactTitle>
            <EmailButtonWapper>
              <EmailInput type="email" id="userEmail" placeholder="Your email" value={enteredEmail} onChange={enterEmail} />
              <SubscribeButton onClick={sendEmail}>Subscribe</SubscribeButton>
            </EmailButtonWapper>
            <FormInfo>By submitting this form you consent to email communications from Kaldi.</FormInfo>
          </ContactSection>
        </MainContainer>
      </KaldiCommunityWrapper>
      <div>
        <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
          Please Wait...
        </Backdrop>
      </div>
    </StripeDiv>
  );
};

export default KaldiCommunity;
