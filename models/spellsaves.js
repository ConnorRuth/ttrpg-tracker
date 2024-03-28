const { Model, DataTypes } = require('sequelize');

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
    }
)
module.exports = Spellsave;