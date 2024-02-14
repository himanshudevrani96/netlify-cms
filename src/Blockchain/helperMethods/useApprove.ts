// import BigNumber from "bignumber.js";
import { COINABI } from "../abi/CoinAbi";
import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "../helperMethods/web3Provider";
import { useAllowence } from "./useAllowence";

export const useApprove = () => {
  const { getCoinInstance } = useCreateInstance();
  const [allowenceValue, setAllowence] = useAllowence();
  const checkAllowance = async (account: any, library: Object) => {
    try {
      const coinInstance: any = await getCoinInstance(library);
      return await coinInstance?.methods
        .allowance(account, COINABI.KALDICOIN.ContractAddress)
        .call();
    } catch (err) {
      console.error("error allowance", err);
    }
  };

  const approve = async (account: any, library: any): Promise<boolean> => {
    if (library && account) {
      try {
        const maxAllowance =
          "115792089237316195423570985008687907853269984665640564039457584007913129639935";
        const tokenInstance: any = await getCoinInstance(library);
        const approveData = tokenInstance.methods
          .approve(COINABI.KALDICOIN.ContractAddress, maxAllowance)
          .encodeABI();
        const web3 = getWeb3(library);
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject = {
          from: account, // Replace with your wallet address
          to: COINABI.KALDICOIN.ContractAddress, // Replace with the recipient's address
          gasPrice: gasPrice, // Gas price in Gwei
          data: approveData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            await tokenInstance.methods
              .approve(COINABI.KALDICOIN.ContractAddress, maxAllowance)
              .send({
                ...transactionObject,
                gas: await tokenInstance.methods.approve(
                  COINABI.KALDICOIN.ContractAddress,
                  maxAllowance
                ),
              })
              .on("transactionHash", (hash: any) => {
                alert(hash);
              })
              .on("receipt", async (_receipt: any) => {
                alert("approve successfull");
                const allowence = await checkAllowance(account, library);
                const allownceLimit =
                  parseFloat(allowence.toString()) / Math.pow(10, 18);
                setAllowence(allownceLimit);
                resolve(true);
              })
              .on("error", (_error: any, _receipt: any) => {
                alert("approve failed");
                resolve(false);
              });
          } catch (err) {
            console.error("get approve", err);
            reject(err);
          }
        });
      } catch (err) {
        console.error("approve error =>", err);
        return false;
      }
    }
    return false;
  };
  return {
    approve,
    checkAllowance,
  };
};
