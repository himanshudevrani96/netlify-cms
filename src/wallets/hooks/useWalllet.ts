// import { web3 } from './constants';
import { useConnectWallet } from "./useConnectWallet";

export const useWallet = () => {
  const { activate, chainId, account, library, deactivate }: any = useConnectWallet();
  const { ethereum }: any = window;

  const fetchBalance = async () => {
    try {
      if (account) {
        return await library?.getBalance(account);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const switchEthereum = async (connector: any) => {
    try {
      if (Number(chainId) !== 137) {
        await ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x89" }],
        });
        await ethereum.request({
          method: "wallet_watchAsset",
          params: {
            type: "ERC20",
            options: {
              address: "0x0CA5f487da682eDedB820a5b4572A532044e0d07",
              symbol: "KALDI",
              decimals: 18,
            },
          },
        });
      }
      await activate(connector);
    } catch (error) {
      let err: any = error;
      console.error({ err });

      if (err.code === 4902) {
        const chain: any = 137;
        ethereum
          .request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89",
                chainName: `${chain == 137 ? "Matic(Polygon) Mainnet" : "Mumbai Testnet"}`,
                nativeCurrency: {
                  name: "Matic",
                  symbol: "Matic",
                  decimals: 18,
                },
                rpcUrls: ["https://polygon-mainnet.g.alchemy.com/v2/0fx6Mzn1_ao6_Jz_i-n1qLnzBgky7xwh"],
                blockExplorerUrls: ["https://polygonscan.com/"],
              },
              {
                type: "ERC20",
                options: {
                  address: "0x0CA5f487da682eDedB820a5b4572A532044e0d07",
                  symbol: "KALDI",
                  decimals: 18,
                },
              },
            ],
          })
          .then(() => {
            activate(connector);
          })
          .catch((error: any) => {
            console.error(error);
          });
      }
      if (err.code === 4001) {
        deactivate();
      }
    }
  };

  return {
    switchEthereum,
    fetchBalance,
  };
};
