const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Character extends Model {
}

Character.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    level: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    class_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'class',
            key: 'id',
        }
    },
    race_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'race',
            key: 'id',
        }
    },
    maxHP: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    currentHP: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'user',
            key: 'id',
        }
    },

    
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'class',
    }
)

module.exports = Character;
