const User = require('./user');
const Character = require('./character');
const Class = require('./class');
const Subclass = require('./subclass');
const Weapon = require('./weapons');


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
