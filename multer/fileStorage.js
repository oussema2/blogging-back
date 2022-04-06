const multer = require("multer");
const path = require("path");

exports.fileStorage = multer.diskStorage({
  destination: "teachersImages",
  filename: (req, file, cb) => {
    const imageName = Date.now() + file.originalname;
    cb(null, imageName);
    req.body.profilePicture = imageName;
  },
});
