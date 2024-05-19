// import packages
const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// create Server
const Server = express();

// set bodyparser
Server.use(bodyparser.json());
Server.use(cors());
Server.use(bodyparser.urlencoded({ extended: false }));

// connect to DB
mongoose
  .connect("mongodb://127.0.0.1:27017/artdb", {
    useNewUrlParser: true,
  })
  .then((result) => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log("DB Disconnected");
  });

// Upload fileStorageConfig
const fileStorageConfig = multer.diskStorage({
  destination: "Uploads",
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

// Upload fileUploadConfig
const fileUploadConfig = multer({
  storage: fileStorageConfig,
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/)) {
      return cb(new Error("Please Upload Correct File"));
    }
    cb(undefined, true);
  },
});

// Upload Image
Server.post(
  "/uploadfiles",
  fileUploadConfig.single("image"),
  (req, res) => {
    res.status(200).json({
      filepath: "/images/".concat(req.file.filename),
      uploaded: true,
    });
  },
  (err, req, res, next) => {
    res.status(400).send({ error: err.message });
  }
);

// attach routes to server
Server.use("/artapi/", require("./src/Routes/Routes"));

// Uploading Images
Server.use(express.static("Uploads"));
Server.use("/images", express.static("Uploads"));

// start server
Server.listen(5000, () => {
  console.log("Start Server");
});
