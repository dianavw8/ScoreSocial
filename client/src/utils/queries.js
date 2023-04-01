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

export const GET_ODDS = gql`
  query gameOdds($sport_key: String) {
    gameOdds(sport_key: $sport_key) {
      id
      sport_key
      sport_title
      commence_time 
      home_team
      away_team
    }
  }
`;

export const GET_SCORES = gql`
  query gameScores($sport_key: String) {
    gameScores(sport_key: $sport_key) {
      id
      sport_key
      sport_title
      commence_time 
      completed
      home_team
      away_team
      scores
      last_update
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: ID!) {
    user(id: $userId) {
      username
      email
    }
  }
`;