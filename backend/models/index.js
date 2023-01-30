const User = require('./User')
const Posts = require('./Posts')
const Friend = require('./Friend')

// User
User.hasMany(Posts, {
    foreignKey: 'user_id'
})
User.hasMany(Friend, {
    foreignKey: 'user_id'
})

// Friend
Friend.belongsTo(User, {
    foreignKey: 'user_id',
  });

// Posts
Posts.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = {User, Posts, Friend};