const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;
app.use(cors());
app.use(express.json());

//MONGODB CONNECTION
/* mongoose.connect("mongodb://127.0.0.1:27017/freelancerDB", {
  useNewUrlParser: true,
}); */

const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

mongoose
  .connect(
    "mongodb+srv://freelancer:m5Y0YY2WWXjxM3Mr@cluster0.cspwo.mongodb.net/freelancerDB?retryWrites=true&w=majority",
    connectionParams
  )
  .then(() => {
    console.log("Connected to database ");
  })
  .catch((err) => {
    console.error(`Error connecting to the database. \n${err}`);
  });
//
const connection = mongoose.connection;
connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);
});
