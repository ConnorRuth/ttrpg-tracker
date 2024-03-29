const router = require('express').Router();
const {  Ability, Abilityscore, Race, Savescore, Skill, Skillscore, Spellsave, Property, Character, Class, Subclass, User, Weapons } = require('../../models');

router.get('/')