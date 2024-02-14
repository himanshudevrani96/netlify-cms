import { useCreateInstance } from "./useCreateInstance";

export const useGetEarned = () => {
  const { instance } = useCreateInstance();

  const getEarned = async (account?: string, library?: any, index?: any) => {
    try {
      if (library && account && index) {
        const tokeninstance = await instance(library);
        const getEarned = await tokeninstance.methods.earned(account, index).call();
        return getEarned;
      }
      return 0;
    } catch (err) {
      console.error("Get Earned Error==>>", err);
    }
  };
  return {
    getEarned,
  };
};
