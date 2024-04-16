const router = require('express').Router();
const Ability = require('../models/abilities');
const Abilityscore = require('../models/abilityscore');
const Race = require('../models/race');
const Savescore = require('../models/savescores');
const Skill = require('../models/skill');
const Skillscore = require('../models/skillscore');
const Spellsave = require('../models/spellsaves');
const Property = require('../models/property');
const Character = require('../models/character');
const Class = require('../models/class');
const Subclass = require('../models/subclass');
const User = require('../models/user');
const Weapons = require('../models/weapons');
const withAuth = require('../utils/auth');

//to prevent users not logged in from viewing homepage
router.get('/', withAuth, async (req, res) => {
    try {
        const userData = await User.findAll({
            attributes: { exclude: ['password'] },
            order: [['name', 'ASC']],
        });

        const users = userData.map((user) => user.get ({ plain: true }));

        res.render('home', {
            users,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

//if session already exists, redirect to homepage
router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('home');
        return;
    }

    res.render('login');
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

router.get('/home', withAuth, async (req, res) => {
    try {
        const charData = await Character.findAll({
            include: [{ model: Race}, {model: Class}, {model: Ability, through: Abilityscore}, {model: Skill, through: Skillscore}, {model: Weapons}],
        });


        const char = charData.map(char => char.get({ plain: true }));
        res.render('home', {
            ...char,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/signup', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('home');
        return;
    }

    res.render('signup');
});
module.exports = router;