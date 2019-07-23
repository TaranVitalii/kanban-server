const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/user.js')
const User = mongoose.model('UserSchema');
const config = require('config');

async function signIn(req,res){
	const {username , password} = req.body;
    console.log(req.isAuthenticated());
	if (!username || !password) {
    	return res.sendStatus(400);
 	}
 	try {
	const user = await User.findOne({username});
	if(!user || !user.checkPassword(password)){
		return res.status(404)
	}
	const token = jwt.sign({ id: user._id }, config.secret);
	   return res.send({ token });
	} catch (e) {
	  return res.sendStatus(500);
	}
}
module.exports = signIn;