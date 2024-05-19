const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
  OrderDate: { type: Date, default: new Date() },
  OrderTotalAmount: Number,
  OrderItems: [
    {
      ArtWorkId: { type: mongoose.Schema.Types.ObjectId, ref: "ArtWork" },
      Qty: Number,
    },
  ],
  CustId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  OrderStatus: { type: String, default: "Pending" },
  CustomerQty: Number,
});

module.exports = mongoose.model("Order", OrderSchema);
