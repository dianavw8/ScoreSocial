const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Bet {
    betId: String
    match: String
    stake: Float
    odds: Float
    createdAt: Date
    participants: [String]
  }

  type User {
    _id: ID
    email: String!
    username: String!
    password: String!
    firstName: String
    lastName: String
    friends: [String]
    activeBets: [String]
    points: Int
    betHistory: [String]
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
  }

  // ADD MUTATIONS
  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
