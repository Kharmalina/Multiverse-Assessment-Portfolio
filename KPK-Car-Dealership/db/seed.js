const {sequelize} = require('./db');
const seed = require('./seedFn');

seed()
  .then(() => {
    console.log('Seeding success. Cars to the Rescue!');
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => {
    sequelize.close();
  });