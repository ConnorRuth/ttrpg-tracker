const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Property extends Model {
}
Property.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'property',
    }
)

module.exports = Property;