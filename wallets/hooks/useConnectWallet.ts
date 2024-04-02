import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";
import { checkWallet, selectWalletHooks } from "../helpers/WalletHelper";
import Web3 from "web3";

export const useConnectWallet = () => {
  //Define Variables
  let chainId: number | undefined;
  let active: boolean;
  let account: any;
  let connectedWallet: any;
  let activating: boolean;
  const defaultRPCUrl = "https://polygon-mumbai.infura.io/v3/91715fa960a946f1b58dd3edd493cf24";
  const { hooks: PriorityHook } = useWeb3React();
  const hook = selectWalletHooks();
  const { useChainId, useIsActive, useAccounts, useIsActivating, useProvider } = hook;
  const { usePriorityConnector } = PriorityHook;

  // Set Hooks into Variables
  chainId = useChainId();
  active = useIsActive();
  account = useAccounts();
  connectedWallet = usePriorityConnector();
  activating = useIsActivating();

  const provider = useProvider();
  const [library, setLibrary] = useState<any>(provider);

  useEffect(() => {
    if (!provider && !library) {
      const provider = new Web3.providers.HttpProvider(defaultRPCUrl);
      const fallbackProvider = new Web3(provider);
      setLibrary(fallbackProvider);
    } else if (provider) {
      setLibrary(provider);
    }
  }, [provider, library]);

  const activate = (connector: any, networkId: number) => {
    if (window.ethereum) {
      checkWallet(connector);
      connector
        .activate(networkId)
        .then(() => {})
        .catch((error: any) => {
          if (error.name === "_NoMetaMaskError") {
            window.open("https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn");
          }
          console.error("Activate Func error", error);
        });
    } else {
      window.open("https://chromewebstore.google.com/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn");
    }
  };

  const deactivate = (connector: any) => {
    try {
      if (connector?.deactivate) {
        void connector.deactivate();
      }
      void connector.resetState();
      localStorage.clear();
      sessionStorage.clear();
    } catch (error) {
      console.error("Deactivate Func error", error);
    }
  };

  return {
    activate,
    deactivate,
    chainId,
    active,
    account,
    connectedWallet,
    activating,
    library,
  };
};
