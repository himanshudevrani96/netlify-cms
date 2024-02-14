import Web3 from "web3";
const defaultRPCUrl = "https://polygon-mumbai.infura.io/v3/91715fa960a946f1b58dd3edd493cf24";

export const getWeb3 = (library: any) => {
  if (library.provider) {
    return new Web3(library.provider);
  } else {
    const provider = new Web3.providers.HttpProvider(defaultRPCUrl);
    return new Web3(provider);
  }
};
