const router = require('express').Router();
const  User  = require('../../models/user');

//The `/api/users` endpoint

router.post('/', async (req, res) => {
    //create a new user
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.loggedIn = true;
        })
        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { name: req.body.name }});

        if (!userData) {
            res.status(400).json({ message: 'Incorrect email or password, try again'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
    
        if (!validPassword) {
            res.status(400).json({ message: 'Incorrect email or password, try again' });
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'You have now been logged in'});
        });

    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});
router.get('/signup',(req, res) => {
    res.render('signup');
});
module.exports = router;