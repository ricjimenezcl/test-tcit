module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    underscored: true,
    tableName: 'posts'
  });
  return Post;
};