const { Model, DataTypes } = require('sequelize');

class Class extends Model {
}

Class.init(
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
    modelName: 'class',
    }
)