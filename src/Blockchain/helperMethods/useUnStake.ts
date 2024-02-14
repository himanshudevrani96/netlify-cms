import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";

export const useUnStakes = () => {
  const { instance } = useCreateInstance();
  const unStakes = async (account: any, index: any, library?: any): Promise<boolean> => {
    if (library && account && index) {
      try {
        const web3 = getWeb3(library);
        const tokenInstance: any = await instance(library);
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
              .on("transactionHash", (hash: any) => {
                alert(hash);
              })
              .on("receipt", (_receipt: any) => {
                alert("unstake successfull");
                resolve(true);
              })
              .on("error", (_error: any, _receipt: any) => {
                alert("unstake failed");
                resolve(false);
              });
          } catch (error) {
            console.error("unstake", error);
            reject(error); // Reject the promise if an error occurs
          }
        });
      } catch (err) {
        console.error("unstake", err);
        return false; // Return false if an error occurs
      }
    }
    return false; // Ensure to have a consistent return type
  };
  return {
    unStakes,
  };
};
