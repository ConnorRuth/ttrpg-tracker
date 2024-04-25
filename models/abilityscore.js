const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class AbilityScore extends Model {
}

AbilityScore.init(
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
     ability_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'ability',
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
        modelName: 'abilityscore',
        underscored: true,
    }
)
module.exports = AbilityScore;