const { Post } = require('../models');

const postdata = [
    {
        title: 'Tech Blog First Post!',
        content: 'I love this blog',
        user_id: 1
    },
    {
        title: 'Cuphead',
        content: 'Really fun game!',
        user_id: 2
    },
    {
        title: 'MySQL',
        content: 'MySQL is a really cool database',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
