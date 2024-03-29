const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class User extends Model {
}

User.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },  
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
            },
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [8],
        },
    },
    },
    {
    sequelize,
    freezeTableName: false,
    modelName: 'user',
    }
)

module.exports = User;