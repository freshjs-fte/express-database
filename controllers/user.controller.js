const { User, Chat } = require("../models");
const _ = require("lodash");

const prepareUser = (body) =>
  _.pick(body, [
    "firstName",
    "lastName",
    "email",
    "password",
    "birthdate",
    "isSubscribed",
  ]);

module.exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.findAll({ limit: 10 });

    if (users.length === 0) {
      return next(new Error("No users found"));
    }

    res.status(200).send({ data: users });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserById = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundUser = await User.findOne({
      where: {
        id,
      },
    });

    if (!foundUser) {
      return next(new Error("User not found"));
    }

    res.status(200).send({ data: foundUser });
  } catch (error) {
    next(error);
  }
};

module.exports.createUser = async (req, res, next) => {
  try {
    const prep = prepareUser(req.body);

    const user = await User.create(prep);

    // bad practice delete user.password
    // const preparedUser = _.omit(user, ["password"]);
    user.password = undefined;

    res.status(201).send({ data: user });
  } catch (error) {
    next(error);
  }
};

module.exports.updateUser = async (req, res, next) => {
  try {
    const {
      params: { id },
      body,
    } = req;

    const prep = prepareUser(body);

    const [rowsCount, [updatedUser]] = await User.update(prep, {
      where: {
        id,
      },
      returning: true,
    });

    if (rowsCount === 0) {
      return next(new Error("User not found"));
    }

    updatedUser.password = undefined;

    res.status(200).send({ data: updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports.deleteUser = async (req, res, next) => {
  try {
    const {
      params: { id },
    } = req;

    const foundUser = await User.findByPk(id);

    /* null error */
    if (!foundUser) {
      return next(new Error("User not found"));
    }

    const verdict = await foundUser.destroy();

    if (!verdict) {
      throw new Error("Cannot delete user");
    }

    res.status(200).send({ data: foundUser });
  } catch (error) {
    // transaction unroll
    next(error);
  }
};

module.exports.addUserChat = async (req, res, next) => {
  try {
    const {
      params: { userId, chatId },
    } = req;

    const foundChat = await Chat.findByPk(chatId);

    const foundUser = await User.findByPk(userId);

    const chatsOfUser = await foundChat.addUser(foundUser);

    console.log(chatsOfUser);

    res.status(200).send({ data: chatsOfUser });
  } catch (error) {
    next(error);
  }
};

module.exports.getUserChats = async (req, res, next) => {
  try {
    const {
      params: { userId },
    } = req;

    const foundUser = await User.findByPk(userId);

    const chatsOfUser = await foundUser.getChats();

    res.status(200).send({ data: chatsOfUser });
  } catch (error) {
    next(error);
  }
};
