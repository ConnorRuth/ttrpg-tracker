const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Character = require('../../models/character');
const User = require('../../models/user');

//get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Character }],
        });
        
        const users = userData.map((user) => 
            user.get({ plain: true })
        );

        res.render('/user', {
            users,
            loggedIn: req.session.loggedIn,
        });
    }   catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//get one user
router.get('/:id', withAuth, async (req, res) => {
    //find a single product by its `id`
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Character }],
    });

    const user = userData.get({ plain: true });
    res.render('/user', { user, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    //update user by `id` value
    try {
        const userData = await User.update(req.body, {
            where: {
                id: req.params.id,
            },
        });

        if (!userData) {
            res.status(404).json({ message: 'No User found with this id.'});
            return;
        }

        res.status(200).json(userData);
        res.render('/user', { user, loggedIn: req.session.loggedIn });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    //delete a user by its `id` value
    try {
        const userData = await User.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!userData) {
            res.status(404).json(userData);
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }

    res.render('/login');
});

module.exports = router;