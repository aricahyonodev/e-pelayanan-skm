const Mongoose = require("mongoose");

var Schema = new Mongoose.Schema({
  fullname: { type: String },
  password: { type: String },
  email: { type: String },
  level: { type: String, default: "user" },
  status: { type: String, default: "aktif" },
});

const User = Mongoose.model("user", Schema);

module.exports = User;
