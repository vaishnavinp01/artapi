const Customer = require("../Model/CustomerSchema");

exports.addCustomer = async (req, res) => {
  try {
    const result = await Customer.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allCustomers = async (req, res) => {
  try {
    const result = await Customer.find().populate("UserId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getCustomerProfile = async (req, res) => {
  try {
    const custData = await Customer.findOne({
      UserId: req.body.UserId,
    }).populate("UserId");
    res.status(200).json(custData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteCustomer = async (req, res) => {
  try {
    const custData = await Customer.findByIdAndDelete(req.body.CustId);
    res.status(200).json(custData);
  } catch (error) {
    res.status(500).send(custData);
  }
};
