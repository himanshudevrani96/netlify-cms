import { SupportedLocale, SwapWidget, Theme, lightTheme, darkTheme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import { useCallback, useEffect, useRef, useState } from "react";
import ParallelDiv from "../../shared/components/ParallelDiv";
import HeroComponent from "../../shared/heroComponent/HeroComponent";
import { useConnectWallet } from "../../wallets/hooks/useConnectWallet";
import { SwapWrapper } from "./swap.style";
import React from 'react'
// Extend the Window interface to include the Browser property
interface CustomWindow extends Window {
  Browser?: {
    T?: () => void;
  };
}
interface SwapProp {
  isLight: boolean;
}
// **Note: This swap widget will work on mainnet only
export const Swap = ({ isLight }: SwapProp) => {
  const { library } = useConnectWallet();
  const [provider, setProvider] = useState();
  const connectors = useRef<HTMLDivElement>(null);
  const focusConnectors = useCallback(() => connectors.current?.focus(), []);
  const [locale, setLocale] = useState<SupportedLocale>("en-US");
  const [tokenList, setTokenList] = useState<any>();
  // const isLight = useLocalStorage('theme', 'lightTheme') === 'lightTheme';

  const title = <>BUY KALDI</>;
  const description = "Get Farmers Online. Harvest Rewards. Shape the future of coffee.";

  const body = (
    <>
      Kaldicoin is coffee’s digital currency. It has been created to harness the vast global coffee market. Over 2 billion cups of coffee are drunk every day.  Globally, over 3 billion people are
      still not connected to the internet, leaving them locked out of the digital economy. It matters, and it needs to change.
    </>
  );

  useEffect(() => {
    // Cast window to CustomWindow
    const customWindow = window as CustomWindow;
    customWindow.Browser = {
      T: () => {},
    };
    const theme = localStorage.getItem("theme") == "darkTheme" ? false : true;
  }, []);

  // useEffect(() => {
  //   if (library?._isProvider) {
  //     setProvider(library);
  //   }
  // }, [library]);
  // The url of the default uniswap token list. This list will be passed to the Uniswap component
  // and will appear by default in the token selector UI.
  const MY_TOKEN_LIST = [
    {
      name: "KALDI",
      address: "0xa1b0fd90c6Cb69640b6a4d211FA2Bece2543e105",
      symbol: "KAL",
      decimals: 18,
      chainId: 80001,
      logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    },
    {
      name: "Dai Stablecoin",
      address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
      symbol: "DAI",
      decimals: 18,
      chainId: 1,
      logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png",
    },
    {
      name: "Tether USD",
      address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
      symbol: "USDT",
      decimals: 6,
      chainId: 1,
      logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xdAC17F958D2ee523a2206206994597C13D831ec7/logo.png",
    },
    {
      name: "USD Coin",
      address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
      symbol: "USDC",
      decimals: 6,
      chainId: 1,
      logoURI: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png",
    },
  ];
  const TOKEN_LIST = "https://gateway.ipfs.io/ipns/tokens.uniswap.org";
  const UNI = "0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889";
  const theme: Theme = {
    primary: "#FFF",
    secondary: "#FFF",
    interactive: "#2FD3B4",
    container: "#fff99",
    module: "#E7E7E7",
    accent: "#FFF",
    outline: "#343D3A",
    dialog: "#FFF",
  };
  const myLightTheme: Theme = {
    ...lightTheme, // Extend the lightTheme
    primary: "#141212",
    secondary: "#141212",
    interactive: "#2FD3B4",
    container: "#FFF",
    module: "#E7E7E7",
    accent: "#f5f3f3",
    outline: "#343D3A",
    dialog: "#FFF",
  };
  const jsonRpcUrlMap = {
    80001: ["https://polygon-mumbai.infura.io/v3/91715fa960a946f1b58dd3edd493cf24"],
  };

  return (
    <>
      <HeroComponent title={title} description={description} body={body} />
      <ParallelDiv />
      <SwapWrapper>
        <iframe
          src={`https://app.uniswap.org/#/swap?theme=${isLight ? "dark" : "light"}&outputCurrency=0x0CA5f487da682eDedB820a5b4572A532044e0d07`}
          height="660px"
          width="100%"
          style={{
            zIndex: 10,
            border: "none",
          }}
        />
      </SwapWrapper>
    </>
  );
};

const useLocalStorage = (key: string, initialValue: any) => {
  // console.log({key, initialValue});

  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    // console.log({storedValue, val: JSON.parse(storedValue)});

    return storedValue !== null ? JSON.parse(JSON.stringify(storedValue)) : initialValue;
  });

  useEffect(() => {
    const handleChange = (event: StorageEvent) => {
      if (event.key === key) {
        setValue(event.newValue ? JSON.parse(event.newValue) : initialValue);
      }
    };

    window.addEventListener("storage", handleChange);

    return () => {
      window.removeEventListener("storage", handleChange);
    };
  }, [key, initialValue]);

  return value;
};
