const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Teacher",
  },
  title: {
    type: String,
    required: true,
  },
  articleBody: {
    type: String,
    required: true,
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  },
  articleImage: {
    type: String,
  },
});

const Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
