const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config.js');
class WeaponProp extends Model {
}

WeaponProp.init(
    {
     id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
     weapon_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'weapon',
            key: 'id',
        }
     },
     property_id: {
        type: DataTypes.INTEGER,
        reference: {
            model: 'property',
            key: 'id',
        }
     },
    },
    {
    sequelize,
    freezeTableName: true,
    modelName: 'Weaponprops',
    }
)
module.exports = WeaponProp;