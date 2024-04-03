const  Property  = require('../models/property');


const propertyData = [
    {
        "name": "Light"
    },
    {
        "name": "Finesse"
    },
    {
        "name": "Thrown(20/60)"
    },
    {
        "name": "Two-handed"
    },
    {
        "name": "Range (150/600)"
    },
    {
        "name": "Versatile(1d8)"
    },
    {
        "name": "Ammunition"
    },
    {
        "name": "Loading"
    },
    {
        "name": "Range(80/320)"
    },
    {
        "name": "Range(30/120)"
    },
    {
        "name": "Versatile(1d10)"
    },
    {
        "name": "Reach"
    },
    {
        "name": "Special"
    },
    {
        "name": "Heavy"
    },
    {
        "name": "Range(100/400)"
    }
];

const seedProperties = () => Property.bulkCreate(propertyData);

module.exports = seedProperties;