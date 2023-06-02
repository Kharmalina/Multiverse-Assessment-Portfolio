const { sequelize } = require("./db");
const { Car, User } = require(".");
const { cars } = require("./seedData");

const seed = async () => {
  try {
    await sequelize.sync({ alter: true }); // This checks what is the current state of the table in the database (which columns it has, what are their data types, etc), and then performs the necessary changes in the table to make it match the model.
    const createdCars = await Car.bulkCreate(cars);
  } catch (error) {
    console.error(error);
  }
};

module.exports = seed;
