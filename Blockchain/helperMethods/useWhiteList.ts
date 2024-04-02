import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toCamelCase } from "../../shared/services/strToCamelCase";
import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";

export const useDonate = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  const { getWhitelistInstance } = useCreateInstance();
  const donate = async (account: any, amount: any, library?: any, handleError?: () => void): Promise<boolean> => {
    if (library && account && amount) {
      try {
        const web3 = getWeb3(library);
        const tokenInstance: any = await getWhitelistInstance(library);
        const stakeData = await tokenInstance.methods.donate(amount).encodeABI();
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject = {
          from: account, // Replace with your wallet address
          gasPrice: gasPrice, // Gas price in Gwei
          data: stakeData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            await tokenInstance.methods
              .donate(amount)
              .send({
                ...transactionObject,
                gas: await tokenInstance.methods.donate(amount).estimateGas(transactionObject),
              })
              .on("transactionHash", () => {
                notify("Please wait for the donation transaction to be confirmed on the blockchain.");
              })
              .on("receipt", (_receipt: any) => {
                notify("Transaction successfull! Your donation transaction has been confirmed on the blockchain. Thank you for your support.");
                resolve(_receipt);
              })
              .on("error", (_error: any, _receipt: any) => {
                notify("Donate transaction failed");
                resolve(false);
                if (handleError) {
                  handleError(); // Call the provided callback function
                }
              });
          } catch (error: any) {
            // Extracting JSON part from the error message
            const jsonStartIndex = error.message.indexOf("{");
            const jsonEndIndex = error.message.lastIndexOf("}");
            const jsonString = error.message.substring(jsonStartIndex, jsonEndIndex + 1);
            // Parsing the JSON string into an object
            const errorObject = JSON.parse(jsonString);
            notify(toCamelCase(errorObject.message));
            reject(error); // Reject the promise if an error occurs
            if (handleError) {
              handleError(); // Call the provided callback function
            }
          }
        });
      } catch (err: any) {
        notify(err.message);
        return false; // Return false if an error occurs
      }
    }
    return false; // Ensure to have a consistent return type
  };

  const totalDonationValue = async (account: any, library?: any): Promise<boolean> => {
    if (library && account) {
      try {
        const tokenInstance: any = await getWhitelistInstance(library);
        const totalDonationData = await tokenInstance.methods.totalDonation().call();
        return totalDonationData;
      } catch (err: any) {
        // Extracting JSON part from the error message
        const jsonStartIndex = err.message.indexOf("{");
        const jsonEndIndex = err.message.lastIndexOf("}");
        const jsonString = err.message.substring(jsonStartIndex, jsonEndIndex + 1);
        // Parsing the JSON string into an object
        const errorObject = JSON.parse(jsonString);
        notify(toCamelCase(errorObject.message));
        console.error("totalDonationValue", err);
        return false; // Return false if an error occurs
      }
    }
    return false; // Ensure to have a consistent return type
  };

  const multiplePerUintValue = async (account: any, library: any, units: any): Promise<boolean> => {
    if (library && account && units) {
      try {
        const tokenInstance: any = await getWhitelistInstance(library);
        const totalDonationData = await tokenInstance.methods.multiplePerUint(units).call();
        return totalDonationData;
      } catch (err: any) {
        console.error("multiplePerUintValue", err);
        return false; // Return false if an error occurs
      }
    }
    return false; // Ensure to have a consistent return type
  };

  return {
    donate,
    totalDonationValue,
    multiplePerUintValue,
  };
};
