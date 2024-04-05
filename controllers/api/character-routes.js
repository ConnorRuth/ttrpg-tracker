const router = require('express').Router();
const withAuth = require('../../utils/auth');
const Ability = require('../../models/abilities');
const Abilityscore = require('../../models/abilityscore');
const Race = require('../../models/race');
const Savescore = require('../../models/savescores');
const Skill = require('../../models/skill');
const Skillscore = require('../../models/skillscore');
const Spellsave = require('../../models/spellsaves');
const Property = require('../../models/property');
const Character = require('../../models/character');
const Class = require('../../models/class');
const Subclass = require('../../models/subclass');
const User = require('../../models/user');
const Weapons = require('../../models/weapons');

//The `/api/character` endpoint

router.get('/', async (req, res) => {
    //find all characters
    try{
        const charData = await Character.findAll({
            include: [{ model: Class}, {model: Subclass}, {model: User}, {model: Weapons}, {model: Ability}, {model: Abilityscore}, {model: Race}, {model: Savescore}, {model: Skillscore}, {model: Skill}, {model: Spellsave}, {model: Property}],
        });
        res.status(200).json(charData);
        res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:char_name', async (req,res) => {
    //find one character by its `char_name` value
    try{
        const charData = await Character.findByPk(req.params.char_name, {
            include: [{ model: Class}, {model: Subclass}, {model: User}, {model: Weapons}, {model: Ability}, {model: Abilityscore}, {model: Race}, {model: Savescore}, {model: Skillscore}, {model: Skill}, {model: Spellsave}, {model: Property}],
        });

        if (!charData) {
            res.status(404).json({ message: 'No Character found with that name.'});
            return;
        }

        res.status(200).json(charData);
        res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    //create a new character
    try {
        const charData = await Character.create(req.body);

        res.status(200).json(charData);
        res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:char_name', withAuth, async (req, res) => {
    //update a character by its `char_name` value
    try {
         const charData = await Character.update(req.body, {
            where: {
                id: req.params.char_name,
            }
         });

         if (!charData[0]) {
            res.status(404).json({ message: 'No Character with this name.'});
            return;
         }

         res.status(200).json(charData);
         res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);;
    }
});

router.delete('/:char_name', withAuth, async (req, res) => {
    //delete a character by its `id` value
    try {
        const charData = await Character.destroy({
            where: {
                id: req.params.char_name,
            },
        });

        if (!charData) {
            res.status(500).json(err);
            return;
        }

        res.status(200).json(charData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
        return;
    }

    res.render('login');
});

module.exports = router;