const topicRouter = require("express").Router();
const TopicController = require("../Controllers/TopicController");

topicRouter.route("/addTopic").post(TopicController.addTopic);
topicRouter.route("/getAllTopics").get(TopicController.getAllTopics);
topicRouter.route("/searchTopic/:search").get(TopicController.getBySearch);

module.exports = topicRouter;
//ddd
