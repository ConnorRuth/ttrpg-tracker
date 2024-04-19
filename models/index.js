const User = require('./user');
const Character = require('./character');
const CharClass = require('./class');
const Subclass = require('./subclass');
const Weapon = require('./weapons');
const Property = require('./property');
const Skill = require('./skill');
const Ability = require('./abilities');
const Race = require('./race');
const Skillscore = require('./skill');
const Spellsave = require('./savescores');
const Abilityscore = require('./abilityscore');
const WeaponProp = require('./proptoweapon');
const Savescore = require('./savescores');


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

Character.hasOne(CharClass, {
    foreignKey: 'charclass_id',
});

Character.hasOne(Subclass, {
    foreignKey: 'subclass_id',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
  foreignKey: 'skill_id', 
  onDelete: 'cascade',
});

Character.belongsToMany(Skill, {
  through: Skillscore,
  foreignKey: 'character_id', 
  onDelete: 'cascade',
});
Ability.belongsToMany(Character, {
  through: Abilityscore,
  foreignKey: 'ability_id',
  onDelete: 'cascade',
});
Character.belongsToMany(Ability, {
  through: Abilityscore,
  foreignKey: 'character_id',
  onDelete: 'cascade',
});
Character.belongsTo(Race, {
  foreignKey: 'race_id',
});
Race.hasMany(Character,{
  foreignKey: 'race_id'
})
Spellsave.belongsToMany(Character, {
  through: Savescore,
  foreignKey: 'savescore_id',
  onDelete: 'cascade',
});
Weapon.belongsToMany(Property, {
  through:{
    model: WeaponProp,
    unique: false
  },
  
});
Property.belongsToMany(Weapon, {
  through:{
    model: WeaponProp,
    unique: false
  },
});

Subclass.belongsTo(CharClass, {
  foreignKey:'charclass_id',
});
CharClass.hasMany(Subclass,{
  foreignKey:'charclass_id',
});
module.exports = { User, Character, CharClass, Subclass,  Weapon, Property, Skill,  Ability, Race, Skillscore, Spellsave, Abilityscore,  WeaponProp, Savescore }