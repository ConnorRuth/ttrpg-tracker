const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
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
    associated_class: {
        type: DataTypes.INTEGER,
        references: {
            model: 'charclass',
            key: 'id',
        }
    }
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'subclass',
    }
)

module.exports = Subclass;