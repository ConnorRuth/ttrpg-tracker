const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Spellsave extends Model {
}

Spellsave.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        save_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        freezeTableName: true,
        modelName: 'spellsave',
        underscored: true,
    }
)
module.exports = Spellsave;