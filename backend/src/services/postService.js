const { Post } = require('../models');

class PostService {
  async createPost(postData) {
    return await Post.create(postData);
  }

  async deletePost(id) {
    const post = await Post.findByPk(id);
    if (!post) throw new Error('Post not found');
    await post.destroy();
    return post;
  }

  async getAllPosts() {
    return await Post.findAll();
  }
}

module.exports = PostService;