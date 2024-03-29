const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class Skill extends Model {
}

Skill.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     skill_name: {
        type: DataTypes.STRING,
        allowNull: false,
     }
    },
    {
    sequelize,
    freezeTableName: false,
    modelName: 'skill',
    }
)
module.exports = Skill;