const { sequelize, Sequelize } = require("../db/db");
const { Car } = require("./Car");
const { User } = require("./User");
const { Admin } = require("./Admin");

module.exports = {
  Car,
  User,
  sequelize,
  Sequelize,
};
