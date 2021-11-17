"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Task, { foreignKey: "user_id" });
      User.belongsToMany(models.Chat, {
        through: "users_to_chats",
        foreignKey: "user_id",
      }); // UserChat
    }
  }

  User.init(
    {
      firstName: {
        field: "first_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      lastName: {
        field: "last_name",
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      password: {
        field: "password_hash",
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          notEmpty: true,
          notNull: true,
        },
      },
      birthdate: {
        type: DataTypes.DATE,
        validate: {
          isDate: true,
        },
      },
      isSubscribed: {
        field: "is_subscribed",
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true,
      },
    },

    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true
    }
  );
  return User;
};
