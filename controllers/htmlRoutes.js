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
const CharClass = require('../models/class');
const Subclass = require('../models/subclass');
const User = require('../models/user');
const Weapons = require('../models/weapons');
const withAuth = require('../utils/auth');
const WeaponProp = require('../models/proptoweapon');

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

router.get('/character/:id', withAuth, async (req, res) => {
    try {
        const charData = await Character.findByPk(req.params.id , {
            include: [{ model: Race}, {model: CharClass},{model: Ability, through:Abilityscore}],
        });
        const weapons = await Weapons.findAll({raw:true});
        const abilities = await Ability.findAll({ raw: true});
    
         const abScores = await Abilityscore.findAll({ 
            raw: true,
             where: { character_id: req.params.id}
         });
         const skiScores = await Skillscore.findAll({
            raw:true,
            where: { character_id: req.params.id}
        });

        const skills = await  Skill.findAll({raw:true
        });
        const char = charData.get({ plain: true });
        console.log(char);
console.log(abilities);
        res.render('character', {
            ...char,
            skiScores,
            weapons,
            abScores,
            abilities,
            skills,
            logged_in: true
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.get('/home', withAuth, async (req, res) => {
    try {
        const charData = await Character.findAll({
            include: [{ model: Race}, {model: CharClass}],
        });
        const availClass = await CharClass.findAll({raw: true});
        
        const races = await Race.findAll({raw: true}); 
        const characters = charData.map(char => char.get({ plain: true }));
        
        res.render('home', {
            races,
            availClass,
            characters,
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