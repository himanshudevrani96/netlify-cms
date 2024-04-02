// Popup.js
import { connectorsObject } from "../../wallets/helpers/connectors";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import Button from "../../shared/components/Button.style";
import styled from "styled-components";

function Wallets({ closeModal }: any) {
  const { account, activate, deactivate } = useConnectWallet();
  const address = localStorage.getItem("wallet");
  return (
    <>
      {account && address ? (
        ""
      ) : (
        <SubHeading>
          Start by connecting with one of the wallets below. Be sure to<br></br> store your private keys or seed phrase securely.
        </SubHeading>
      )}
      {account && address ? (
        <Button margin="10px 0px 0px 0px" width="100% " onClick={() => deactivate(connectorsObject.metamask.connector)}>
          Deactivate
        </Button>
      ) : (
        <>
          <WalletWrapper>
            <MetaMaskContainer onClick={() => activate(connectorsObject.metamask.connector, 80001)}>
              <Img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/d03d5e84a5495ae09cc212b68f73056b8c97b59e1805cece0e4743e3c11769e0?apiKey=5b4a4e69c7f546538c34344a01a363c8&"
              />
              <Metamask>Metamask</Metamask>
            </MetaMaskContainer>
            <WalletConnectContainer
              onClick={() => {
                activate(connectorsObject.walletConnect.connector, 80001);
                closeModal();
              }}
            >
              <Img2
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&"
              />
              <WalletConnect>Connect Wallet</WalletConnect>
            </WalletConnectContainer>
          </WalletWrapper>
        </>
      )}
    </>
  );
}

const SubHeading = styled.div`
  color: ${(props) => props.theme.secondaryText};
  margin-top: 8px;
  font-family: "NeueHaasRegular";
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
`;

const WalletWrapper = styled.div`
  justify-content: center;
  display: flex;
  margin-top: 24px;
  gap: 16px;
  padding: 0 63px;
`;

const MetaMaskContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
`;

const Img = styled.img`
  aspect-ratio: 1.2;
  object-fit: contain;
  object-position: center;
  width: 60px;
  overflow: hidden;
  cursor: pointer;
`;

const Metamask = styled.div`
  color: var(--secondary, #808191);
  text-align: center;
  align-self: stretch;
  margin-top: 6px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  font-familty: NeueHaasRegular;
  line-height: 22px;
`;

const WalletConnectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-grow: 1;
  flex-basis: 0%;
  flex-direction: column;
  padding: 1px 0;
`;

const Img2 = styled.img`
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 50px;
  overflow: hidden;
  max-width: 100%;
  cursor: pointer;
`;

const WalletConnect = styled.div`
  color: var(--secondary, #808191);
  text-align: center;
  align-self: stretch;
  margin-top: 6px;
  white-space: nowrap;
  font-weight: 500;
  font-size: 14px;
  font-familty: NeueHaasRegular;
  line-height: 22px;
`;

export default Wallets;
