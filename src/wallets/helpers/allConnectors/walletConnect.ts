// import {initializeConnector} from '@web3-react/core';
// import {WalletConnect} from '@web3-react/walletconnect';

// const rpcArray = {
//   80001: [
//     'https://polygon-mumbai.g.alchemy.com/v2/OZZqaSZGI1_EwuSNBRAaVRHuJ6PMOuGz',
//   ],
// };

// export const [walletConnect, hooks] = initializeConnector<WalletConnect>(
//   actions =>
//     new WalletConnect({
//       actions,
//       options: {
//         rpc: rpcArray,
//       },
//     }),
// );

import { initializeConnector } from "@web3-react/core";
import { WalletConnect as WalletConnectV2 } from "@web3-react/walletconnect-v2";
const rpcArray = {
  80001: {
    urls: ["https://polygon-mumbai.g.alchemy.com/v2/OZZqaSZGI1_EwuSNBRAaVRHuJ6PMOuGz"],
    name: "Polygon Mumbai",
    nativeCurrency: "MATIC",
    blockExplorerUrls: ["hghj"],
  },
};
const [...optionalChains] = Object.keys(rpcArray).map(Number);
export const [walletConnect, hooks] = initializeConnector<WalletConnectV2>(
  (actions) =>
    new WalletConnectV2({
      actions,
      options: {
        projectId: "ffa163e84eb10e95c5e5033574aee1d8",
        chains: [1],
        optionalChains,
        showQrModal: true,
      },
    })
);
