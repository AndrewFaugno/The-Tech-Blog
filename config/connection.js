const Sequelize = require('sequelize');

require('dotenv').config();

let sequelize;

// create a connection to our database (jawsdb if on heroku)
if (process.env)