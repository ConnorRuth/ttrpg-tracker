const { Weapon } = require('../models');

const weaponData =[
    {
        "name": "Battleaxe",
        "damage": "1d8",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false,
        "properties": 11
    },
    {
        "name": "Flail",
        "damage": "1d8",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": null
    },
    {
        "name": "Glaive",
        "damage": "1d10",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false,
        "properties": [4, 12, 14]
    },
    {
        "name": "Greataxe",
        "damage": "1d12",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "7 lb",
        "is_magical": false,
        "properties": [4, 14]
    },
    {
        "name": "Greatsword",
        "damage": "2d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false,
        "properties": [4, 14]
    },
    {
        "name": "Halberd",
        "damage": "1d10",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "7 lb",
        "is_magical": false,
        "properties": [4, 12, 14]
    },
    {
        "name": "Lance",
        "damage": "1d12",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "6 lb",
        "is_magical": false,
        "properties": [4, 13]
    },
    {
        "name": "Longsword",
        "damage": "1d8",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false,
        "properties": 11
    },
    {
        "name": "Maul",
        "damage": "2d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "10 lb",
        "is_magical": false,
        "properties": [4, 14]
    },
    {
        "name": "Rapier",
        "damage": "1d8",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": 2
    },
    {
        "name": "Scimitar",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false,
        "properties": [1, 2]
    },
    {
        "name": "Shortsword",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false,
        "properties": [1, 2]
    },
    {
        "name": "Trident",
        "damage": "1d12",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false,
        "properties": [3, 6]
    },
    {
        "name": "Warhammer",
        "damage": "1d12",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": 11
    },
    {
        "name": "Whip",
        "damage": "1d4",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [1, 2]
    },
    {
        "name": "Crossbow,hand",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false,
        "properties": [7, 10, 1, 8]
    },
    {
        "name": "Crossbow, heavy",
        "damage": "1d10",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "18 lb",
        "is_magical": false,
        "properties": [7, 15, 14, 8, 4]
    },
    {
        "name": "Longbow",
        "damage": "1d8",
        "damage_type:": "Piecing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [7, 5, 14, 4]
    },
    {
        "name": "Club",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": 1
    },
    {
        "name": "Dagger",
        "damage": "1d4",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "1 lb",
        "is_magical": false,
        "properties": [1,2,3]
    },
    {
        "name": "Greatclub",
        "damage": "1d8",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "10 lb",
        "is_magical": false,
        "properties": 4
    },
    {
        "name": "Handaxe",
        "damage": "1d6",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [1, 3]
    },
    {
        "name": "Javelin",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [7, 16, 14, 4]
    },
    {
        "name": "Light Hammer",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [1, 3]
    }, 
    {
        "name": "Mace",
        "damage": "1d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false,
        "properties": []
    },
    {
        "name": "Quarterstaff",
        "damage": "1d6",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "4 lb",
        "is_magical": false,
        "properties": [6]
    },
    {
        "name": "Sickle",
        "damage": "1d4",
        "damage_type:": "Slashing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [1]
    },
    {
        "name": "Spear",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "3 lb",
        "is_magical": false,
        "properties": [3, 6]
    },
    {
        "name": "Crossbow, light",
        "damage":"1d8",
        "damage_type": "Piercing",
        "Description":null,
        "weight":"5 lb",
        "is_magical":false,
        "properties":[7,8,9,4]
    },
    {
        "name": "Shortbow",
        "damage": "1d6",
        "damage_type:": "Piercing",
        "Description": null,
        "weight": "2 lb",
        "is_magical": false,
        "properties": [7,9,4]
    },
    {
        "name": "Sling",
        "damage": "1d4",
        "damage_type:": "Bludgeoning",
        "Description": null,
        "weight": "1 lb",
        "is_magical": false,
        "properties": [7, 10]
    }
];

const seedWeapons = () => Weapon.bulkCreate(weaponData);

module.exports = seedWeapons;