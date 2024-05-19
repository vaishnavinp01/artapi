const mongoose = require("mongoose");

const ArtWorkSchema = mongoose.Schema({
  ArtWorkName: String,
  ArtWorkType: String,
  ArtWorkImage: String,
  ArtWorkPrice: Number,
  ArtistId: { type: mongoose.Schema.Types.ObjectId, ref: "Artist" },
  ArtWorkFrameSize: String,
  ArtWorkCanvasType: String,
});

module.exports = mongoose.model("ArtWork", ArtWorkSchema);
