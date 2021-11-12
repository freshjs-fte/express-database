const { Task } = require("../models");

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ limit: 10 });

    res.send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  try {
    // const tasks = await Task.findAll();

    res.send({ data: "task" });
  } catch (error) {
    next(error);
  }
};

module.exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);

    res.send({ data: task });
  } catch (error) {
    console.log("err", error);
    next(error);
  }
};
