const router = require('express').Router();
const { Character, Class, Subclass, User, Weapons } = require('../../models');

router.get('/')