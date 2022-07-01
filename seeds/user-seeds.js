const { User } = require('../models');

const userdata = [
    {
        username: 'andrew',
        email: 'andrew@email.com',
        password: 'password123'
    },
    {
        username: 'dave',
        email: 'dave@email.com',
        password: 'password123'
    },
    {
        username: 'mike',
        email: 'mike@email.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true });

module.exports = seedUsers;