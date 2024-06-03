const Artist = require("../Model/ArtistSchema");

exports.addArtist = async (req, res) => {
  try {
    const result = await Artist.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allArtists = async (req, res) => {
  try {
    const result = await Artist.find().populate("UserId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.doIsVerified = async (req, res) => {
  try {
    const result = await Artist.findByIdAndUpdate(
      req.body.ArtistId,
      { IsVerified: true },
      { new: true }
    );
    if (!result) {
      const message = { message: "IsVerified fail", data: result };
      res.status(200).json(message);
    } else {
      const message = { message: "IsVerified Success", data: result };
      res.status(200).json(message);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.CheckIsVerified = async (req, res) => {
  try {
    const result = await Artist.find({ IsVerified: true }).populate("UserId");
    if (!result) {
      const message = { message: "IsVerified fail", data: result };
      res.status(200).json(message);
    } else {
      const message = { message: "IsVerified Success", data: result };
      res.status(200).json(message);
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getArtistProfile = async (req, res) => {
  try {
    const artData = await Artist.findOne({ UserId: req.body.UserId }).populate(
      "UserId"
    );
    res.status(200).json(artData);
  } catch (error) {
    res.status(500).json(error);
  }
};
