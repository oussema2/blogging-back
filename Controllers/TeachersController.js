const Teacher = require("../Schemas/Teacher");
const bcrypt = require("bcrypt");

exports.register = (req, res) => {
  const reqBody = req.body;

  const teacher = new Teacher(reqBody);
  bcrypt.genSalt(15, (err, salt) => {
    bcrypt.hash(teacher.password, salt, (err, hash) => {
      teacher.password = hash;
      teacher.profilePicture = req.file.filename;
      teacher.save((err, teacher) => {
        if (err) {
          console.log(err);
          res.send({
            status: 400,
            message: err,
          });
        } else {
          return res.status(200).send({
            teacher: teacher,
            status: 200,
            message: "ADDED",
          });
        }
      });
    });
  });
};

exports.login = (req, res) => {
  const body = req.body;

  Teacher.findOne({ email: body.email }, (err, teacher) => {
    if (err) {
      res.send({
        status: 400,
        message: e,
      });
    }
    if (!teacher) {
      res.send({
        status: 400,
        message: "Wrong email",
      });
    } else {
      if (!teacher.comparePassword(body.password)) {
        res.send({
          status: 400,
          message: "Wrong Password",
        });
      } else {
        res.status(200).send({
          teacher: teacher,
        });
      }
    }
  });
};

exports.getTeacherById = (req, res) => {
  const id = req.params.id;
  Teacher.findById(id, (err, teacher) => {
    if (err) {
      res.status(400).send({
        message: err,
      });
    } else {
      res.status(200).send({ message: "success", teacher: teacher });
    }
  });
};
