const { Ability } = require('../models');

const abilityData = [
    {
        "Ability_name": "Strength"
    },
    {
        "Ability_name": "Dexterity"
    },
    {
        "Ability_name": "Constitution"
    },
    {
        "Ability_name": "Intelligence"
    },
    {
        "Ability_name": "Wisdom"
    },
    {
        "Ability_name": "Charisma"
    }
];

const seedAbilities = () => Ability.bulkCreate(abilityData);

module.exports = seedAbilities;