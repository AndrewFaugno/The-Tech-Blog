const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

// get posts to display on front page
router.get('/')

module.exports = router;