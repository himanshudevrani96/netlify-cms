import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modules/app/App";
// import { Provider } from "react-redux";
// import { store } from "../src/app/store";
import { Web3ReactProvider } from "@web3-react/core";
import { connectors } from "./wallets/helpers/connectors";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      {/* <Provider store={store}> */}
      <App />
      {/* </Provider> */}
    </Web3ReactProvider>
  </React.StrictMode>
);
