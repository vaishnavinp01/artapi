const Contact = require("../Model/ContactSchema");

exports.addContact = async (req, res) => {
  try {
    const result = await Contact.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allContacts = async (req, res) => {
  try {
    const result = await Contact.find().populate("UserId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};
