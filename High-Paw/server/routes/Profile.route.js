const express = require("express");
const router = express.Router();

const { verifyAccessToken } = require("../helpers/jwt_helper");

const ProfileController = require("../controllers/Profile.Controller");

router.get("/:id", verifyAccessToken, ProfileController.profileDetails);

router.post("/edit/:id", verifyAccessToken, ProfileController.editProfile);

// ? edit profile
// router.delete("/remove",);

module.exports = router;
