const  Weapon  = require('../models/weapons');

const weaponData =[
    {
        "name": "Battleaxe",
        "damage": "1d8",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false
    },
    {
        "name": "Flail",
        "damage": "1d8",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Glaive",
        "damage": "1d10",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false
    },
    {
        "name": "Greataxe",
        "damage": "1d12",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "7 lb",
        "is_magical": false
    },
    {
        "name": "Greatsword",
        "damage": "2d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false
    },
    {
        "name": "Halberd",
        "damage": "1d10",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "7 lb",
        "is_magical": false
    },
    {
        "name": "Lance",
        "damage": "1d12",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false
    },
    {
        "name": "Longsword",
        "damage": "1d8",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false
    },
    {
        "name": "Maul",
        "damage": "2d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "10 lb",
        "is_magical": false
    },
    {
        "name": "Rapier",
        "damage": "1d8",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Scimitar",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false
    },
    {
        "name": "Shortsword",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false
    },
    {
        "name": "Trident",
        "damage": "1d12",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false
    },
    {
        "name": "Warhammer",
        "damage": "1d12",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Whip",
        "damage": "1d4",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Crossbow,hand",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false
    },
    {
        "name": "Crossbow, heavy",
        "damage": "1d10",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "18 lb",
        "is_magical": false
    },
    {
        "name": "Longbow",
        "damage": "1d8",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Club",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Dagger",
        "damage": "1d4",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "1 lb",
        "is_magical": false
    },
    {
        "name": "Greatclub",
        "damage": "1d8",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "10 lb",
        "is_magical": false
    },
    {
        "name": "Handaxe",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Javelin",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Light Hammer",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    }, 
    {
        "name": "Mace",
        "damage": "1d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false
    },
    {
        "name": "Quarterstaff",
        "damage": "1d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false
    },
    {
        "name": "Sickle",
        "damage": "1d4",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Spear",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false
    },
    {
        "name": "Crossbow, light",
        "damage":"1d8",
        "damage_type": "Piercing",
        "Description":null,
        "weight":"5 lb",
        "is_magical":false
    },
    {
        "name": "Shortbow",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false
    },
    {
        "name": "Sling",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "1 lb",
        "is_magical": false
    }
];

const seedWeapons = () => Weapon.bulkCreate(weaponData);

module.exports = seedWeapons;