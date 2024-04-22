const User = require('./user');
const Character = require('./character');
const CharClass = require('./class');
const Subclass = require('./subclass');
const Weapon = require('./weapons');
const Property = require('./property');
const Skill = require('./skill');
const Ability = require('./abilities');
const Race = require('./race');
const Skillscore = require('./skillscore');
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

Character.belongsTo(CharClass, {
    foreignKey: 'charclass_id',
});

Character.hasOne(Subclass, {
    foreignKey: 'subclass_id',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
});

Character.belongsToMany(Skill, {
  through: Skillscore,
});
Ability.belongsToMany(Character, {
  through: Abilityscore,
});
Character.belongsToMany(Ability, {
  through: Abilityscore,
});
Character.belongsTo(Race, {
  foreignKey: 'race_id',
});
Race.hasMany(Character,{
  foreignKey: 'race_id'
})
Spellsave.belongsToMany(Character, {
  through: Savescore,
});
Weapon.belongsToMany(Property, {
  through: WeaponProp,
  
});
Property.belongsToMany(Weapon, {
  through: WeaponProp,
});

Subclass.belongsTo(CharClass, {
  foreignKey:'charclass_id',
});
CharClass.hasMany(Subclass,{
  foreignKey:'charclass_id',
});
module.exports = { User, Character, CharClass, Subclass,  Weapon, Property, Skill,  Ability, Race, Skillscore, Spellsave, Abilityscore,  WeaponProp, Savescore }