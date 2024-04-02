import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toCamelCase } from "../../shared/services/strToCamelCase";
export const useStakes = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  const { instanceCreateWithTierIndex } = useCreateInstance();

  const stakes = async (account: any, amount?: string, library?: any, tier?: any, handleError?: () => void): Promise<boolean> => {
    if (library && amount && account) {
      try {
        const web3 = getWeb3(library);
        const stakeAmount = web3.utils.toWei(amount);
        const tokenInstance: any = await instanceCreateWithTierIndex(library, tier);
        const stakeData = await tokenInstance.methods.stake(stakeAmount).encodeABI();
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject = {
          from: account,
          gasPrice: gasPrice,
          data: stakeData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            await tokenInstance.methods
              .stake(stakeAmount)
              .send({
                ...transactionObject,
                gas: await tokenInstance.methods.stake(stakeAmount).estimateGas(transactionObject),
              })
              .on("transactionHash", () => {
                notify("Please wait while your stake is being processed.");
              })
              .on("receipt", (_receipt: any) => {
                toast.dismiss();
                notify("Stake successful! Your amount has been securely staked.");
                resolve(_receipt); // Resolve the promise with true when successful
              })
              .on("error", (_error: any, _receipt: any) => {
                toast.dismiss();
                notify("Staking transaction canceled by user. Please review your staking details and try again.");
                resolve(false); // Resolve the promise with true when successful
                if (handleError) {
                  handleError(); // Call the provided callback function
                }
              });
          } catch (error: any) {
            toast.dismiss();
            // Extracting JSON part from the error message
            const jsonStartIndex = error.message.indexOf("{");
            const jsonEndIndex = error.message.lastIndexOf("}");
            const jsonString = error.message.substring(jsonStartIndex, jsonEndIndex + 1);
            // Parsing the JSON string into an object
            const errorObject = JSON.parse(jsonString);
            notify(toCamelCase(errorObject.message));
            reject(error);
            resolve(false);
            if (handleError) {
              handleError();
            }
          }
        });
      } catch (err) {
        console.error("approve", err);
        return false;
      }
    }
    return false;
  };
  return {
    stakes,
  };
};
