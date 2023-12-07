class PostsService {
  constructor() {
    this.post = [
      {
        name: "Post 1",
        author: "Cris Flores",
        date: "",
        content: "",
        id: "1",
      },
      {
        name: "Post 2",
        author: "Cris Flores",
        date: "",
        content: "",
        id: "2",
      },
    ];
  }

  async create(body) {
    this.post.push(body);
    return body;
  }

  async find() {
    return this.post;
  }

  async findOne(id) {
    const name = this.getTotal();
    const product = this.post.find((item) => item.id === id);
    if (product) {
      return product;
    } else {
      throw new Error(`Post whit id ${id} not found`);
    }
  }
}

module.exports = PostsService;
