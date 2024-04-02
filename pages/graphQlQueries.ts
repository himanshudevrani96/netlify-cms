import { gql } from "@apollo/client";

export const GET_USER_DATA = gql`
  query GetUser($userId: String!) {
    users(where: { id: $userId }) {
      id
      tier1TotalEarned
      tier2TotalEarned
      tier1TotalStaked
      tier2TotalStaked
      tier3TotalEarned
      tier3TotalStaked
    }
  }
`;

export const GET_USERS_ALL_STAKES = gql`
  query GetUser($userId: String!, $tier: Int!) {
    users(where: { id: $userId }) {
      stakes(where: { tier: $tier, isUnstaked: false }) {
        id
        isUnstaked
        tier
      }
    }
  }
`;

export const GET_USERS_ALL_UNCLAIMED_DATA = gql`
  query GetUser($userId: String!) {
    users(where: { id: $userId }) {
      stakes(where: { isRewardPaid: false }) {
        isRewardPaid
        endTime
        stakeAmount
        startTime
        tier
      }
    }
  }
`;

export const GET_USERS_ALL_LOCKED_DATA = gql`
  query GetUser($userId: String!) {
    users(where: { id: $userId }) {
      stakes(where: { isUnstaked: false }) {
        stakeAmount
        tier
        isUnstaked
      }
    }
  }
`;

export const GET_USERS_ALL_STAKEAMOUNT = gql`
  query GetUser {
    stakes {
      stakeAmount
      tier
      isUnstaked
    }
  }
`;

export const GET_ALL_USERS = gql`
  query GetUser {
    users {
      id
    }
  }
`;

export const GET_ALL_STAKES_FOR_TOTAL = gql`
  query GetUser($userId: String!) {
    users(where: { id: $userId }) {
      stakes(where: { isUnstaked: false }) {
        reward
        stakeAmount
        startTime
        tier
        unstakeAmount
        endTime
        id
        isRewardPaid
        isUnstaked
      }
    }
  }
`;
