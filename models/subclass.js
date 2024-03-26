const { Model, DataTypes } = require('sequelize');

class Subclass extends Model {
}

Subclass.init(
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
    modelName: 'subclass',
    }
)