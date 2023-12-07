const { PostsSchema, Post } = require("./posts.model");

function setupModels(sequelize) {
  Post.init(PostsSchema, Post.config(sequelize));
}

module.exports = setupModels;
