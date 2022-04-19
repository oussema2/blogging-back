const Article = require("../Schemas/Article");
const Teacher = require("../Schemas/Teacher");

exports.addArticle = (req, res) => {
  const body = req.body;
  const date = new Date(body.articleDate);
  console.log(date);
  const article = new Article(body);
  article["articleDate"] = date;
  article["topics"] = body.topics.split(",");
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
            articleDate: resu[i].articleDate,
            topics: resu[i].topics,
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

exports.getArticlesByTopic = (req, res) => {
  const topic = req.params.topic;
  var data = [];
  Article.find({ topics: topic }, (err, resu) => {
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
            articleDate: resu[i].articleDate,
            topics: resu[i].topics,
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

exports.getArticlesByUser = (req, res) => {
  const userId = req.params.id;
  Teacher.findById(userId, (err, teacher) => {
    if (err) {
      res.send({
        status: 400,
        error: err,
      });
    }
    Article.find({ userId: userId }, (errx, articles) => {
      if (errx) {
        res.send({
          status: 400,
        });
      }
      res.send({
        status: 200,
        articles: articles,
        teacher: teacher,
      });
    });
  });
};

exports.getArticlesByUserAndTopics = (req, res) => {
  const userId = req.params.id;
  const topic = req.params.topic;
  Teacher.findById(userId, (err, teacher) => {
    if (err) {
      res.send({
        status: 400,
        error: err,
      });
    }
    Article.find({ userId: userId, topics: topic }, (errx, articles) => {
      if (errx) {
        res.send({
          status: 400,
        });
      }
      res.send({
        status: 200,
        articles: articles,
        teacher: teacher,
      });
    });
  });
};
