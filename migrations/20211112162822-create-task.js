"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("tasks", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      body: {
        type: Sequelize.STRING(1000),
        allowNull: false,
      },
      isDone: {
        field: "is_done",
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      deadline: {
        type: Sequelize.DATE,
      },

      userId: {
        field: "user_id",
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
      },

      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("tasks");
  },
};
