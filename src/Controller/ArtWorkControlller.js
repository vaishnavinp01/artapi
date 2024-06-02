const ArtWork = require("../Model/ArtWorkSchema");

exports.addArtWork = async (req, res) => {
  try {
    const result = await ArtWork.create(req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.allArtWorks = async (req, res) => {
  try {
    const result = await ArtWork.find().populate("ArtistId");
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.ordersByartworkId = async (req, res) => {
  try {
    const artworkData = await ArtWork.findOne({ ArtistId: req.body.ArtistId })
    res.status(200).json(artworkData);
  } catch (error) {
    res.status(200).send(error);
  }
};
