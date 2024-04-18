const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class CharClass extends Model {
}

CharClass.init(
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
    },
},
    {
    sequelize,
    freezeTableName: true,
    modelName: 'charclass',
    }
)
module.exports = CharClass;
