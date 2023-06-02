const { app } = require("./App");
require("dotenv").config();

const { PORT = 8000 } = process.env || 8000;

app.listen(PORT, () => {
  try {
    console.log(`Server is listening at http://localhost:${PORT}`);
  } catch (error) {
    console.error("Error starting server:", error);
  }
});
