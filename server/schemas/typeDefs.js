const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Bet {
    betId: String
    match: String
    stake: Float
    odds: Float
    createdAt: String
    participants: [String]
  }

  type User {
    _id: ID
    email: String!
    username: String!
    password: String!
    friends: [String]
    activeBets: [String]
    points: Int
    betHistory: [String]
    profile: Profile
  }

  type Profile {
    username: String!
    email: String!
  }

  type LogoutResponse {
    message: String
  }

  type gameOdds {
    id: String
    sport_key: String
    sport_title: String
    commence_time: String
    home_team: String
    away_team: String
  }

  type Score {
  name: String
  score: String
  }

  type gameScores {
  id: String
  sport_key: String
  sport_title: String
  commence_time: String
  completed: Boolean
  home_team: String
  away_team: String
  scores: [Score]
  last_update: String
  }

  type Auth {
    token: ID!
    user: User
  }

  input UpdatePointsInput {
    username: String!
    points: Int!
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    gameOdds(sport: String!): [gameOdds!]!
    gameScores(sport: String!): [gameScores!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!, points: Int = 1000): Auth
    login(email: String!, password: String!): Auth
    logout: LogoutResponse
    updatePoints(input: UpdatePointsInput!): User!
  }
`;

module.exports = typeDefs;
