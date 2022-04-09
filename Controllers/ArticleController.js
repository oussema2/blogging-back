const Article = require("../Schemas/Article");
const Teacher = require("../Schemas/Teacher");

exports.addArticle = (req, res) => {
  const body = req.body;
  console.log(req);
  const article = new Article(body);
  article.save((err, article) => {
    if (err) {
      res.send({
        status: 400,
        message: e,
      });
    }

    if (article) {
      res.status(200).send({
        message: "added",
        article: article,
      });
    }
  });
};

exports.getArticlesById = (req, res) => {
  const id = req.params.id;
  Article.find({ userId: id }, (err, articles) => {
    if (err) {
      res.send({
        status: 400,
        error: e,
      });
    }

    res.status(200).send({
      articles: articles,
    });
  });
};

exports.getArticles = (req, res) => {
  var data = [];
  Article.find((err, resu) => {
    for (let i = 0; i < resu.length; i++) {
      Teacher.findById(resu[i].userId, (err, te) => {
        const obj = {
          article: {
            _id: resu[i]._id,
            userId: resu[i].userId,
            title: resu[i].title,
            articleBody: resu[i].articleBody,
            likes: resu[i].likes,
            dislikes: resu[i].dislikes,
            articleImage: resu[i].articleImage,
          },
          teacher: {
            _id: te._id,
            fullName: te.fullName,
            profilePicture: te.profilePicture,
          },
        };
        data.push(obj);

        if (i === resu.length - 1) {
          res.send({
            articles: data,
          });
        }
      });
    }
  });
};

exports.getArticleById = (req, res) => {
  Article.findById(req.params.id, (err, article) => {
    Teacher.findById(article.userId, (err, t) => {
      res.send({
        article,
        teacher: t,
      });
    });
  });
};
