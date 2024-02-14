import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";

export const useStakes = () => {
  const { instance } = useCreateInstance();

  //   const stakes = async (account: any, amount?: string, library?: any): Promise<boolean> => {
  //     debugger;
  //     if (library && amount && account) {
  //         try {
  //           const web3 = getWeb3(library);
  //           const stakeAmount = web3.utils.toWei(amount);
  //           const tokenInstance: any = await instance(library);
  //           const stakeData = await tokenInstance.methods.stake(stakeAmount).encodeABI();
  //           const gasPrice = await web3.eth.getGasPrice();
  //           const transactionObject = {
  //             from: account, // Replace with your wallet address
  //             gasPrice: gasPrice, // Gas price in Gwei
  //             data: stakeData,
  //           };
  //           return new Promise<boolean>(async (resolve, reject) => {
  //            await tokenInstance.methods.stake(stakeAmount).estimateGas(transactionObject, async (error: any, estimatedGasPrice: any) => {
  //             if (error) {
  //               throw new Error(error);
  //             }
  //             await tokenInstance.methods
  //               .stake(stakeAmount)
  //               .send({
  //                 ...transactionObject,
  //                 gas: estimatedGasPrice,
  //               })
  //               .on("transactionHash", (hash: any) => {
  //                 alert(hash);
  //               })
  //               .on("receipt", (_receipt: any) => {
  //                 alert("approve token0 successfull");
  //                 if (_receipt) {
  //                   resolve(true);
  //                 }
  //                 //
  //               })
  //               .on("error", (_error: any, _receipt: any) => {
  //                 alert("approve token0 failed");
  //                 reject(false);
  //               });
  //           });
  //         });
  //         } catch (err) {
  //           console.error("approve", err);
  //         }

  //     }
  //   };

  const stakes = async (account: any, amount?: string, library?: any): Promise<boolean> => {
    if (library && amount && account) {
      try {
        const web3 = getWeb3(library);
        const stakeAmount = web3.utils.toWei(amount);
        const tokenInstance: any = await instance(library);
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
              .on("transactionHash", (hash: any) => {
                alert(hash);
              })
              .on("receipt", (_receipt: any) => {
                alert("Stake successful");
                resolve(true); // Resolve the promise with true when successful
              })
              .on("error", (_error: any, _receipt: any) => {
                alert("Skate failed");
                resolve(false); // Resolve the promise with false when failed
              });
          } catch (error) {
            console.error("Skate error==>>", error);
            reject(error);
            resolve(false); // Reject the promise if an error occurs
          }
        });
      } catch (err) {
        console.error("approve", err);
        return false; // Return false if an error occurs
      }
    }
    // Return false or handle other cases if needed
    return false; // Ensure to have a consistent return type
  };

  return {
    stakes,
  };
};
