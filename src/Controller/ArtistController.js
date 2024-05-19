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
