const express = require("express");
const router = express.Router();

const AuthController = require("../controllers/Auth.Controller");

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.delete("/logout", AuthController.logout);

router.post("/refresh-token", AuthController.refreshToken);

module.exports = router;
