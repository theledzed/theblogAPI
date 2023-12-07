const { models } = require("../libs/sequelize");
class PostsService {
  async create(body) {
    const newPost = await models.Post.create(body);
    return newPost;
  }

  async find() {
    const rta = await models.Post.findAll();
    return rta;
  }

  async findOne(id) {
    const product = this.post.find((item) => item.id === id);
    if (product) {
      return product;
    } else {
      throw new Error(`Post whit id ${id} not found`);
    }
  }
}

module.exports = PostsService;
