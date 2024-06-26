const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Weapon extends Model {
}

Weapon.init(
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
        damage: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        damage_type: {
            type: DataTypes.STRING,
            allownull: false,
        },
        descriction: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        weight: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_magical: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'weapon',
    }
)

module.exports = Weapon;