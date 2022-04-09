const articleRouter = require("express").Router();
const ArticleController = require("../Controllers/ArticleController");
const imageUpload = require("../multer/fileUpload").articleStorage;

articleRouter
  .route("/addArticle")
  .post(imageUpload.single("articleImage"), ArticleController.addArticle);
articleRouter
  .route("/getArticlesById/:id")
  .get(ArticleController.getArticlesById);
articleRouter.route("/getArticles").get(ArticleController.getArticles);
articleRouter
  .route("/getArticleById/:id")
  .get(ArticleController.getArticleById);

module.exports = articleRouter;
