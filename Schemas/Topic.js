const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const TopicSchema = new Schema({
  topicLabel: {
    type: String,
    required: true,
  },
});
TopicSchema.index({ "$**": "text" });

const Topic = mongoose.model("Topic", TopicSchema);
module.exports = Topic;
