const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userTokenSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: false,
    ref: "user",
    // unique: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: Date,
    expires: 30 * 86400,
  }, // 30 days
});

const UserToken = mongoose.model("UserToken", userTokenSchema);

module.exports = UserToken;
