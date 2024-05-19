const mongoose = require("mongoose");

const ArtistSchema = mongoose.Schema({
  ArtistFullName: String,
  ArtistAddress: String,
  ArtistCity: String,
  ArtistMobileNo: Number,
  ArtistEmail: String,
  ArtistState: { type: String, default: "Maharashtra" },
  ArtistPincode: Number,
  ArtistAdharCardNo: Number,
  ArtistAdharCardImage: String,
  ArtistHandicapCertificateImage: String,
  ArtistProfile: String,
  IsVerified: { type: Boolean, default: false },
  UserId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Artist", ArtistSchema);
