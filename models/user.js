const { Model, DataTypes } = require('sequelize');

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
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'user',
    }
)