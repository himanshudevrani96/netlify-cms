import { useCreateInstance } from "./useCreateInstance";

export const useGetAllStakes = () => {
  const { instance } = useCreateInstance();

  const getAllStakes = async (account?: string, library?: any) => {
    try {
      if (library && account) {
        const tokeninstance = await instance(library);
        const getUserAllStakes = await tokeninstance.methods.getUserAllStakes(account).call();
        return getUserAllStakes;
      }
      return 0;
    } catch (err) {
      console.error("AllStakes", err);
    }
  };
  return {
    getAllStakes,
  };
};
