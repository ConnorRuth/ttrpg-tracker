const router = require('express').Router();

const characterRoutes = require('./character-routes');
const controlRoutes = require('./characterController');
const userRoutes = require('./user-routes');

router.use('/character', characterRoutes);
router.use('/character/abilities', characterRoutes);
router.use('/control', controlRoutes);
router.use('/user', userRoutes);

module.exports = router;