const express = require('express');
const getPosts = require('../controllers/posts')
const router = express.Router();
const createPost = require('../controllers/posts');


router.get('/', getPosts);
router.get('/', createPost);

module.exports = router ; 