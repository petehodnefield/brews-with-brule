const User = require('./User')
const Posts = require('./Posts')

// User
User.hasMany(Posts, {
    foreignKey: 'user_id'
})

// Posts
Posts.belongsTo(User, {
    foreignKey: 'user_id',
  });

module.exports = {User, Posts};