const { Model, DataTypes } = require('sequelize');

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
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'weapon',
    }
)