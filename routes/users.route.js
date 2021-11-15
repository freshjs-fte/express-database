const userRouter = require("express").Router();
const userController = require("../controllers/user.controller");

/* Path: /api/users */

userRouter.get("/", userController.getAllUsers);
userRouter.post("/", userController.createUser);

userRouter.get("/:id", userController.getUserById);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

userRouter.get("/:userId/chats", userController.getUserChats);
userRouter.patch("/chats/:userId/:chatId", userController.addUserChat);

module.exports = userRouter;
