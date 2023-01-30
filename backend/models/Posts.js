const {Model, DataTypes} = require('sequelize')
const  sequelize = require('../config/connection')


class Posts extends Model {
   
}
Posts.init(
    {
     id:  { 
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 60,
                min: 4
            }
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            max: 30,
            min: 4
        }  
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
           validate: {
            max: 280,
            min: 4
        }  
    },
    photo: {
        type: DataTypes.STRING
    }
    // User: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'user',
    //         key: 'id'
    //     }
    // },

    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'posts'
    }  
)
module.exports = Posts;