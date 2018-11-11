const express = require('express');
const tweetController = require('../controllers/tweetController');
const routes = express.Router();

routes.get('/list_tweets', tweetController.index);
routes.post('/create_tweets', tweetController.store);
routes.post('/like_tweets/:id', tweetController.like);
routes.delete('/delete_tweets/:id', tweetController.delete);
routes.put('/update_tweets/:id', tweetController.update);


routes.get('/', (req, res) => {
    return res.send('hello world@!');
})

module.exports = routes;