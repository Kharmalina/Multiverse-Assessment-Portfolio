const { app, sequelize } = require("./");

const { PORT = 3000 } = process.env;

app.listen(PORT, () => {
  try {
    sequelize.sync({ force: false });
    console.log(`Cars are ready at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
