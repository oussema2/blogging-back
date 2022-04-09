const multer = require("multer");
const path = require("path");

exports.UserfileStorage = multer.diskStorage({
  destination: "teachersImages",
  filename: (req, file, cb) => {
    const imageName = Date.now() + file.originalname;
    cb(null, imageName);
    req.body.profilePicture = imageName;
  },
});

exports.ArticlefileStorage = multer.diskStorage({
  destination: "articleImages",
  filename: (req, file, cb) => {
    const imageName = Date.now() + file.originalname;
    cb(null, imageName);
    req.body.articleImage = imageName;
  },
});
