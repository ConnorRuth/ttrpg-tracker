const  WeaponProp = require('../models/proptoweapon');


const WeaponPropData = [
    {
        "weapon_id": 1,
        "property_id": 11
    },
    {
        "weapon_id": 2,
        "property_id": null
    },
    {
        "weapon_id": 3,
        "property_id": 4
    },
    {
        "weapon_id": 3,
        "property_id": 12
    },
    {
        "weapon_id": 3,
        "property_id": 14
    },
    {
        "weapon_id": 4,
        "property_id": 4
    },
    {
        "weapon_id": 4,
        "property_id": 14
    },
    {
        "weapon_id": 5,
        "property_id": 4
    },
    {
        "weapon_id": 5,
        "property_id": 14
    },
    {
        "weapon_id": 6,
        "property_id": 4
    },
    {
        "weapon_id": 6,
        "property_id": 12
    },
    {
        "weapon_id": 6,
        "property_id": 14
    },
    {
        "weapon_id": 7,
        "property_id": 4
    },
    {
        "weapon_id": 7,
        "property_id": 13
    },
    {
        "weapon_id": 8,
        "property_id": 11
    },
    {
        "weapon_id": 9,
        "property_id": 4
    },
    {
        "weapon_id": 9,
        "property_id": 14
    },
    {
        "weapon_id": 10,
        "property_id": 2
    },
    {
        "weapon_id": 11,
        "property_id": 1
    },
    {
        "weapon_id": 11,
        "property_id": 2
    },
    {
        "weapon_id": 12,
        "property_id": 1
    },
    {
        "weapon_id": 12,
        "property_id": 2
    },
    {
        "weapon_id": 13,
        "property_id": 3
    },
    {
        "weapon_id": 13,
        "property_id": 6
    },
    {
        "weapon_id": 14,
        "property_id": 11
    },
    {
        "weapon_id": 15,
        "property_id": 1
    },
    {
        "weapon_id": 15,
        "property_id": 2
    },
    {
        "weapon_id": 16,
        "property_id": 1
    },
    {
        "weapon_id": 16,
        "property_id": 7
    },
    {
        "weapon_id": 16,
        "property_id": 8
    },
    {
        "weapon_id": 16,
        "property_id": 10
    },
    {
        "weapon_id": 17,
        "property_id": 4
    },
    {
        "weapon_id": 17,
        "property_id": 7
    },
    {
        "weapon_id": 17,
        "property_id": 8
    },
    {
        "weapon_id": 17,
        "property_id": 14
    },
    {
        "weapon_id": 17,
        "property_id": 15
    },
    {
        "weapon_id": 18,
        "property_id": 4
    },
    {
        "weapon_id": 18,
        "property_id": 5
    },
    {
        "weapon_id": 18,
        "property_id": 7
    },
    {
        "weapon_id": 18,
        "property_id": 14
    },
    {
        "weapon_id": 19,
        "property_id": 1
    },
    {
        "weapon_id": 20,
        "property_id": 1
    },
    {
        "weapon_id": 20,
        "property_id": 2
    },
    {
        "weapon_id": 20,
        "property_id": 3
    },
    {
        "weapon_id": 21,
        "property_id": 4
    },
    {
        "weapon_id": 22,
        "property_id": 1
    },
    {
        "weapon_id": 22,
        "property_id": 3
    },
    {
        "weapon_id": 23,
        "property_id": 4
    },
    {
        "weapon_id": 23,
        "property_id": 7
    },
    {
        "weapon_id": 23,
        "property_id": 14
    },
    {
        "weapon_id": 23,
        "property_id": 16
    },
    {
        "weapon_id": 24,
        "property_id": 1
    },
    {
        "weapon_id": 24,
        "property_id": 3
    },
    {
        "weapon_id": 25,
        "property_id": null
    },
    {
        "weapon_id": 26,
        "property_id": 6
    },
    {
        "weapon_id": 27,
        "property_id": 1
    },
    {
        "weapon_id": 28,
        "property_id": 3
    },
    {
        "weapon_id": 28,
        "property_id": 6
    },
    {
        "weapon_id": 29,
        "property_id": 4
    },
    {
        "weapon_id": 29,
        "property_id": 7
    },
    {
        "weapon_id": 29,
        "property_id": 8
    },
    {
        "weapon_id": 29,
        "property_id": 9
    },
    {
        "weapon_id": 30,
        "property_id": 4
    },
    {
        "weapon_id": 30,
        "property_id": 7
    },
    {
        "weapon_id": 30,
        "property_id": 9
    },
    {
        "weapon_id": 31,
        "property_id": 7
    },
    {
        "weapon_id": 30,
        "property_id": 10
    },
];

const seedWeaponProps = () => WeaponProp.bulkCreate(WeaponPropData);

module.exports = seedWeaponProps;