const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const TeacherSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePicture: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  articles: [{ type: Schema.Types.ObjectId, ref: "Article" }],
});
TeacherSchema.methods.comparePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
