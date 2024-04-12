const router = require('express').Router();

const characterRoutes = require('./character-routes');
const controlRoutes = require('./characterController');
<<<<<<< HEAD

=======
const userRoutes = require('./user-routes');
>>>>>>> 66d6bab6fe065a0af736b01dedb97e87e79bb91b

router.use('/character', characterRoutes);
router.use('/control', controlRoutes);
<<<<<<< HEAD

=======
router.use('/user', userRoutes);
>>>>>>> 66d6bab6fe065a0af736b01dedb97e87e79bb91b

module.exports = router;