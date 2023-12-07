const express = require("express");
const PostsService = require("../services/posts.service");

const router = express.Router();
const service = new PostsService();

router.get("/", async (req, res) => {
  const posts = await service.find();
  res.json(posts);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await service.findOne(id);
    res.json(product);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.status(201).json({
    message: "Created",
    data: product,
  });
});

module.exports = router;
