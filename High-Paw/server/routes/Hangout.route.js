const express = require("express");
const router = express.Router();

const { verifyAccessToken } = require("../helpers/jwt_helper");

const HangoutController = require("../controllers/Hangout.Controller");

router.get("/all", verifyAccessToken, HangoutController.allHangouts);

router.get("/:id", verifyAccessToken, HangoutController.singleHangout);

router.post("/create", verifyAccessToken, HangoutController.newHangout);

router.delete("/:id", verifyAccessToken, HangoutController.deleteHangout);

router.put("/:id", verifyAccessToken, HangoutController.editHangout);

module.exports = router;
