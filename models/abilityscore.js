const { Model, DataTypes } = require('sequelize');

class Abilityscore extends Model {
}

Abilityscore.init(
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
    }
)
module.exports = Abilityscore;