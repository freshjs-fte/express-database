const { Chat, User } = require("../models");

module.exports.getAllChats = async (req, res, next) => {
  try {
    const chats = await Chat.findAll();

    res.status(200).send({ data: chats });
  } catch (error) {
    next(error);
  }
};

module.exports.createChat = async (req, res, next) => {
  try {
    const foundUser = await User.findByPk(req.body.author);

    if (!foundUser) {
      return next(new Error("User not found"));
    }

    const newChat = await Chat.create({ ...req.body });

    await newChat.addUser(foundUser);

    res.status(200).send({ data: newChat });
  } catch (error) {
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
