const router = require('express').Router();

const characterRoutes = require('./character-routes');
const userRoutes = require('./user-routes');
const controlRoutes = require('./characterController');
const homeRoutes = require('./htmlRoutes');

router.use('/character', characterRoutes);
router.use('/user', userRoutes);
router.use('/control', controlRoutes);
router.use('/home', homeRoutes);

module.exports = router;