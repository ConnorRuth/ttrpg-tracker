const express = require('express');

const app = express();
const PORT = 3001;

//User login middlewear
const requireLogin = (req, res, next) => {
    if (req.user) {

        //User is authenticated, proceed to the next middleware 
        next();
    } else {
        //User is not authenticated, redirect to login page
        res.redirect('/login');
    }
};

//Apply the middleware to a specific roue
app.get('/profile', requireLogin, (req,res) => {
    //Display user profile information
    res.send('Welcome to your profile');
});