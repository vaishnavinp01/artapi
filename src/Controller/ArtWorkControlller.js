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
    const result = await ArtWork.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.getArtWorksByArtistId = async (req, res) => {
  try {
    const artworkData = await ArtWork.find({ ArtistId: req.body.ArtistId });
    res.status(200).json(artworkData);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateArtWork = async (req, res) => {
  try {
    console.log(req.body);
    const result = await ArtWork.findByIdAndUpdate(
      req.body.artworkrid,
      { ArtWorkPrice: req.body.ArtWorkPrice },
      { new: true }
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.deleteArtWork = async (req, res) => {
  try {
    console.log(req.body);
    const result = await ArtWork.findByIdAndDelete(req.body.artworkid);
    res.status(200).json(result);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error.message);
  }
};
