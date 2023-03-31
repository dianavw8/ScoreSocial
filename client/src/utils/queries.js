import { gql } from '@apollo/client';


export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const GET_USER_POINTS = gql`
  query GetUserPoints($userId: ID!) {
    user(id: $userId) {
      pointsEarned
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: ID!) {
    user(id: $userId) {
      username
      email
      avatar
    }
  }
`;