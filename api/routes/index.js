const express = require("express");
const postRouter = require("./post.router");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/theblog", router);

  router.use("/post", postRouter);
}

module.exports = routerApi;
