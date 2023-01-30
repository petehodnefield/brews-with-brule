const {Model, DataTypes} = require('sequelize')
const  sequelize = require('../config/connection')


class Friend extends Model {
   
}
Friend.init(
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
        validate: {
            max: 20,
            min: 4
        }
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id'
        }
    },

    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'friend'
    }  
)
module.exports = Friend;