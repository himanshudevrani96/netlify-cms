// Popup.js
import { connectorsObject } from "../../wallets/helpers/connectors";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import Button from "../../shared/components/Button.style";
import styled from "styled-components";
function Wallets() {
  const { activate, account, deactivate } = useConnectWallet();
  const address = localStorage.getItem("wallet");
  return (
    <>
      <SubHeading>
        Start by connecting with one of the wallets below. Be sure to store your private keys or seed phrase securely.<br></br> <p className="mt-12">{account}</p>
      </SubHeading>

      {address ? (
        <Button className="mt-10" width="100% " onClick={() => deactivate(connectorsObject.metamask.connector)}>
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
            <WalletConnectContainer onClick={() => activate(connectorsObject.walletConnect.connector, 1)}>
              <Img2
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/887747283f1fe208046f3b33d8e276cd1265a91001fcfc4eb287c91e19089f00?apiKey=5b4a4e69c7f546538c34344a01a363c8&"
              />
              <WalletConnect>Wallet Connect</WalletConnect>
            </WalletConnectContainer>
          </WalletWrapper>
        </>
      )}
    </>
  );
}

const SubHeading = styled.div`
  color: var(--primary, #11142d);
  margin-top: 8px;
  font: 450 14px/20px Neue Haas Grotesk Display Pro, -apple-system, Roboto, Helvetica, sans-serif;
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
  font: 500 13px/24px Neue Haas Grotesk Display Pro, -apple-system, Roboto, Helvetica, sans-serif;
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
  font: 500 13px/24px Neue Haas Grotesk Display Pro, -apple-system, Roboto, Helvetica, sans-serif;
`;

export default Wallets;
