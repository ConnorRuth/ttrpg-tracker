const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Class extends Model {
}

Class.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     class_name: {
        type: DataTypes.STRING,
        allowNull: false,
    
     }
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'class',
    }
)
module.exports = Class;
