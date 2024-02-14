import { useCreateInstance } from "./useCreateInstance";

export const useGetTotalStaked = () => {
  const { instance } = useCreateInstance();

  const getTotalStaked = async (account?: string, library?: any) => {
    try {
      if (library && account) {
        const tokeninstance = await instance(library);
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
