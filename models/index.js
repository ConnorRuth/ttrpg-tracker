const User = require('./User');
const Character = require('./Character');
const Class = require('./Class');
const Subclass = require('./Subclass');
const Weapon = require('./Weapons');


User.hasMany(Character, {
    foreignKey: 'character_id',
  });
  
Character.belongsTo(User, {
    foreignKey: '',
  });

Character.hasMany(Weapon, {
    foreignKey: '',
});

Character.hasOne(Class, {
    foreignKey: '',
});

Character.hasOne(Subclass, {
    foreignKey: '',
});
