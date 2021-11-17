const tasksRouter = require("express").Router();
const { getAllTasks, createTask, getTaskById, getUserTasks } = require("../controllers/task.controller");
const { validateTask } = require("../middlewares/tasks.mw");

/* Path: /api/tasks */

tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getTaskById);
tasksRouter.patch("/:id", getAllTasks);
tasksRouter.delete("/:id", getAllTasks);




module.exports = tasksRouter;
