const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Bet {
    _id: ID
    chosenTeam: String!
    betAmount: Int!
    singleGameOdds: String
    createdAt: String
    userId: String
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

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    gameOdds(sport: String!): [gameOdds!]!
    gameScores(sport: String!): [gameScores!]!
    singleGameOdds(sport: String!, eventId: String!): [singleGameOdds!]!
    userBets: [Bet!]!
  }

  type Friend {
    id: ID!
    username: String!
  }

  type Mutation {
    addUser(
      username: String!
      email: String!
      password: String!
      points: Int = 1000
    ): Auth
    login(email: String!, password: String!): Auth
    logout: LogoutResponse
    updatePoints(username: String!, points: Int!): User!
    addBet(chosenTeam: String!, betAmount: Int!, singleGameOdds: String!): Bet
  }
`;

module.exports = typeDefs;
