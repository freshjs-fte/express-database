const { Task, User } = require("../models");

module.exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.findAll({ limit: 10 });

    // if

    res.send({ data: tasks });
  } catch (error) {
    next(error);
  }
};

module.exports.getTaskById = async (req, res, next) => {
  try {
    const { params } = req;

    const task = await Task.findByPk(params.id);

    // if

    res.send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.createTask = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const task = await Task.create({ ...req.body, userId });

    // if (!task) {return next error}

    res.send({ data: task });
  } catch (error) {
    next(error);
  }
};

module.exports.updateTask = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const foundTask = await Task.findByPk(id);

    if (!foundTask) {
      return next(new Error("Task not found"));
    }

    // returning default true
    const updatedTask = await foundTask.update(body);

    /* 
      // Multiple update
    const [rowsCount, [updatedUser]] = await User.update(prep, {
      where: {
        id,
      },
      returning: true,
    });

    if (rowsCount === 0) {
      return next(new Error("User not found"));
    }

    if (rowsCount > 1) {
      return next(new Error("Cannot update user"));
    } */

    res.status(200).send({ data: updatedTask });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteTask = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundTask = await Task.findByPk(id);

    /* null error */
    if (!foundTask) {
      return next(new Error("Task not found"));
    }

    const verdict = await foundTask.destroy();

    if (!verdict) {
      throw new Error("Cannot delete task");
    }

    res.status(200).send({ data: foundTask });
  } catch (error) {
    // transaction unroll
    next(error);
  }
};

module.exports.getUserTasks = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    /* const tasks = await Task.findAll({where: {
      userId
    }}) */

    const foundUser = await User.findByPk(userId);

    if (!foundUser) {
      return next(new Error("User not found"));
    }

    const tasks = await foundUser.getTasks();

    /* null error */
    if (!tasks) {
      return next(new Error("Tasks not found"));
    }

    res.status(200).send({ data: tasks });
  } catch (error) {
    // transaction unroll
    next(error);
  }
};
