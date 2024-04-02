import React from "react";
import { ContentWrapper, Description, Divider, Footer, Logo, SocialIcon, SocialMediaWrapper, TextSection } from "./footer.style";

interface SocialIconProps {
  src: string;
}
//=====images=====//
import discord from "../../public/assets/footerIcons/discord.png";
import document from "../../public/assets/footerIcons/documents.png";
import github from "../../public/assets/footerIcons/github.png";
import linkedin from "../../public/assets/footerIcons/linkedin.png";
import twitter from "../../public/assets/footerIcons/twitter.png";
import { CustomLink } from "../components/footer.style";

const FooterComponent: React.FC = () => {
  const socialMediaIcons = [
    { id: "discord", src: discord, link: "" },
    { id: "github", src: github, link: "https://github.com/Kaldi-Company" },
    { id: "documents", src: document, link: "https://www.kaldicompany.com/kaldi-whitepaper" },
    { id: "twitter", src: twitter, link: "https://twitter.com/kaldicompany" },
    { id: "linkedin", src: linkedin, link: "https://www.linkedin.com/company/kaldicompany" },
  ];

  return (
    <Footer>
      <ContentWrapper>
        <TextSection>
          <Logo />
          <Description>
            Kaldicoin is issued by Kaldi Company Ltd, a regulated and authorised issuer of digital currency under the Financial<br></br> Conduct Authority (FCA) in the Isle of Man. Registered number
            020415V.
          </Description>
        </TextSection>
        <SocialMediaWrapper>
          {socialMediaIcons.map((icon) => (
            <CustomLink key={icon.id} href={icon.link} target="_blank">
              <SocialIcon key={icon.id} src={icon.src} alt={`${icon.id} icon`} />
            </CustomLink>
          ))}
        </SocialMediaWrapper>
      </ContentWrapper>
      <Divider />
      <ContentWrapper>
        <TextSection>
          <Description>© Kaldi Company 2024. All rights reserved.</Description>
        </TextSection>
      </ContentWrapper>
    </Footer>
  );
};

export default FooterComponent;
