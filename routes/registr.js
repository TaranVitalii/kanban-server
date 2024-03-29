const mongoose = require('mongoose');
const UserSchema = require('../models/user.js');
const User = mongoose.model('UserSchema');



async function register(req, res) {
  const { username, password,  } = req.body;
    if (!username || !password) {
      return res.sendStatus(400);
    }

  try {
    let user = await User.findOne({ username });
      if (user) {
        return res.status(404).send("User already exists");
      }
    user = await User.create({ username, password });
      return res.send(user.getPublicFields());
  } catch (e) {
    console.error(e);
    return res.sendStatus(500);
  }
}

module.exports = register;