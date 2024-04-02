import { useCreateInstance } from "./useCreateInstance";

export const useGetTotalStaked = () => {
  const { instanceCreateWithTierIndex } = useCreateInstance();

  const getTotalStaked = async (account?: string, library?: any, tier?: any) => {
    try {
      if (library && account) {
        const tokeninstance = await instanceCreateWithTierIndex(library, tier);
        const getTotalStaked = await tokeninstance.methods.totalStaked().call();
        return getTotalStaked;
      }
      return 0;
    } catch (err) {
      console.error("TotalStaked Error: ", err);
    }
  };
  return {
    getTotalStaked,
  };
};
