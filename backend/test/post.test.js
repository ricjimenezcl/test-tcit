const request = require('supertest');
const app = require('../src/server');
const { Post, sequelize } = require('../src/models');

describe('Posts API', () => {
  beforeAll(async () => {
  
    await sequelize.sync({ force: true });
    server = app.listen(0);
  });

  beforeEach(async () => {

    await Post.destroy({ truncate: true });
  });

  afterAll(async () => {
    
    await server.close();
    await sequelize.close();
  });

  describe('POST /api/posts', () => {
    it('should create a new post with valid data', async () => {
      const testData = {
        name: 'Nuevo Post',
        description: 'Contenido del post'
      };

      const res = await request(app)
        .post('/api/posts')
        .send(testData)
        .expect('Content-Type', /json/)
        .expect(201);

      expect(res.body).toEqual({
        id: expect.any(Number),
        name: testData.name,
        description: testData.description,
        createdAt: expect.any(String),
        updatedAt: expect.any(String)
      });
    });

    it('should return 400 for invalid post data', async () => {
      const invalidData = {
        name: '', 
        description: 'Solo descripción'
      };

      const res = await request(app)
        .post('/api/posts')
        .send(invalidData)
        .expect(400);

      expect(res.body).toHaveProperty('error');
    });
  });

  describe('GET /api/posts', () => {
    it('should retrieve all posts', async () => {
     
      const testPosts = [
        { name: 'Post 1', description: 'Descripción 1' },
        { name: 'Post 2', description: 'Descripción 2' }
      ];
      
      await Post.bulkCreate(testPosts);

      const res = await request(app)
        .get('/api/posts')
        .expect(200);

      expect(res.body.length).toBe(2);
      expect(res.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ name: 'Post 1' }),
          expect.objectContaining({ name: 'Post 2' })
        ])
      );
    });

    it('should return empty array when no posts exist', async () => {
      const res = await request(app)
        .get('/api/posts')
        .expect(200);

      expect(res.body).toEqual([]);
    });
  });

 /* describe('DELETE /api/posts/:id', () => {
    it('should delete an existing post', async () => {
      const post = await Post.create({
        name: 'Post a eliminar',
        description: 'Este post será eliminado'
      });

      const res = await request(app)
        .delete(`/api/posts/${post.id}`)
        .expect(200);

      expect(res.body).toMatchObject({
        id: post.id,
        name: post.name,
        description: post.description
      });

     
      const deletedPost = await Post.findByPk(post.id);
      expect(deletedPost).toBeNull();
    });

    it('should return 404 when deleting non-existent post', async () => {
      const nonExistentId = 9999;
      const res = await request(app)
        .delete(`/api/posts/${nonExistentId}`)
        .expect(404);

      expect(res.body).toHaveProperty('error');
    });
  });*/
});