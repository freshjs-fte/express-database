"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    static associate(models) {
      Task.belongsTo(models.User, { foreignKey: "user_id" }); // UserTask
    }
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
        defaultValue: false,
        allowNull: false,
      },
      deadline: {
        type: DataTypes.DATE,
        validate: {
          isAfter(value) {
            if (new Date() >= new Date(value)) {
              throw new Error("Only after current date is allowed");
            }
          },
        },
      },
      userId: {
        field: "user_id",
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "User", key: "id" },
      },
    },
    {
      sequelize,
      modelName: "Task",
      tableName: "tasks",
      underscored: true,
    }
  );
  return Task;
};
