const { Class } = require('../models');

const classData = [
    {
        "class_name": "Artificer",
        "available_subclasses": [1,2,3,4]
    },
    {
        "class_name": "Bard",
        "available_subclasses": [14,15,16,17,18,19,20,21]
    },
    {
        "class_name": "Barbarian",
        "available_subclasses": [5,6,7,8,9,10,11,12,13]
    },
    {
        "class_name": "Cleric",
        "available_subclasses": [22,23,24,25,26,27,28,29,30,31,32,33,34,35]
    },
    {
        "class_name": "Druid",
        "available_subclasses": [36,37,38,39,40,41,42]
    },
    {
        "class_name": "Fighter",
        "available_subclasses": [43,44,45,46,47,48,49,50,51,52]
    },
    {
        "class_name": "Monk",
        "available_subclasses": [52,53,54,55,56,57,58,59,60,61]
    },
    {
        "class_name": "Paladin",
        "available_subclasses": [62,63,64,65,66,67,68,69,70]
    },
    {
        "class_name": "Ranger",
        "available_subclasses": [71,72,73,74,75,76,77,78]
    },
    {
        "class_name": "Rogue",
        "available_subclasses":[79,80,81,82,83,84,85,86,87]
    },
    {
        "class_name": "Sorcerer",
        "available_subclasses":[88,89,90,91,92,93,94,95]
    },
    {
        "class_name": "Warlock",
        "available_subclasses":[96,97,98,99,100,101,102,103,104]
    },
    {
        "class_name": "Wizard",
        "available_subclasses":[105,106,107,108,109,110,111,112,113,114,115,116,117]
    }
];

const seedClasses = () => Class.bulkCreate(classData);

module.exports = seedClasses;