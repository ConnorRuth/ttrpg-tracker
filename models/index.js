const User = require('./user');
const Character = require('./character');
const Class = require('./class');
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

Character.hasOne(Class, {
    foreignKey: 'class_id',
});

Character.hasOne(Subclass, {
    foreignKey: 'subclass_id',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
  foreignKey: 'skill_id', 
  onDelete: 'cascade',
});

Ability.belongsToMany(Character, {
  through: Abilityscore,
  foreignKey: 'ability_id',
  onDelete: 'cascade',
});
Character.hasOne(Race, {
  foreignKey: 'race_id',
});
Character.hasMany(Spellsave, {
  through: Savescore,
  foreignKey: 'savescore_id',
  onDelete: 'cascade',
});
Weapon.belongsToMany(Property, {
  through: WeaponProp,
  foreignKey: 'property_id',
  onDelete: 'cascade',
});
Property.belongsToMany(Weapon, {
  through: WeaponProp,
  foreignKey: 'weapon_id',
  onDelete: 'cascade',
});
Skill.belongsToMany(Character, {
  through: Skillscore,
  foreignKey:'skill_id',
  onDelete: 'cascade',
});
Subclass.belongsTo(Class, {
  foreignKey:'class_id',
});
Class.hasMany(Subclass,{
  foreignKey:'class_id',
});
