const User = require('./user');
const Character = require('./character');
const Class = require('./class');
const Subclass = require('./subclass');
const Weapon = require('./weapons');
const Property = require('./weapon_prop');
const Skill = require('./skill');
const Ability = require('./abilities');
const Race = require('./race');
const Skillscore = require('./skill');
const Spellsave = require('./savescores');
const Abilityscore = require('./abilityscore');
User.hasMany(Character, {
    foreignKey: 'character_id',
    onDelete: 'cascade',
  });
  
Character.belongsTo(User, {
    foreignKey: 'character_id',
  });

Character.hasMany(Weapon, {
    foreignKey: 'weapon_id',
});

Character.hasOne(Class, {
    foreignKey: 'class_id',
});

Character.hasOne(Subclass, {
    foreignKey: 'subclass_id',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
  foreignKey: 'skill_id', 
});

Character.hasMany(Ability, {
  through: Abilityscore,
  foreignKey: 'ability_id',
});
Character.hasOne(Race, {
  foreignKey: 'race_id',
});
Character.hasMany(Spellsave, {
  foreignKey: 'savescore_id',
});
Weapon.hasMany(Property, {
  foreignKey: 'property_id',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
  foreignKey:'product_id',
});
