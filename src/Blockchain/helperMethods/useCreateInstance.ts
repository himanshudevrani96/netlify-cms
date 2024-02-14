import { ABI } from "../abi/Abi";
import { COINABI } from "../abi/CoinAbi";
import { getWeb3 } from "./web3Provider";

export const useCreateInstance = () => {
  const instance = async (library: any) => {
    try {
      if (library) {
        const web3 = getWeb3(library);
        return new web3.eth.Contract(ABI.KALDI.abi, ABI.KALDI.address);
      }
      throw new Error("Library or library.eth is not available.");
    } catch (err) {
      console.error("instanceCreation", err);
      throw err;
    }
  };

  const getCoinInstance = async (library: any) => {
    try {
      if (library) {
        const web3 = getWeb3(library);
        return new web3.eth.Contract(COINABI.KALDICOIN.abi, COINABI.KALDICOIN.address);
      }
      throw new Error("Library or library.eth is not available.");
    } catch (err) {
      console.error("instanceCreation", err);
      throw err;
    }
  };

  return {
    instance,
    getCoinInstance,
  };
};
