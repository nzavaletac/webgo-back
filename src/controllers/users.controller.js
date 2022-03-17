const User = require("../models/users.model");

exports.signup = async (req, res) => {
  try {
    const { body } = req;
    const user = await User.create(body);
    res.status(201).json({ message: "User created", user });
  } catch (e) {
    res.status(400).json({ error: e });
  }
};

exports.update = async (req, res) => {
  const {
    body,
    params: { userId },
  } = req;
  try {
    const user = await User.findOneAndUpdate({ _id: userId }, body, {
      new: true,
    });
    if (!user) {
      res.status(403).json({ message: "User does not updated" });
      return;
    }
    res.status(200).json({ message: "User updated", user });
  } catch (e) {
    res.status(400).json({
      message: "An error has occurred",
    });
  }
};

exports.destroy = async (req, res) => {
  try {
    const {
      params: { userId },
    } = req;
    const user = await User.findOneAndDelete({ _id: userId });
    if (!user) {
      res.status(403).json({ message: "Unable to delete user" });
      return;
    }
    res.status(200).json({ message: "User deleted", user });
  } catch (e) {
    res.status(400).json({ message: "An error has occurred" });
  }
};
