const { User } = require('../models');

const userdata = [
    {
        username: 'andrew',
        password: 'password123'
    },
    {
        username: 'dave',
        password: 'password123'
    },
    {
        username: 'mike',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true });

module.exports = seedUsers;