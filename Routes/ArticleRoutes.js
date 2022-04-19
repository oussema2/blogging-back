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
articleRouter
  .route("/getArticlesByTopic/:topic")
  .get(ArticleController.getArticlesByTopic);
articleRouter
  .route("/getArticlesByUser/:id")
  .get(ArticleController.getArticlesByUser);
articleRouter
  .route("/getArticlesByUserAndTopics/:id/:topic")
  .get(ArticleController.getArticlesByUserAndTopics);

module.exports = articleRouter;
