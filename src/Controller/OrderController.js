const Order = require("../Model/OrderSchema");

exports.addOrder = async (req, res) => {
  try {
    const result = await Order.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allOrders = async (req, res) => {
  try {
    const result = await Order.find()
      .populate("CustId")
      .populate("OrderItems.ArtWorkId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.ordersByArtistId = async (req, res) => {
  try {
    const result = await Order.find({ ArtistId: req.body.ArtistId })
      .populate("OrderItems.ArtWorkId")
    res.status(200).json(result);
  } catch (error) {
    res.status(200).send(error);
  }
};

exports.ordersByCustId = async (req, res) => {
  try {
    const result = await Order.find({ CustId: req.body.CustId })
      .populate("CustId");
    res.status(200).json(result);
  } catch (error) {
    res.status(200).send(error);
  }
};

exports.updateOrder = async (req, res) => {
  try {
    const result = await Order.findByIdAndUpdate(
      req.body.orderid,
      { CustomerStatus: req.body.CustomerStatus },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.deleteOrder = async (req, res) => {
  try {
    console.log(req.body);
    const result = await Order.findByIdAndDelete(req.body.orderid);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};
