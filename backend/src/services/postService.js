const { Post } = require('../models');

class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
    this.status = 400;
  }
}

class PostService {
  async createPost(postData) {
    try {
    
      if (!postData.name || typeof postData.name !== 'string' || postData.name.trim() === '') {
        throw new ValidationError('El nombre es requerido y debe ser un texto válido');
      }

      if (postData.description && typeof postData.description !== 'string') {
        throw new ValidationError('La descripción debe ser un texto válido');
      }

      return await Post.create(postData);
    } catch (error) {
      if (error.name === 'SequelizeValidationError') {
        const messages = error.errors.map(err => err.message);
        throw new ValidationError(messages.join(', '));
      }
      throw error;
    }
  }

  async deletePost(id) {
    try {
   
      if (!id || isNaN(id)) {
        throw new ValidationError('ID de post inválido');
      }

      const post = await Post.findByPk(id);
      if (!post) {
        throw new NotFoundError('Post no encontrado');
      }

      await post.destroy();
      return post;
    } catch (error) {
      throw error;
    }
  }

  async getAllPosts() {
    try {
      return await Post.findAll({
        order: [['createdAt', 'DESC']] 
      });
    } catch (error) {
      throw new Error('Error al obtener los posts');
    }
  }
}

module.exports = PostService;