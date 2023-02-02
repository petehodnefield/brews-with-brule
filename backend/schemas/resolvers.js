const { User, Thought, Post } = require('../models');
const {AuthenticationError} = require('apollo-server-express')


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
    user: async (parent, { username }) => {
      return User.findOne({ username })
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
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)

      return  user
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
    // addFriend: async (parent, {friendId}, context) => {
    //   if(context.user) {
    //     const updatedUser = await User.findOneAndUpdate(
    //       {_id: context.user._id},
    //       {$addToSet: {friends: friendId}},
    //       {new: true}
    //     ).populate('friends')
    //     return updatedUser
    //   }
    //   throw new AuthenticationError("you must be logged in!")
    // }
  }
};

module.exports = resolvers;