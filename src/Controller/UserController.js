const User = require("../Model/UserSchema");

exports.addUser = async (req, res) => {
  try {
    const result = await User.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allUsers = async (req, res) => {
  try {
    const result = await User.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.doLogin = async (req, res) => {
  try {
    const result = await User.findOne(req.body);
    if (!result) {
      const message = { message: "Login Failed", data: result };
      res.status(200).json(message);
    } else {
      const message = { message: "Login Successed", data: result };
      res.status(200).json(message);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
