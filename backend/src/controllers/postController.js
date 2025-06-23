const PostService = require('../services/postService');
const postService = new PostService();

exports.createPost = async (req, res) => {
  try {
    const post = await postService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    if (error.name === 'ValidationError') {
      return res.status(400).json({ 
        error: error.message 
      });
    }
    console.error('Error creating post:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const deletedPost = await postService.deletePost(req.params.id);
    
    res.status(200).json({
      id: deletedPost.id,
      name: deletedPost.name,
      description: deletedPost.description
     
    });
  } catch (error) {
    if (error.name === 'NotFoundError') {
      return res.status(404).json({ error: error.message });
    }
    if (error.name === 'ValidationError') {
      return res.status(400).json({ error: error.message });
    }
    console.error('Error deleting post:', error);
    res.status(500).json({ 
      error: 'Error interno del servidor',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await postService.getAllPosts();
    res.status(200).json(posts || []);
  } catch (error) {
    console.error('Error getting posts:', error);
    res.status(500).json({ 
      error: 'Error al obtener los posts',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};