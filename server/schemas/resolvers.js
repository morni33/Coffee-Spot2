const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

// Mock data for the shops
const shops = [
  { id: 1, name: 'Blackrock Coffee Bar' },
  { id: 2, name: 'Starbucks' },
  { id: 3, name: 'Dutch Bros. Coffee' },
  { id: 4, name: 'Dunkin' },
  { id: 5, name: 'Bosa Donuts' },
  // Add more shops here
];

const resolvers = {
  Query: {
    // Existing queries
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('Not logged in');
    },
    // Added shops query
    shops: () => {
      return shops;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      try {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error(`Error adding user: ${error.message}`);
        throw new Error('Error adding user');
      }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);
      return { token, user };
    },
    addThought: async (parent, { thoughtText }, context) => {
      if (context.user) {
        try {
          const thought = await Thought.create({
            thoughtText,
            thoughtAuthor: context.user.username,
          });

          await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { thoughts: thought._id } }
          );

          return thought;
        } catch (error) {
          console.error(`Error adding thought: ${error.message}`);
          throw new Error('Error adding thought');
        }
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    // Include other mutations as needed
  },
};

module.exports = resolvers;
