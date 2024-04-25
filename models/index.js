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
const AbilityScore = require('./abilityscore');
const WeaponProp = require('./proptoweapon');
const Savescore = require('./savescores');


User.hasMany(Character, {
  foreignKey: 'character_id',
  onDelete: 'cascade',
});
  
Character.belongsTo(User, {
  foreignKey: 'character_id',
});

Character.belongsTo(CharClass, {
  foreignKey: 'charclass_id',
});

Character.hasOne(Subclass, {
  foreignKey: 'subclass_id',
});

Skill.belongsToMany(Character, {
  through: {
    model: Skillscore,
    unique: false
  },
});

Character.belongsToMany(Skill, {
  through: {
    model: Skillscore,
    unique: false
  },
});

Character.hasOne(Race, {
  foreignKey: 'race_id',
});

Race.hasMany(Character,{
  foreignKey: 'race_id',
  onDelete: 'cascade',
})

Spellsave.belongsToMany(Character, {
  through: {
    model: Savescore,
    unique:false
  },
});

Weapon.belongsToMany(Property, {
  through: {
    model: WeaponProp,
    unique: false
  },
});

Property.belongsToMany(Weapon, {
  through: {
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

Ability.belongsToMany(Character, {
  through: {
    model: AbilityScore,
    unique: false
  }
});

Character.belongsToMany(Ability, {
  through: {
    model: AbilityScore,
    unique: false
  }
});

//User.belongsToMany(Profile, { through: Abilityscore });
//Profile.belongsToMany(User, { through: Abilityscore });
// Character.hasMany(Abilityscore);
// Abilityscore.belongsTo(Character);
// Ability.hasMany(Abilityscore);
// Abilityscore.belongsTo(Ability);


module.exports = { User, Character, CharClass, Subclass,  Weapon, Property, Skill,  Ability, Race, Skillscore, Spellsave, AbilityScore,  WeaponProp, Savescore }