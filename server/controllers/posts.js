const PostMessage = require('../models/postsMessage');

const getPosts = async  (req, res) => {
    try {
        const PostMessages = await  PostMessage.find();
        res.status(200).json(PostMessages)

    } catch (error) {
        res.status(404).json({ message: error.message})
    }
};

const createPost = async (res, send) => {
    const post = req.body 
    const newPost = new PostMessage(post)

    try {
        await newPost.save();
        res.status(201).json();
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}; 


module.exports = getPosts, createPost ;