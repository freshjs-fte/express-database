const tasksRouter = require("express").Router();
const { getAllTasks } = require("../controllers/task.controller");

tasksRouter.get("/", getAllTasks);
tasksRouter.post("/", getAllTasks);
tasksRouter.patch("/", getAllTasks);
tasksRouter.delete("/", getAllTasks);

module.exports = tasksRouter;
