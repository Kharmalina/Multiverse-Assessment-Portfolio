const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const HangoutSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  latLong: {
    type: [Number],
    require: true,
  },
  joining: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
});

const Hangout = mongoose.model("hangout", HangoutSchema);
module.exports = Hangout;
