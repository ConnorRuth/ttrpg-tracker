const { Model, DataTypes } = require('sequelize');

class Property extends Model {
}
Property.init(
    {
    id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
         },
    name:{
        type: DataTypes.STRING,
        allowNull: false,
    },
},
    {
    sequelize,
    freezeTableName: false,
    modelName: 'weapon',
    }
)

module.exports = Property;