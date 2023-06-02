const cors = require("cors");
const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config(".env");
const cookieParser = require("cookie-parser");
require("./config/db.config");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const AuthRoute = require("./routes/Auth.route");
const HangoutRoute = require("./routes/Hangout.route");
const ProfileRoute = require("./routes/Profile.route");

app.use("/auth", AuthRoute);
app.use("/hangout", HangoutRoute);
app.use("/profile", ProfileRoute);

app.use((error, req, res, next) => {
  console.error("SERVER ERROR: ", error);
  if (res.statusCode < 400) res.status(500);
  res.send({ error: error.message, name: error.name, message: error.message });
});

module.exports = { app };
