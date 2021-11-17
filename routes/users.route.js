const userRouter = require("express").Router();
const { createTask, getUserTasks } = require("../controllers/task.controller");
const userController = require("../controllers/user.controller");
const { validateTask } = require("../middlewares/tasks.mw");

/* Path: /api/users */

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);

userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

userRouter.post("/:userId/tasks", validateTask, createTask);
userRouter.get("/:userId/tasks", getUserTasks);

module.exports = userRouter;
