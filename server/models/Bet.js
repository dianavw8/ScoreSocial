const mongoose = require('mongoose');

const betSchema = new mongoose.Schema({
  chosenTeam: {
    type: String,
    required: true,
  },
  betAmount: {
    type: Number,
    required: true,
  },
  singleGameOdds: {
    type: Object, // or String, if you're using a JSON string instead of an object
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: {
    type: String,
    required: true,
  },
});

const Bet = mongoose.model('Bet', betSchema);

module.exports = Bet;

