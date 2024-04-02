import { useCreateInstance } from "./useCreateInstance";

export const useGetEarned = () => {
  const { instanceCreateWithTierIndex } = useCreateInstance();

  const getEarned = async (account?: string, library?: any, index?: any, tier?: any) => {
    try {
      if (library && account && index) {
        const tokeninstance = await instanceCreateWithTierIndex(library, tier);
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
