const Topic = require("../Schemas/Topic");

exports.addTopic = (req, res) => {
  const body = req.body;
  const topic = new Topic(body);
  topic.save((err, topic) => {
    if (err) {
      res.send({
        status: 400,
        error: err,
      });
    }

    res.send({
      message: "added",
      topic: topic,
    });
  });
};

exports.getAllTopics = (req, res) => {
  Topic.find((err, topics) => {
    if (err) {
      res.send({
        status: 400,
        error: err,
      });
    }
    res.send({
      topics: topics,
    });
  });
};

exports.getBySearch = async (req, res) => {
  const xxx = req.params.search;
  const response = await Topic.find({
    topicLabel: { $regex: xxx, $options: "i" },
  })
    .limit(5)
    .exec();
  if (response) {
    res.send({
      topics: response,
    });
  }

  console.log(response);
};
