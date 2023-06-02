const { Sequelize, sequelize } = require("./db");

const User = sequelize.define("user", {
  username: Sequelize.STRING,
  name: Sequelize.STRING,
  password: Sequelize.STRING,
  confirmPassword: Sequelize.STRING,
  email: Sequelize.STRING,
});

module.exports = { User };
