const Race = require('../models/race');


const raceData = [
    {
        "race_name": "Dragonborn"
    },
    {
        "race_name": "Dwarf"
    },
    {
        "race_name": "Elf"
    },
    {
        "race_name": "Gnome"
    },
    {
        "race_name": "Half-Elf"
    },
    {
        "race_name": "Half-Orc"
    },
    {
        "race_name": "Orc"
    },
    {
        "race_name": "Halfling"
    },
    {
        "race_name": "Human"
    },
    {
        "race_name": "Tiefling"
    },
    {
        "race_name": "Kobold"
    },
    {
        "race_name": "Lizardfolk"
    },
    {
        "race_name": "Goblin"
    }
];

const seedRaces = () => Race.bulkCreate(raceData);

module.exports = seedRaces;