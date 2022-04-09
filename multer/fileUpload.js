const multer = require("multer");
const userStorageFile = require("./fileStorage").UserfileStorage;
const articleStorage = require("./fileStorage").ArticlefileStorage;

exports.userStorage = multer({
  storage: userStorageFile,
});
exports.articleStorage = multer({
  storage: articleStorage,
});
