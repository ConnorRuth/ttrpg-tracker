const router = require('express').Router();
const apiRoutes = require('./apiRoutes');
const htmlRoutes = require('./htmlRoutes');
const characterRoutes = require('./character-routes');
const userRoutes = require('./user-routes');

router.use('/api', apiRoutes);
router.use('/html', htmlRoutes);
router.use('/character', characterRoutes);
router.use('/user', userRoutes);

module.exports = router;