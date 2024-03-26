const express = require('express');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const db = require('./models'); // Import Sequelize models
const routes = require('./routes');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session middleware
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = db.sequelize;
const sessionStore = new SequelizeStore({ db: sequelize });
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: sessionStore
}));

// Routes
app.use(routes);

// Start the server
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
