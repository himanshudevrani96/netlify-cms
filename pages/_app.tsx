import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Web3ReactProvider } from "@web3-react/core";
import type { AppProps } from "next/app";
import React from "react";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ThemeProvider } from "styled-components";
import "swiper/css/bundle";
import FooterComponent from "../shared/components/footer";
import Header from "../shared/components/Header";
import { GlobalStyles, OutletDiv } from "../shared/styles/GlobalStyles";
import { darkTheme, lightTheme } from "../shared/styles/theme";
import { connectors } from "../wallets/helpers/connectors";


const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/pankajb3/kaldi-staking",
  cache: new InMemoryCache(),
});
// const themeLocal = localStorage && localStorage?.getItem("theme") == "darkTheme";
export default function App({ Component, pageProps }: AppProps) {
  const [checked, setChecked] = useState<boolean>(false);
  const [theme, setTheme] = useState<any>(darkTheme);

  // useEffect(() => {
  //   eagerConnection();
  // }, []);

  useEffect(() => {
    setTheme(checked ? darkTheme : lightTheme);
    localStorage.setItem("theme", checked ? "darkTheme" : "lightTheme");
  }, [checked]);

  const handleSwitchChange = (isChecked: boolean) => {
    setChecked(!isChecked);
  };

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Web3ReactProvider connectors={connectors}>
          <ApolloProvider client={client}>
            <OutletDiv>
              {/* <Outlet /> */}
              <Header onSwitchChange={handleSwitchChange} checked={checked} />
              <Component {...pageProps} />
              <FooterComponent />
          <ToastContainer limit={2} />
            </OutletDiv>
          </ApolloProvider>
        </Web3ReactProvider>
      </ThemeProvider>
  );
}
