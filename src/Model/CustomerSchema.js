const mongoose = require("mongoose");

const CustomerSchema = mongoose.Schema({
  CustomerName: String,
  CustomerMobileNo: Number,
  CustomerAddress: String,
  CustomerDOB: Date,
  CustomerCity: String,
  CustomerState: { type: String, default: "Maharashra" },
  CustomerPinCode: Number,
  CustomerEmail: String,
  CustomerProfile: String,
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Customer", CustomerSchema);
