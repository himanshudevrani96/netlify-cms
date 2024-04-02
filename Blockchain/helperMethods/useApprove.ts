// import BigNumber from "bignumber.js";
import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";
import { useAllowence } from "./useAllowence";
import { WHITELIST } from "../abi/whitelistAbi";
import { ABIS } from "../abi/Abis";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toCamelCase } from "../../shared/services/strToCamelCase";
interface TransactionObject {
  from: any;
  to: any;
  gasPrice: string;
  data: any;
  gas?: number; // Making gas property optional
}

export const useApprove = () => {
  const notify = (msg: any) =>
    toast(msg, {
      theme: "light",
    });
  const { getCoinInstance } = useCreateInstance();
  const [allowenceValue, setAllowence] = useAllowence();
  const checkAllowance = async (account: any, library: Object, tier?: any) => {
    try {
      const coinInstance: any = await getCoinInstance(library);

      return await coinInstance?.methods.allowance(account, ABIS.abis[tier - 1].address).call();
    } catch (err) {
      console.error("error allowance", err);
    }
  };

  const approve = async (account: any, library: any, tier?: any, handleError?: () => void): Promise<boolean> => {
    if (library && account) {
      try {
        const maxAllowance = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
        const tokenInstance: any = await getCoinInstance(library);
        const approveData = tokenInstance.methods.approve(ABIS.abis[tier - 1]?.address, maxAllowance).encodeABI();
        const web3 = getWeb3(library);
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject: TransactionObject = {
          from: account, // Replace with your wallet address
          to: ABIS.abis[tier - 1].address, // Replace with the recipient's address
          gasPrice: gasPrice, // Gas price in Gwei
          data: approveData,
        };
        return new Promise<boolean>(async (resolve, reject) => {
          try {
            const gasEstimate = await tokenInstance.methods.approve(ABIS.abis[tier - 1].address, maxAllowance).estimateGas({ from: account });
            transactionObject.gas = gasEstimate;
            await tokenInstance.methods
              .approve(ABIS.abis[tier - 1].address, maxAllowance)
              .send(transactionObject)
              .on("transactionHash", () => {
                notify("Please wait for approval to proceed with staking.");
              })
              .on("receipt", async (_receipt: any) => {
                notify("Approval confirmed! The requested amount has been successfully approved on the blockchain network.");
                const allowence = await checkAllowance(account, library, Number(tier));
                const allownceLimit = parseFloat(allowence.toString()) / Math.pow(10, 18);
                setAllowence(allownceLimit);
                // console.log(allowenceValue);
                resolve(true);
              })
              .on("error", (_error: any, _receipt: any) => {
                notify("Approval rejected. Please ensure all details are accurate and try your request again");
                resolve(false);
                if (handleError) {
                  handleError(); // Call the provided callback function
                }
              });
          } catch (err: any) {
            console.error("get approve", err);
            // Extracting JSON part from the error message
            const jsonStartIndex = err.message.indexOf("{");
            const jsonEndIndex = err.message.lastIndexOf("}");
            const jsonString = err.message.substring(jsonStartIndex, jsonEndIndex + 1);
            // Parsing the JSON string into an object
            const errorObject = JSON.parse(jsonString);
            notify(toCamelCase(errorObject.message));
            reject(err);
            if (handleError) {
              handleError(); // Call the provided callback function
            }
          }
        });
      } catch (err: any) {
        console.error("approve error =>", err);
        notify(err.message);
        return false;
      }
    }
    return false;
  };

  //==================WhiteList Approve and check Allowence==================//

  const checkAllowanceForWhiteList = async (account: any, library: Object) => {
    try {
      const coinInstance: any = await getCoinInstance(library);
      return await coinInstance?.methods.allowance(account, WHITELIST.address).call();
    } catch (err) {
      console.error("error allowance", err);
    }
  };

  const approveForWhiteList = async (account: any, library: any, handleError?: () => void): Promise<boolean> => {
    if (account && library) {
      try {
        const maxAllowance = "115792089237316195423570985008687907853269984665640564039457584007913129639935";
        const tokenInstance: any = await getCoinInstance(library);
        const approveData = tokenInstance.methods.approve(WHITELIST.address, maxAllowance).encodeABI();
        const web3 = getWeb3(library);
        const gasPrice = await web3.eth.getGasPrice();
        const transactionObject: TransactionObject = {
          from: account,
          to: WHITELIST.address,
          gasPrice: gasPrice,
          data: approveData,
        };

        return new Promise<boolean>(async (resolve, reject) => {
          try {
            const gasEstimate = await tokenInstance.methods.approve(WHITELIST.address, maxAllowance).estimateGas({ from: account });
            transactionObject.gas = gasEstimate;

            await tokenInstance.methods
              .approve(WHITELIST.address, maxAllowance)
              .send(transactionObject)
              .on("transactionHash", () => {
                notify("Please wait for approval before proceeding.");
              })
              .on("receipt", async (_receipt: any) => {
                notify("Connectivity approved successfully! You're all set to proceed.");
                resolve(true);
              })
              .on("error", (error: any, _receipt: any) => {
                notify(error.message);
                resolve(false);
                if (handleError) {
                  handleError(); // Call the provided callback function
                }
              });
          } catch (err: any) {
            console.error("get approve", err);
            // Extracting JSON part from the error message
            const jsonStartIndex = err.message.indexOf("{");
            const jsonEndIndex = err.message.lastIndexOf("}");
            const jsonString = err.message.substring(jsonStartIndex, jsonEndIndex + 1);
            // Parsing the JSON string into an object
            const errorObject = JSON.parse(jsonString);
            notify(toCamelCase(errorObject.message));
            reject(err);
            if (handleError) {
              handleError(); // Call the provided callback function
            }
          }
        });
      } catch (err: any) {
        console.error("approve error =>", err);
        notify(err.message);
        return false;
      }
    }
    return false;
  };

  return {
    approve,
    checkAllowance,
    checkAllowanceForWhiteList,
    approveForWhiteList,
  };
};
