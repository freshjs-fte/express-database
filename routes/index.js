const express = require("express");
const chatRouter = require("./chats.router");
const router = express.Router();
const tasksRouter = require("./tasks.router");
const usersRouter = require("./users.route");

/* Path: /api */
router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);
router.use("/chats" , chatRouter);

module.exports = router;
