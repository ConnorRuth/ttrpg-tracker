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

router.get('/:char_name', async (req,res) => {
    //find one character by its `char_name` value
    try{
        const charData = await Character.findByPk(req.params.char_name);

        if (!charData) {
            res.status(404).json({ message: 'No Character found with that name.'});
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

router.put('/abilities', withAuth, async (req, res) => {
    //
        const characterId = req.body.character_id;
        const abilityId = req.body.ability_id;
      
        try {
          const abilities = await Ability.findOne({
            where: {
              character_id: characterId,
              ability_id: abilityId
            }
          });
          if (abilities.length === 0) {
            const newAbScore = await Abilityscore.create(req.body);
            console.log(`created new ability score association ${newAbScore}`);
          } else {
            const AbScore = await Abilityscore.update(req.body);
            console.log(`updated existing ability score association ${AbScore}`);
          }
        } catch (error) {
          console.error('Error querying Abilities:', error);
        }
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});



module.exports = router;