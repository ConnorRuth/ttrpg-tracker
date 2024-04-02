const seedAbilities = require('./abilityData');
const seedClasses = require('./classData');
const seedSubclasses = require('./subclassData');
const seedSkills = require('./skillData');
const seedWeapons = require('./weaponData');
const seedProperties = require('./propertyData');
const seedRaces = require('./raceData');
const seedWeaponProps = require('./propWeapon');

const sequelize = require('../config/config');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedRaces();
    console.log('\n----- RACES SEEDED -----\n');
  
    await seedAbilities();
    console.log('\n----- ABILITIES SEEDED -----\n');
  
    await seedSkills();
    console.log('\n----- SKILLS SEEDED -----\n');

    await seedClasses();
    console.log('\n----- CLASSES SEEDED -----\n');

    await seedSubclasses();
    console.log('\n----- SUBCLASSES SEEDED -----\n');

    await seedProperties();
    console.log('\n----- PROPERTIES SEEDED -----\n');

    await seedWeapons();
    console.log('\n----- WEAPONS SEEDED -----\n');

    await seedWeaponProps();
    console.log('\n----- WEAPONPROPERTIES SEEDED -----\n');

    process.exit(0);
  };
  
  seedAll();