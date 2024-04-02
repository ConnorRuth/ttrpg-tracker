const  Skill  = require('../models/skill');


const skillData =[
    {
        "skill_name": "Acrobatics"
    },
    {
        "skill_name": "Animal Handling"
    },
    {
        "skill_name": "Arcana"
    },
    {
        "skill_name": "Athletics"
    },
    {
        "skill_name": "Deception"
    },
    {
        "skill_name": "History"
    },
    {
        "skill_name": "Insight"
    },
    {
        "skill_name": "Intimidation"
    },
    {
        "skill_name": "Investigation"
    },
    {
        "skill_name": "Medicine"
    },
    {
        "skill_name": "Nature"
    },
    {
        "skill_name": "Perception"
    },
    {
        "skill_name": "Performance"
    },
    {
        "skill_name": "Persuasion"
    },
    {
        "skill_name": "Religion"
    },
    {
        "skill_name": "Sleight of Hand"
    },
    {
        "skill_name": "Stealth"
    },
    {
        "skill_name": "Survival"
    }
];

const seedSkills= () => Skill.bulkCreate(skillData);

module.exports = seedSkills;