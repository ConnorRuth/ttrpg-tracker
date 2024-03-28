const { Model, DataTypes } = require('sequelize');

class Ability extends Model {
}

Ability.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     Ability_name: {
        type: DataTypes.STRING,
        allowNull: false,
     },

    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'ability',
    }
)
module.exports = Ability;