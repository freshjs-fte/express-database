"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    static associate(models) {
      Chat.hasMany(models.User, { through: "users_to_chats" });
    }
  }
  Chat.init(
    {
      author: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
      },
    },
    {
      sequelize,
      modelName: "chat",
    }
  );
  return chat;
};
