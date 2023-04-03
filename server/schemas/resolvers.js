const axios = require("axios");
const jwt = require("jsonwebtoken");
const { secret, expiration } = require("./config"); // import your config file with secret and expiration values
require("dotenv").config();

const { User } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { db } = require("../models/User");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("savedBooks");

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find().select("-__v -password");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).select("-__v -password");
    },
    gameOdds: async (parent, { sport }) => {
      const { data } = await axios(
        `https://api.the-odds-api.com/v4/sports/${sport}/odds?apiKey=${process.env.API_KEY}&regions=us&markets=h2h&dateFormat=iso&oddsFormat=decimal`
      );

      return data;
    },
    gameScores: async (parent, { sport }) => {
      const { data } = await axios(
        `https://api.the-odds-api.com/v4/sports/${sport}/scores?apiKey=${process.env.API_KEY}&daysFrom=1`
      );

      return data;
    },
    singleGameOdds: async (parent, { sport, eventId }) => {
      const { data } = await axios(
        `https://api.the-odds-api.com/v4/sports/${sport}/events/${eventId}/odds?apiKey=${process.env.API_KEY}&regions=us&markets=h2h&dateFormat=iso&oddsFormat=decimal`
      );

      return [data];
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
    logout: async (parent, args, { dataSources }) => {
      // Log the user out by deleting their authentication token
      await dataSources.usersAPI.deleteAuthToken();

      // Return a success message
      return { message: "Logged out successfully" };
    },
    updatePoints: async (_, { username, points }) => {
      try {
        console.log(username, points)
        const user = await User.findOne({ username: username });
        if (!user) {
          throw new Error(`User ${username} not found`);
        }

        user.points = points;
        await user.save();

        return user;
      } catch (error) {
        console.error(error);
      }
    },
  },
};

const signToken = ({ email, username, _id }) => {
  const payload = { email, username, _id };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
};

module.exports = resolvers;
