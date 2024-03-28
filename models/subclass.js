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
    subclass_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    },
    {
    sequelize,
    freezeTableName: false,
    modelName: 'subclass',
    }
)

module.exports = Subclass;