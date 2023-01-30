const User = require('./User')
const Posts = require('./Posts')

// User
User.hasMany(Posts, {
    foreignKey: 'user_id'
})

// Posts
Posts.belongsTo(User, {
    foreignKey: 'post_id',
  });

module.exports = {User, Posts};