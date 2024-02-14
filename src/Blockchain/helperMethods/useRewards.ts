import { useCreateInstance } from "./useCreateInstance";
import { getWeb3 } from "./web3Provider";

export const useClaim = () => {
  const { instance } = useCreateInstance();
  const claim = async (account: any, index: any, library?: any): Promise<boolean> => {
    if (library && account && index) {
      try {
        const web3 = getWeb3(library);
        const tokenInstance: any = await instance(library);
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
              .on("transactionHash", (hash: any) => {
                alert(hash);
              })
              .on("receipt", (_receipt: any) => {
                alert("get rewards successfull");
                resolve(true);
              })
              .on("error", (_error: any, _receipt: any) => {
                alert("get rewards failed");
                resolve(false);
              });
          } catch (err) {
            console.error("get rewards", err);
            reject(err);
          }
        });
      } catch (err) {
        console.error("rewards error =>", err);
        return false;
      }
    }
    return false;
  };
  return {
    claim,
  };
};
