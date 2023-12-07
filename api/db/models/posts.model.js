const { Model, DataTypes, Sequelize } = require("sequelize");

const POSTS_TABLE = "posts";

const PostsSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  author: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  content: {
    allowNull: false,
    type: DataTypes.STRING(1000),
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: "create_at",
    defaultValue: Sequelize.NOW,
  },
};

class Post extends Model {
  static associate() {}

  static config(sequelize) {
    return {
      sequelize,
      tableName: POSTS_TABLE,
      modelName: "Post",
      timestamps: false,
    };
  }
}

module.exports = { POSTS_TABLE, PostsSchema, Post };
