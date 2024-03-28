const { Model, DataTypes } = require('sequelize');

class Race extends Model {
}

Race.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     race_name: {
        type: DataTypes.STRING,
        allowNull: false,
    
     }
    },
    {
    sequelize,
    freezeTableName: false,
    modelName: 'race',
    }
)

module.exports = Race;