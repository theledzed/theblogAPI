const { Sequelize } = require("sequelize");
const setupModels = require("../db/models");

const sequelize = new Sequelize(
  "postgres://default:9ch3XzRqaYSO@ep-damp-leaf-97062840-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
  {
    dialect: "postgres",
    logging: true,
  },
);

setupModels(sequelize);

sequelize.sync();

module.exports = sequelize;
