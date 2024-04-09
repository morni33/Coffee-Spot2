const { User, Thought } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    // Existing query resolvers...

    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('thoughts');
      }
      throw new AuthenticationError('Not logged in');
    },

    // Adding the shops query resolver
    shops: async () => {
      // This returns a static list of shops for the sake of demonstration.
      // You should replace this with dynamic data fetching logic as per your application's requirements.
      return [
        { id: '1', name: 'Futuro' },
        { id: '2', name: 'Space Coffee' },
        { id: '3', name: 'Lux Central' },
        { id: '4', name: 'Aftermarket' },
      ];
    },
  },

  Mutation: {
    // User addition mutation
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

    // User login mutation
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

    // Thought addition mutation
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

    // Other mutations...
  },

  // Any additional resolvers (e.g., for nested types) would go here
};

module.exports = resolvers;
