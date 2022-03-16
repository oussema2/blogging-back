const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeacherSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
});

const Teacher = mongoose.model("Teacher", TeacherSchema);
module.exports = Teacher;
