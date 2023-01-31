const {Model, DataTypes} = require('sequelize')
const  sequelize = require('../config/connection')


class Brewery extends Model {
   
}
Brewery.init(
    {
     id:  { 
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    taps: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hours: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    optionsAvailable: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rating: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    },
    {
        sequelize: sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'brewery'
    }  
)
module.exports = Brewery;