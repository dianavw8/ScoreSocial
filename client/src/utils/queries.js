import { gql } from "@apollo/client";

export const GET_USER = gql`
  query getUser($username: String!) {
    user(username: $username) {
      _id
      username
      email
      points
      bets{
        chosenTeam
        betAmount
        singleGameOdds
      }
    }
  }
`;

export const GET_CURRENT_USER = gql`
  query me {
    me {
      id
      email
      username
      points
      bets{
        chosenTeam
        betAmount
        singleGameOdds
      }
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
      bookmakers {
        key
        title
        last_update
        markets {
          key
          outcomes {
            label
            price
            points
          }
        }
      }
    }
  }
`;

export const GET_SCORES = gql`
  query Query($sport: String!) {
    gameScores(sport: $sport) {
      id
      sport_key
      sport_title
      commence_time
      completed
      home_team
      away_team
      last_update
      scores {
        name
        score
      }
    }
  }
`;

export const GET_SINGLE_ODDS = gql`
query singleGameOdds($sport: String!, $eventId: String!) {
  singleGameOdds(sport: $sport, eventId: $eventId) {
      id
      sport_key
      sport_title
      commence_time
      home_team
      away_team
      bookmakers {
        key
        title
        last_update
        markets {
          key
          outcomes {
            price
            label
            points
          }
        }
      }
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

export const GET_FRIEND = gql`
query GetFriend {
  user {
    id
    username
    friends {
      id
      username
    }
  }
}`;

export const GET_USER_BETS = gql`
query userBets {
  userBets{
    _id
    chosenTeam
    betAmount
    singleGameOdds 
    createdAt
    userId
  }
}`;



const subscription = gql`
  subscription UserOnlineStatus($userId: ID!) {
  userOnlineStatus(userId: $userId) {
    online
  }
}
`;