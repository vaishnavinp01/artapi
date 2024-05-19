const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  FirstName: String,
  LastName: String,
  Email: String,
  Message: String,
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Contact", ContactSchema);
