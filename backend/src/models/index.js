const { Sequelize } = require('sequelize');
const config = require('../config/config');
const Post = require('./post');

const sequelize = new Sequelize(config.development);

console.log('Connecting to the database...',config.development);

const models = {
  Post: Post(sequelize, Sequelize)
};

Object.keys(models).forEach(modelName => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

models.sequelize = sequelize;
models.Sequelize = Sequelize;

module.exports = models;