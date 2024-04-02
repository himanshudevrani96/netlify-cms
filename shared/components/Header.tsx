import React, { useEffect, useState } from "react";
import styled from "styled-components";
import logo from "../../public/assets/images/kaldiLogoWhite.png";
import logout from "../../public/assets/images/logoOut.png";
import { HamburgerIcon } from "../../public/assets/svgs";
import themeLogoDark from "../../public/assets/svgs/themeLogoDark.svg";
import themeLogoLight from "../../public/assets/svgs/themeLogoLight.svg";
import Modal from "../../shared/components/Modal";
import { getConnector } from "../../wallets/helpers/EagerConnect";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import Wallets from "../popups/wallets";
import Button from "./Button.style";
import { AddressDiv, Container, CustomLink, CustomLinkLogo, LogoutImage, Menus, MenuWrapper, RightNav } from "./Header.style";
import MobileHeaderOptions from "./MobileHeaderOptions";
import { P1 } from "./Text.style";
import { useRouter } from 'next/router';
import Image from 'next/image';
import useWindowDimensions from "../../wallets/hooks/useWindowDimensions";

interface HeaderProps {
  onSwitchChange: (isChecked: boolean) => void;
  checked: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSwitchChange, checked }) => {
  const { account, deactivate } = useConnectWallet();
  // const address = localStorage.getItem("wallet");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shortAddress, setAddress] = useState("");
  const { isMobile } = useWindowDimensions();
  const router = useRouter()
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "scroll";
  };

  useEffect(() => {
    const addressShort = () => {
      if (account) {
        const firstHalf = isMobile ? account[0]?.slice(0, 4) : account[0]?.slice(0, 6);
        const lastHalf = isMobile ? account[0]?.slice(-4) : account[0]?.slice(-6);
        const shortenedAddress = `${firstHalf}...${lastHalf}`;
        setAddress(shortenedAddress);
      }
    };

    closeModal();
    addressShort();
  }, [account, isMobile]);

  const  pathname  = router.pathname;

  const [showMobileHeader, setShowMobileHeader] = useState(false);

  const toggleModal = () => {
    setShowMobileHeader(!showMobileHeader);
  };

  return (
    <div style={{ maxWidth: "1440px", backgroundColor: "#0e120e" }}>
      {showMobileHeader && <MobileHeaderOptions toggleModal={toggleModal} />}
      <Container>
        <MenuWrapper>
          <CustomLinkLogo href={"/"}>
            <Image src={logo} alt="Kaldi" height={28}/>
          </CustomLinkLogo>
          {!isMobile && (
            <Menus>
              <CustomLink href={"/"} active={pathname == "/"}>
                Buy Kaldicoin
              </CustomLink>
              <CustomLink href={"/stake"} active={pathname == "/stake"}>
                Stake Kaldicoin
              </CustomLink>
              <CustomLink href={"/kaldiCommunity"} active={pathname == "/kaldiCommunity"}>
                Community
              </CustomLink>
              <CustomLink href={"/kaldiConnect"} active={pathname == "/kaldiConnect"}>
                Kaldiconnect
              </CustomLink>
              <CustomLink href={"/faq"} active={pathname == "/faq"}>
                FAQ
              </CustomLink>
            </Menus>
          )}

          <RightNav>
            {account ? (
              <GradientButtonWrapper>
                <ButtonWrapper>
                  <GradientButton>{account ? shortAddress : "Connect Wallet"}</GradientButton>
                </ButtonWrapper>
              </GradientButtonWrapper>
            ) : (
              <Button width="fit-content" onClick={openModal} variant={"background"} color={"secondary"} height="48px">
                {account ? shortAddress : "Connect Wallet"}
              </Button>
            )}

            <Modal onClose={closeModal} showModal={isModalOpen} isFooter={false}>
              <P1 weight="600" fontFamily="Poppins" fontSize="24px">
                { account ? "Connected" : "Connect Wallet"}
              </P1>
              <br></br>
              <Wallets closeModal={closeModal} />
            </Modal>
            <ThemeButton onClick={() => onSwitchChange(checked)}>
              <Image src={!checked ? themeLogoDark : themeLogoLight} width={22} alt='logo'/>
            </ThemeButton>

            {account  && !isMobile && (
              <AddressDiv>
                <LogoutImage
                  src={logout}
                  alt="disconnect"
                  onClick={async () => {
                    const connector = await getConnector();
                    deactivate(connector);
                  }}
                />
                {<p>Disconnect</p>}
              </AddressDiv>
            )}

            {isMobile && (
              <div onClick={() => toggleModal()}>
                <HamburgerIcon />
              </div>
            )}
          </RightNav>
        </MenuWrapper>
      </Container>
    </div>
  );
};

export default Header;

const ButtonWrapper = styled.div`
  display: inline-block;
  background: #11142d;
  border-radius: 5px; /* Adjust for desired border radius */
  padding: 2px; /* This acts as the border width */
`;

const GradientButtonWrapper = styled.div`
  display: inline-block;
  background: linear-gradient(267.4deg, #2fd3b4 0%, #2fd3b4 0.01%, #e1d91d 100%);
  border-radius: 5px; /* Adjust for desired border radius */
  padding: 2px; /* This acts as the border width */
`;

const GradientButton = styled.button`
  color: transparent;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 20px;
  border: none;
  position: relative;
  overflow: hidden;
  transition: color 0.4s, background-color 0.4s;
  font-family: "NeueHaas";

  /* Gradient for text */
  background-image: linear-gradient(267.4deg, #2fd3b4 0%, #2fd3b4 0.01%, #e1d91d 100%);
  -webkit-background-clip: text;
  background-clip: text;

  @media (max-width: 950px) {
    padding: 8px 7px;
  }
`;

const ThemeButton = styled.div`
  cursor: pointer;
`;


