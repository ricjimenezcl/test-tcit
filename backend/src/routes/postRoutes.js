const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/', postController.createPost);
router.delete('/:id', postController.deletePost);
router.get('/', postController.getAllPosts);

module.exports = router;