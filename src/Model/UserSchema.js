const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  UserName: String,
  UserEmail: String,
  UserPassword: String,
  UserMobileNo: Number,
  User_Type: String,
});

module.exports = mongoose.model("User", UserSchema);
