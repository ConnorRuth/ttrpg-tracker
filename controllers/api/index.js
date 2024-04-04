const router = require('express').Router();
const htmlRoutes = require('./htmlRoutes');
const characterRoutes = require('./character-routes');
const userRoutes = require('./user-routes');


router.use('/character', characterRoutes);
router.use('/user', userRoutes);

module.exports = router;