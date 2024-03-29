const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Subclass extends Model {
}

Subclass.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    subclass_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
    sequelize,
    freezeTableName: false,
    modelName: 'subclass',
    }
)

module.exports = Subclass;