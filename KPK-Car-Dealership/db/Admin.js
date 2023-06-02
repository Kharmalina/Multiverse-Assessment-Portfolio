const { Sequelize, sequelize } = require("./db");

const Admin = sequelize.define("admin", {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = { Admin };
