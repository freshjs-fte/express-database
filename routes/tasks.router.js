const tasksRouter = require("express").Router();
const { getAllTasks, createTask } = require("../controllers/task.controller");
const { validateTask } = require("../middlewares/tasks.mw");

tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", validateTask, createTask);

// TODO
tasksRouter.patch("/", getAllTasks);
tasksRouter.delete("/", getAllTasks);

module.exports = tasksRouter;
