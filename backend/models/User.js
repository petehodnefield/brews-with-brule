const {Model, DataTypes} = require('sequelize')
const  sequelize = require('../config/connection')
const bcrypt = require('bcrypt');
const saltRounds = 10;

class User extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
      }
}
User.init(
    {
     id:  { 
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                max: 20,
                min: 4
            }
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            max: 30,
            min: 4
        }  
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    photo: {
        type: DataTypes.STRING
    },
    bio: {
        type: DataTypes.STRING,
        validate: {
            max: 180
        }
    },
    // Likes: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'likes',
    //         key: 'id'
    //     }
    // },
    // Posts: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'posts',
    //         key: 'id'
    //     }
    // }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await bcrypt.hash(newUserData.password, saltRounds)
                newUserData.email = await bcrypt.hash(newUserData.email, saltRounds)
                return newUserData
            },

            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await bcrypt.hash(updatedUserData.password, saltRounds)
                updatedUserData.email = await bcrypt.hash(updatedUserData.email, saltRounds)
                return updatedUserData
            },
        },
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }  
)
module.exports = User;