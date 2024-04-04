const router = require('express').Router();
const { User, Character } = require('../../models');

router.post('/login', async (req,res) => {
    try {
       const userData = await User.findOne({ where: { email: req.body.email }})
        if (!userData) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          const validPassword = await userData.checkPassword(req.body.password);
      
          if (!validPassword) {
            res
              .status(400)
              .json({ message: 'Incorrect email or password, please try again' });
            return;
          }
      
          req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;
            
            res.json({ user: userData, message: 'You are now logged in!' });
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
      
     module.exports = router;


//The `/api/users` endpoint

//get all users
router.get('/', async (req, res) => {
    try {
        const userData = await User.findAll({
            include: [{ model: Character }],
        });
        res.status(200).json(userData);

    } catch (err) {
        res.status(500).json(err);
    }
});

//get one user
router.get('/:id', async (req, res) => {
    //find a single product by its `id`
    try {
        const userData = await User.findByPk(req.params.id, {
            include: [{ model: Character}],
        });

        if (!userData) {
            res.status(404).json({ message: 'No User found with that id.'});
            return;
        }

        res.status(200).json(userData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    //create a new user
    try {
        const userData = await User.create(req.body);

        res.status(200).json(userData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', async (req, res) => {
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
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
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

module.exports = router;