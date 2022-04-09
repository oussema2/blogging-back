const teachersRouter = require("express").Router();
const TeachersController = require("../Controllers/TeachersController");
const imageUpload = require("../multer/fileUpload").userStorage;

teachersRouter
  .route("/auth/register")
  .post(imageUpload.single("profilePicture"), TeachersController.register);

teachersRouter.route("/getTeacher/:id").get(TeachersController.getTeacherById);
teachersRouter.route("/auth/login").post(TeachersController.login);

module.exports = teachersRouter;
