const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const characterRoutes = require('./character-routes');
const userRoutes = require('./user-routes');
const controlRoutes = require('./characterController');

router.use('/api', apiRoutes);
router.use('/html', htmlRoutes);
router.use('/character', characterRoutes);
router.use('/user', userRoutes);
router.use('/control', controlRoutes);

module.exports = router;