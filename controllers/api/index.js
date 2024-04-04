const router = require('express').Router();

const characterRoutes = require('./character-routes');
const userRoutes = require('./user-routes');
const controlRoutes = require('./characterController');

router.use('/character', characterRoutes);
router.use('/user', userRoutes);
router.use('/control', controlRoutes);

module.exports = router;