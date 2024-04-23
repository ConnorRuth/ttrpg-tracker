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
    try {
        const charData = await Character.findAll();
        res.status(200).json(charData);
        res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:char_name', async (req, res) => {
    //find one character by its `char_name` value
    try {
        const charData = await Character.findByPk(req.params.char_name);

        if (!charData) {
            res.status(404).json({ message: 'No Character found with that name.' });
            return;
        }


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
        const loggedInUserId = req.session.user_id;
        const charData = await Character.create({
            ...req.body,
            user_id: loggedInUserId
        });

        res.render('character', {
            charData,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        res.status(400).json(err);
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

router.put('/ability', withAuth, async (req, res) => {

    const abData = req.body;
    console.log(abData);
    try {
        for (const data of abData) {
            console.log("----101-----",data);
            const abilities = await Abilityscore.findOne({
                where: {
                    character_id: data.character_id,
                    ability_id: data.ability_id
                }
            });
            if (!abilities) {
                console.log("----109-----", data);
                const newAbScore = await Abilityscore.create(data);
                console.log(`created new ability score association ${newAbScore}`);
            } else {
                console.log("----113-----", data);
                const AbScore = await Abilityscore.update(data, { where: { id: abilities.id } });
                console.log(`updated existing ability score association ${AbScore}`);
            }
        }
    } catch (error) {
        console.error('Error querying Abilities:', error);
    }
});

router.put('/skill', withAuth, async (req, res) => {

    const skillData = req.body;
    console.log(skillData);
    try {
        for (const data of skillData) {
            const skills = await Skillscore.findOne({
                where: {
                    skill_id: data.skill_id,
                    character_id: data.character_id,
                }
            });
            if (!skills) {
                const newSkill = await Skillscore.create(data);
                console.log(`new skill added ${newSkill}`);
            } else {
                const updateSkill = await Skillscore.update(data, { where: { id: skills.id } });
                console.log(`new skill added ${updateSkill}`);
            }
        }

    } catch (error) {
        console.error('Error querying Skills:', error);
    }
});

// router.get('/roll', (req, res) => {
//     const damage = req.body.damage;
//     const kill = roll(damage);
//     res.send(kill);
// });



router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});



module.exports = router;