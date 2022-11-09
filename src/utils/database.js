// es para gestionar la conexón a la base de datos
// sequelize init --> config

const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database:  process.env.DB_NAME ||"todoapi",
  username: process.env.DB_USER ||"julio",
  host: process.env.DB_HOST||"localhost",
 // port: "5432",
  password: process.env.DB_PASSWORD ||"120786",
  dialect: "mysql",
});

module.exports = db;
