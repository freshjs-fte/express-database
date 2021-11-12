"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {}
  }

  Task.init(
    {
      body: {
        type: DataTypes.STRING(1000),
        allowNull: false,
        validate: {
          notEmpty: true,
          len: [3, 1000],
        },
      },
      isDone: {
        field: "is_done",
        type: DataTypes.BOOLEAN,
        default: false,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isAfter(value) {
            if (value >= new Date()) {
              throw new Error("Only after current date is allowed!");
            }
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
    }
  );
  return Task;
};
