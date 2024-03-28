const { Model, DataTypes } = require('sequelize');

class Skillscore extends Model {
}

Skillscore.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    character_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'character',
            key: 'id',
        }
    },
    spellsave_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'skill',
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
    freezeTableName: false,
    modelName: 'skillscore',
    }
)
module.exports = Skillscore;




