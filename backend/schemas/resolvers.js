const { User, Thought, Post } = require('../models');
const {AuthenticationError} = require('apollo-server-express');
const Brewerey = require('../models/Brewery');


const resolvers = {
  Query: {
    me: async(parent, args, context) => {
 
        const userData = await User.findOne({_id: context.user._id})
          .select('-__v -password')
          .populate('thoughts')
          .populate('friends')

          return userData
      
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('posts')
        .populate('friends');
    },
    user: async (parent, { id }) => {
      return User.findOne({ id })
        .select('-__v -password')
        .populate('friends')
        .populate('posts');
    },
    
    posts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Post.find(params).sort({ createdAt: -1 });
    },
    post: async (parent, { _id }) => {
      return Post.findOne({ _id });
    },
    breweries: async () => {
      return Brewerey.find()
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)

      return  user
    },
    addBrewery: async (parent, args) => {
      const brewery = await Brewerey.create(args)

      return  brewery
    },
    updateUser: async (parent, args, context) => {
      console.log(args._id)

        const updatedUser = await User.findOneAndUpdate(
          {_id: args._id},
          {
            bio: args.bio
          },
        )
        return updatedUser
      },
    // login: async (parent, { email, password }) => {
    //   const user = await User.findOne({ email });
    
    
    //   const correctPw = await user.isCorrectPassword(password);
    
    //   if (!correctPw) {
    //     throw new AuthenticationError('Incorrect credentials');
    //   }
      
     
    //   return  user
    // },
    // addPost: async (parent, args, context) => {
    //     const thought = await Post.create({ ...args, username: context.user.username });
    
    //     await User.findByIdAndUpdate(
    //       { _id: context.user._id },
    //       { $push: { posts: post._id } },
    //       { new: true }
    //     );
    
    //     return post;
      
    
    //   throw new AuthenticationError('You need to be logged in!');
    // },
    // addReaction: async (parent, {thoughtId, reactionBody}, context) => {
    //   if(context.user) {
    //     const updatedThought = await Thought.findOneAndUpdate(
    //       {_id: thoughtId},
    //       {$push: {reactions: {reactionBody, username: context.user.username}}},
    //       {new: true, runValidators: true}
    //     )
    //     return updatedThought
    //   }
    //   throw new AuthenticationError('You need to be logged in!')
    // },
    addFriend: async (parent, args) => {
        const updatedUser = await User.findOneAndUpdate(
          {_id: args._id},
          {$addToSet: {friends: args.friendId}},
          {new: true}
        ).populate('friends')
          const secondUser = await User.findOneAndUpdate(
            {_id: args.friendId},
            {$addToSet: {friends: args._id}},
            {new: true}
          ).populate('friends')

        return updatedUser, secondUser
    },
    removeFriend: async (parent, args) => {
        const updatedUser = await User.findOneAndUpdate(
          {_id: args._id},
          {$pull: {friends: args.friendId}},
          {new: true}
        ).populate('friends')
          const secondUser = await User.findOneAndUpdate(
            {_id: args.friendId},
            {$pull: {friends: args._id}},
            {new: true}
          ).populate('friends')

        return updatedUser, secondUser
    },
  }
};

module.exports = resolvers;