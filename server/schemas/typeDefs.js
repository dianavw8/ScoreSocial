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
    pointsEarned: Int
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

  type Auth {
    token: ID!
    user: User
  }

  input pointInput {
    pointNumber: Int
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    gameOdds: [gameOdds!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: LogoutResponse
  }
`;

module.exports = typeDefs;
