import { useCreateInstance } from "./useCreateInstance";

export const useGetAllStakes = () => {
  const { instanceCreateWithTierIndex } = useCreateInstance();

  const getAllStakes = async (account: string, library: any, tierNumber: any, isWhiteListed: any, startIndex: any, endIndex: any) => {
    try {
      if (library && account && isWhiteListed) {
        const tier1Instance = await instanceCreateWithTierIndex(library, tierNumber);
        const getUserAllStakes = await tier1Instance.methods.getUserAllStakes(account, startIndex, endIndex).call();
        return getUserAllStakes;
      }
      return 0;
    } catch (err) {
      console.error("AllStakes", { err });
    }
  };

  const getStakeLength = async (account: string, library: any, tierNumber: any, isWhiteListed: any) => {
    try {
      if (library && account && isWhiteListed) {
        const tierInstance = await instanceCreateWithTierIndex(library, tierNumber);
        const getUserAllStakes = await tierInstance.methods.getUserAllStakesLength(account).call();
        return getUserAllStakes;
      }
      return 0;
    } catch (err) {
      console.error("AllStakes", err);
    }
  };

  const totalStakePerTier = async (library: any, tierNumber: any, isWhiteListed: any) => {
    try {
      if (library && isWhiteListed) {
        const tierInstance = await instanceCreateWithTierIndex(library, tierNumber);
        const getUserAllStakes = await tierInstance.methods.totalStakedTillNow().call();
        return getUserAllStakes;
      }
      return 0;
    } catch (err) {
      console.error("AllStakes", err);
    }
  };

  const StakingCapPerTier = async (library: any, tierNumber: any) => {
    try {
      if (library) {
        const tierInstance = await instanceCreateWithTierIndex(library, tierNumber);
        const getUserAllStakes = await tierInstance.methods.stakingCap().call();
        return getUserAllStakes;
      }
      return 0;
    } catch (err) {
      console.error("AllStakes", err);
    }
  };

  const tierDuration = async (library: any, tierNumber: any) => {
    try {
      if (library) {
        const tierInstance = await instanceCreateWithTierIndex(library, tierNumber);
        const getTierDuration = await tierInstance.methods.tierDuration().call();
        return getTierDuration;
      }
      return 0;
    } catch (err) {
      console.error("TierDuration", err);
    }
  };

  return {
    getAllStakes,
    getStakeLength,
    totalStakePerTier,
    StakingCapPerTier,
    tierDuration,
  };
};
