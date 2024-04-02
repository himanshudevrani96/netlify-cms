import styled from "styled-components";
import logo from "../../public/assets/images/kaldiLogoWhite.png";
import logout from "../../public/assets/images/logoOut.png";
import { CloseIcon } from "../../public/assets/svgs";
import { connectorsObject } from "../../wallets/helpers/connectors";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import CustomModal from "../customModal/CustomModal";
import { CustomLink, LogoutImage } from "./Header.style";
import { FlexColumn, FlexRow } from "./common.style";
import { useWeb3React } from "@web3-react/core";

const MobileHeaderOptions = ({ toggleModal }: any) => {
  const pathname: any  = '/';
  const { deactivate } = useConnectWallet();
  const { account } = useWeb3React();
  return (
    <CustomModal width="100%" height="100%">
      <HeaderContainer>
        <FlexRow
          width="100%"
          justifycontent="space-between"
          padding="0px 50px 0px 40px"
        >
          <div style={{ marginTop: "20px" }}>
            <img src={logo} alt="Kaldi" height={"28px"} />
          </div>

          <div onClick={() => toggleModal()} style={{ cursor: "pointer" }}>
            <CloseIcon />
          </div>
        </FlexRow>
      </HeaderContainer>

      <FlexColumn
        height="70%"
        justifycontent="center"
        alignitems="center"
        gap="32px"
      >
        <CustomLink
          href={"/"}
          active={pathname == "/"}
          onClick={() => toggleModal()}
        >
          Buy Kaldicoin
        </CustomLink>
        <CustomLink
          href={"/stake"}
          active={pathname == "/stake"}
          onClick={() => toggleModal()}
        >
          Stake Kaldicoin
        </CustomLink>
        <CustomLink
          href={"/kaldiCommunity"}
          active={pathname == "/kaldiCommunity"}
          onClick={() => toggleModal()}
        >
          Community
        </CustomLink>
        <CustomLink
          href={"/kaldiConnect"}
          active={pathname == "/kaldiConnect"}
          onClick={() => toggleModal()}
        >
          Kaldiconnect
        </CustomLink>
        <CustomLink
          href={"/faq"}
          active={pathname == "/faq"}
          onClick={() => toggleModal()}
        >
          FAQ
        </CustomLink>

        {account  && (
          <FlexRow>
            <LogoutImage
              src={logout}
              alt="disconnect"
              onClick={() => deactivate(connectorsObject.metamask.connector)}
            />
            {
              <p style={{ color: "white" }} onClick={() => toggleModal()}>
                Disconnect
              </p>
            }
          </FlexRow>
        )}
      </FlexColumn>
    </CustomModal>
  );
};

export default MobileHeaderOptions;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  height: 81px;
  align-items: center;
  gap: 8px;
  position: sticky;
  top: 0;
  z-index: 12;
  justify-content: space-between;
`;
