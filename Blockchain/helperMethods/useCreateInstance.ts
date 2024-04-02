// import { ABI } from "../abi/Abi";
import { ABIS } from "../abi/Abis";
import { COINABI } from "../abi/CoinAbi";
import { WHITELIST } from "../abi/whitelistAbi";
import { getWeb3 } from "./web3Provider";

export const useCreateInstance = () => {
  const instanceCreateWithTierIndex = async (library: any, tier: any) => {
    try {
      if (library) {
        const web3 = getWeb3(library);
        return new web3.eth.Contract(ABIS.abis[tier - 1].abi, ABIS.abis[tier - 1].address);
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

  const getWhitelistInstance = async (library: any) => {
    try {
      if (library) {
        const web3 = getWeb3(library);
        return new web3.eth.Contract(WHITELIST.abi, WHITELIST.address);
      }
      throw new Error("Library or library.eth is not available.");
    } catch (err) {
      console.error("instanceCreation", err);
      throw err;
    }
  };

  return {
    getCoinInstance,
    instanceCreateWithTierIndex,
    getWhitelistInstance,
  };
};
