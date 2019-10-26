const tweet = require('../models/tweet');

module.exports = {
    async index(req,res){
        const tweets = await tweet.find({}).sort('-createdAt');
        return res.json(tweets);
    },

    async store(req,res){
        const createTweet = await tweet.create(req.body);
        return res.json(createTweet);
    },

    async like(req,res){
        const likeTweet = await tweet.findById(req.params.id);
        likeTweet.set({likes: likeTweet.likes++ });
        await likeTweet.save();
        return res.json(likeTweet);
    },

    async delete(req, res) {
        const deleteTweet = await tweet.findByIdAndDelete(req.params.id);
        return res.json(deleteTweet);
    },

    async update(req, res) {
        const updateTweet = await tweet.findByIdAndUpdate(req.params.id);
        updateTweet.set({content: req.body.content})
        await updateTweet.save();
        return res.json(updateTweet);
    }
}
