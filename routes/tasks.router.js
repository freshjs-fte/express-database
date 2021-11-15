const tasksRouter = require("express").Router();
const { getAllTasks, createTask, getTaskById } = require("../controllers/task.controller");
const { validateTask } = require("../middlewares/tasks.mw");

/* Path: /api/tasks */

tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", validateTask, createTask);

// TODO
tasksRouter.get("/:id", getTaskById);
tasksRouter.patch("/:id", getAllTasks);
tasksRouter.delete("/:id", getAllTasks);

module.exports = tasksRouter;
