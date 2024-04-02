const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Savescore extends Model {
}

Savescore.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     character_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'character',
            key: 'id',
        }
     },
     spellsave_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'spellsave',
            key: 'id',
        }
     },
     score: {
        type: DataTypes.INTEGER,
        allowNull: false,
     }
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'savescore',
    }
)
module.exports = Savescore;