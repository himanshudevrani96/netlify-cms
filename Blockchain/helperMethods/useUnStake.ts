import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toCamelCase } from "../../shared/services/strToCamelCase";

export const useUnStakes = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  const { instanceCreateWithTierIndex } = useCreateInstance();

  const unStakes = async (account: any, index: any, library?: any, tier?: any, handleError?: () => void): Promise<boolean> => {
    if (library && account && tier) {
      try {
        // console.log("try==>>");
        const web3 = getWeb3(library);
        const tokenInstance: any = await instanceCreateWithTierIndex(library, tier);
        const stakeData = await tokenInstance.methods.unstake(index).encodeABI();
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject = {
          from: account, // Replace with your wallet address
          gasPrice: gasPrice, // Gas price in Gwei
          data: stakeData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            await tokenInstance.methods
              .unstake(index)
              .send({
                ...transactionObject,
                gas: await tokenInstance.methods.unstake(index).estimateGas(transactionObject),
              })
              .on("transactionHash", (_hash: any) => {
                // console.log("_hash==>>", _hash);
                notify("Please wait while your unstaking request is being processed.");
              })
              .on("receipt", (_receipt: any) => {
                // console.log("_receipt1==>>", _receipt);
                toast.dismiss();
                notify("Unstake successful! Your amount has been successfully withdrawn from the staking pool.");
                resolve(_receipt); // Resolve the promise with true when successfull
              })
              .on("error", (_error: any, _receipt: any) => {
                // console.log("_receipt2==>>", _receipt);
                toast.dismiss();
                notify("Unstake transaction canceled by user. Please review your staking details and try again.");
                resolve(false); // Resolve the promise with false when failed
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
            resolve(false); // Reject the promise if an error occurs
            if (handleError) {
              handleError(); // Call the provided callback function
            }
          }
        });
      } catch (err) {
        console.error("UnStake error", err);
        return false; // Return false if an error occurs
      }
    }
    // Return false or handle other cases if needed
    return false; // Ensure to have a consistent return type
  };
  return {
    unStakes,
  };
};
