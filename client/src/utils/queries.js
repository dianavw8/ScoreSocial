import { gql } from '@apollo/client';


export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      points
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query me {
    me{
    id
    email
    username
    points
    }
  }
`;

export const GET_ODDS = gql`
query GameOdds($sport: String!) {
  gameOdds(sport: $sport) {
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