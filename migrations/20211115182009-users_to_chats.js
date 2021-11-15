"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("users_to_chats", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },

      userId: {
        field: "user_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "unique_combined_user_id_chat_id",
        references: {
          model: "users",
          key: "id",
        },
      },

      chatId: {
        field: "chat_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: "unique_combined_user_id_chat_id",
        references: {
          model: "chats",
          key: "id",
        },
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("users_to_chats");
  },
};
