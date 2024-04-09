const router = require('express').Router();
const User = require('../models/user');
const withAuth = require('../utils/auth');

//to prevent users not logged in from viewing homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((user) => user.get ({ plain: true }));

        res.render('/', {
            users,
            logged_in: true,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/', withAuth, async (req, res) => {
    try{
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            //include: //want to include all the models used in home handlebar
        });

        const user = userData.get({ plain: true });

        res.render('/', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/character', withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.session.user_id, {
            attributes: { exclude: ['password'] },
            //include: //want to include models used in character handlebar
        });
        const user = userData.get({ plain: true });

        res.render('character', {
            ...user,
            logged_in: true
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    try {
        res.render('signup');
        return;   
    } catch (err) {
        res.status(500).json(err);
    }
});

//if session already exists, redirect to homepage
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;