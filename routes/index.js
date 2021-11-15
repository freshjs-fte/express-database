const express = require("express");
const router = express.Router();
const tasksRouter = require("./tasks.router");
const usersRouter = require("./users.route");

/* Path: /api */

router.use("/users", usersRouter);
router.use("/tasks", tasksRouter);

module.exports = router;
