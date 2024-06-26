export const ABIS: any = {
  coinAdress: process.env.NEXT_PUBLIC_COIN_ADDRESS,
  abis: [
    {
      address: process.env.NEXT_PUBLIC_TIER1,
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_tokenAddress", type: "address" },
            { internalType: "address", name: "_treasuryWallet", type: "address" },
            { internalType: "uint256", name: "_capAmount", type: "uint256" },
            { internalType: "address", name: "_whitelist", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "GetReward",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Paused", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "RewardAdded",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPenaltyPercentage", type: "uint256" }], name: "RewardPenaltyPercentage", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPercentage", type: "uint256" }], name: "RewardPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "Staked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "capAmount", type: "uint256" },
          ],
          name: "StakingCap",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "tierDuration", type: "uint256" }], name: "TierDuration", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "treasuryWalletAddress", type: "address" }], name: "TreasuryWallet", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Unpaused", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "unstakePenaltyPercentage", type: "uint256" }], name: "UnstakePenaltyPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "reward", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "stakePenalty", type: "uint256" },
            { indexed: false, internalType: "bool", name: "isPenalty", type: "bool" },
            { indexed: false, internalType: "uint256", name: "extraReward", type: "uint256" },
          ],
          name: "Unstaked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "user", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "UserEmergencyWithdraw",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "whitelistAddress", type: "address" }], name: "Whitelist", type: "event" },
        { inputs: [], name: "DECIMAL_DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "KALDI_TOKEN", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardAmount", type: "uint256" }], name: "addReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_capAmount", type: "uint256" }], name: "changeCapLimit", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_treasuryWallet", type: "address" }], name: "changeTreasuryWallet", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_whitelist", type: "address" }], name: "changeWhiteList", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "uint256", name: "_index", type: "uint256" },
          ],
          name: "earned",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "getReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_staker", type: "address" },
            { internalType: "uint256", name: "_start", type: "uint256" },
            { internalType: "uint256", name: "_end", type: "uint256" },
          ],
          name: "getUserAllStakes",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "stakeAmount", type: "uint256" },
                { internalType: "uint256", name: "startTime", type: "uint256" },
                { internalType: "uint256", name: "reward", type: "uint256" },
                { internalType: "bool", name: "isPaid", type: "bool" },
                { internalType: "bool", name: "isUnstaked", type: "bool" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              internalType: "struct KaldiStakingTier1.UserAllStakes[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_staker", type: "address" }],
          name: "getUserAllStakesLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "paused", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "rewardAvailable", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyShare", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPenaltyPercentage", type: "uint256" }], name: "setRewardPenaltyPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPercentage", type: "uint256" }], name: "setRewardPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_tierDuration", type: "uint256" }], name: "setTierDuration", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "uint256", name: "_unstakePenaltyPercentage", type: "uint256" }],
          name: "setUnstakePenaltyPercentage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }], name: "stake", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "stakes",
          outputs: [
            { internalType: "uint256", name: "stakeAmount", type: "uint256" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
            { internalType: "uint256", name: "reward", type: "uint256" },
            { internalType: "bool", name: "isPaid", type: "bool" },
            { internalType: "bool", name: "isUnstaked", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "stakingCap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "tierDuration", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStaked", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStakedTillNow", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "treasuryWallet", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "unstakePenaltyDeposits", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unstakePenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "userEmergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "whitelist", outputs: [{ internalType: "contract IWhitelist", name: "", type: "address" }], stateMutability: "view", type: "function" },
      ],
    },
    {
      address: process.env.NEXT_PUBLIC_TIER2,
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_tokenAddress", type: "address" },
            { internalType: "address", name: "_treasuryWallet", type: "address" },
            { internalType: "uint256", name: "_capAmount", type: "uint256" },
            { internalType: "address", name: "_whitelist", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "GetReward",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Paused", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "RewardAdded",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPenaltyPercentage", type: "uint256" }], name: "RewardPenaltyPercentage", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPercentage", type: "uint256" }], name: "RewardPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "Staked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "capAmount", type: "uint256" },
          ],
          name: "StakingCap",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "tierDuration", type: "uint256" }], name: "TierDuration", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "treasuryWalletAddress", type: "address" }], name: "TreasuryWallet", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Unpaused", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "unstakePenaltyPercentage", type: "uint256" }], name: "UnstakePenaltyPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "reward", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "stakePenalty", type: "uint256" },
            { indexed: false, internalType: "bool", name: "isPenalty", type: "bool" },
            { indexed: false, internalType: "uint256", name: "extraReward", type: "uint256" },
          ],
          name: "Unstaked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "user", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "UserEmergencyWithdraw",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "whitelistAddress", type: "address" }], name: "Whitelist", type: "event" },
        { inputs: [], name: "DECIMAL_DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "KALDI_TOKEN", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardAmount", type: "uint256" }], name: "addReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_capAmount", type: "uint256" }], name: "changeCapLimit", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_treasuryWallet", type: "address" }], name: "changeTreasuryWallet", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_whitelist", type: "address" }], name: "changeWhiteList", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "uint256", name: "_index", type: "uint256" },
          ],
          name: "earned",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "getReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_staker", type: "address" },
            { internalType: "uint256", name: "_start", type: "uint256" },
            { internalType: "uint256", name: "_end", type: "uint256" },
          ],
          name: "getUserAllStakes",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "stakeAmount", type: "uint256" },
                { internalType: "uint256", name: "startTime", type: "uint256" },
                { internalType: "uint256", name: "reward", type: "uint256" },
                { internalType: "bool", name: "isPaid", type: "bool" },
                { internalType: "bool", name: "isUnstaked", type: "bool" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              internalType: "struct KaldiStakingTier2.UserAllStakes[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_staker", type: "address" }],
          name: "getUserAllStakesLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "paused", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "rewardAvailable", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyShare", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPenaltyPercentage", type: "uint256" }], name: "setRewardPenaltyPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPercentage", type: "uint256" }], name: "setRewardPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_tierDuration", type: "uint256" }], name: "setTierDuration", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "uint256", name: "_unstakePenaltyPercentage", type: "uint256" }],
          name: "setUnstakePenaltyPercentage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }], name: "stake", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "stakes",
          outputs: [
            { internalType: "uint256", name: "stakeAmount", type: "uint256" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
            { internalType: "uint256", name: "reward", type: "uint256" },
            { internalType: "bool", name: "isPaid", type: "bool" },
            { internalType: "bool", name: "isUnstaked", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "stakingCap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "tierDuration", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStaked", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStakedTillNow", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "treasuryWallet", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "unstakePenaltyDeposits", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unstakePenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "userEmergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "whitelist", outputs: [{ internalType: "contract IWhitelist", name: "", type: "address" }], stateMutability: "view", type: "function" },
      ],
    },
    {
      address: process.env.NEXT_PUBLIC_TIER3,
      abi: [
        {
          inputs: [
            { internalType: "address", name: "_tokenAddress", type: "address" },
            { internalType: "address", name: "_treasuryWallet", type: "address" },
            { internalType: "uint256", name: "_capAmount", type: "uint256" },
            { internalType: "address", name: "_whitelist", type: "address" },
          ],
          stateMutability: "nonpayable",
          type: "constructor",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "GetReward",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
            { indexed: true, internalType: "address", name: "newOwner", type: "address" },
          ],
          name: "OwnershipTransferred",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Paused", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
          ],
          name: "RewardAdded",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPenaltyPercentage", type: "uint256" }], name: "RewardPenaltyPercentage", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "rewardPercentage", type: "uint256" }], name: "RewardPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "Staked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "admin", type: "address" },
            { indexed: false, internalType: "uint256", name: "capAmount", type: "uint256" },
          ],
          name: "StakingCap",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "tierDuration", type: "uint256" }], name: "TierDuration", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "treasuryWalletAddress", type: "address" }], name: "TreasuryWallet", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }], name: "Unpaused", type: "event" },
        { anonymous: false, inputs: [{ indexed: false, internalType: "uint256", name: "unstakePenaltyPercentage", type: "uint256" }], name: "UnstakePenaltyPercentage", type: "event" },
        {
          anonymous: false,
          inputs: [
            { indexed: true, internalType: "address", name: "staker", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "reward", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "stakePenalty", type: "uint256" },
            { indexed: false, internalType: "bool", name: "isPenalty", type: "bool" },
            { indexed: false, internalType: "uint256", name: "extraReward", type: "uint256" },
          ],
          name: "Unstaked",
          type: "event",
        },
        {
          anonymous: false,
          inputs: [
            { indexed: false, internalType: "address", name: "user", type: "address" },
            { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
            { indexed: false, internalType: "uint256", name: "index", type: "uint256" },
          ],
          name: "UserEmergencyWithdraw",
          type: "event",
        },
        { anonymous: false, inputs: [{ indexed: false, internalType: "address", name: "whitelistAddress", type: "address" }], name: "Whitelist", type: "event" },
        { inputs: [], name: "DECIMAL_DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "DENOMINATOR", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "KALDI_TOKEN", outputs: [{ internalType: "contract IERC20", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardAmount", type: "uint256" }], name: "addReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_capAmount", type: "uint256" }], name: "changeCapLimit", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_treasuryWallet", type: "address" }], name: "changeTreasuryWallet", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "address", name: "_whitelist", type: "address" }], name: "changeWhiteList", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_address", type: "address" },
            { internalType: "uint256", name: "_index", type: "uint256" },
          ],
          name: "earned",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "getReward", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "_staker", type: "address" },
            { internalType: "uint256", name: "_start", type: "uint256" },
            { internalType: "uint256", name: "_end", type: "uint256" },
          ],
          name: "getUserAllStakes",
          outputs: [
            {
              components: [
                { internalType: "uint256", name: "stakeAmount", type: "uint256" },
                { internalType: "uint256", name: "startTime", type: "uint256" },
                { internalType: "uint256", name: "reward", type: "uint256" },
                { internalType: "bool", name: "isPaid", type: "bool" },
                { internalType: "bool", name: "isUnstaked", type: "bool" },
                { internalType: "uint256", name: "index", type: "uint256" },
              ],
              internalType: "struct KaldiStakingTier3.UserAllStakes[]",
              name: "",
              type: "tuple[]",
            },
          ],
          stateMutability: "view",
          type: "function",
        },
        {
          inputs: [{ internalType: "address", name: "_staker", type: "address" }],
          name: "getUserAllStakesLength",
          outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "owner", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "paused", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "rewardAvailable", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPenaltyShare", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "rewardPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPenaltyPercentage", type: "uint256" }], name: "setRewardPenaltyPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_rewardPercentage", type: "uint256" }], name: "setRewardPercentage", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_tierDuration", type: "uint256" }], name: "setTierDuration", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [{ internalType: "uint256", name: "_unstakePenaltyPercentage", type: "uint256" }],
          name: "setUnstakePenaltyPercentage",
          outputs: [],
          stateMutability: "nonpayable",
          type: "function",
        },
        { inputs: [{ internalType: "uint256", name: "_amount", type: "uint256" }], name: "stake", outputs: [], stateMutability: "nonpayable", type: "function" },
        {
          inputs: [
            { internalType: "address", name: "", type: "address" },
            { internalType: "uint256", name: "", type: "uint256" },
          ],
          name: "stakes",
          outputs: [
            { internalType: "uint256", name: "stakeAmount", type: "uint256" },
            { internalType: "uint256", name: "startTime", type: "uint256" },
            { internalType: "uint256", name: "reward", type: "uint256" },
            { internalType: "bool", name: "isPaid", type: "bool" },
            { internalType: "bool", name: "isUnstaked", type: "bool" },
          ],
          stateMutability: "view",
          type: "function",
        },
        { inputs: [], name: "stakingCap", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "tierDuration", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStaked", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "totalStakedTillNow", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "address", name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "treasuryWallet", outputs: [{ internalType: "address", name: "", type: "address" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "unstake", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "unstakePenaltyDeposits", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [], name: "unstakePenaltyPercentage", outputs: [{ internalType: "uint256", name: "", type: "uint256" }], stateMutability: "view", type: "function" },
        { inputs: [{ internalType: "uint256", name: "_index", type: "uint256" }], name: "userEmergencyWithdraw", outputs: [], stateMutability: "nonpayable", type: "function" },
        { inputs: [], name: "whitelist", outputs: [{ internalType: "contract IWhitelist", name: "", type: "address" }], stateMutability: "view", type: "function" },
      ],
    },
  ],
};
