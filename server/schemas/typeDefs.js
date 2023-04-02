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
    currentPoints: Int
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

  type Outcomes {
    label: String
    price: Float
    points: Int
  }

  type Markets {
    key: String
    outcomes: [Outcomes]
  }

  type Bookmakers {
    key: String
    title: String
    last_update: String
    markets: [Markets]
  }

  type gameOdds {
    id: String
    sport_key: String
    sport_title: String
    commence_time: String
    home_team: String
    away_team: String
    bookmakers: [Bookmakers]
  }

  type singleGameOdds {
    id: String
    sport_key: String
    sport_title: String
    commence_time: String
    home_team: String
    away_team: String
    bookmakers: [Bookmakers]
  }

  type Scores {
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
    scores: [Scores]
    last_update: String
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
    gameOdds(sport: String!): [gameOdds!]!
    gameScores(sport: String!): [gameScores!]!
    singleGameOdds(sport: String!, eventId: String!): [singleGameOdds!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    logout: LogoutResponse
  }
`

module.exports = typeDefs;
