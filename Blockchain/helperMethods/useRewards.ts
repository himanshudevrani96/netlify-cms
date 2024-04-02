import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const useClaim = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  const { instanceCreateWithTierIndex } = useCreateInstance();
  const claim = async (account: any, index: any, library?: any, tier?: any): Promise<boolean> => {
    if (library && account && index) {
      try {
        const web3 = getWeb3(library);
        const tokenInstance: any = await instanceCreateWithTierIndex(library, tier);
        const stakeData = await tokenInstance.methods.getReward(index).encodeABI();
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject = {
          from: account,
          gasPrice: gasPrice,
          data: stakeData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            await tokenInstance.methods
              .getReward(index)
              .send({
                ...transactionObject,
                gas: await tokenInstance.methods.getReward(index).estimateGas(transactionObject),
              })
              .on("transactionHash", () => {
                notify("Please wait until claim");
              })
              .on("receipt", (_receipt: any) => {
                notify("get rewards successfull");
                resolve(true);
              })
              .on("error", (_error: any, _receipt: any) => {
                notify("get rewards failed");
                resolve(false);
              });
          } catch (err: any) {
            console.error("get rewards", err);
            notify(err.message);
            reject(err);
          }
        });
      } catch (err: any) {
        console.error("rewards error =>", err);
        notify(err.message);
        return false;
      }
    }
    return false;
  };
  return {
    claim,
  };
};
