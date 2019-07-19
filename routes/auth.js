const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const UserSchema = require('../models/user.js')
const User = mongoose.model('UserSchema');
const jwtSecret = 'omega';

async function signIn(req,res){
	const {username , password} = req.body;
	console.log('req.body',req.body)
	if (!username || !password) {
    	return res.sendStatus(400);
 	}
 	try {
	const user = await User.findOne({username});
	console.log('user',user)
	if(!user || !user.checkPassword(password)){
		return res.status(404)
	}
	const token = jwt.sign({ id: user._id }, "omega");
	console.log('token',token)
	   return res.send({ token });
	} catch (e) {
	  return res.sendStatus(500);
	}
}
module.exports = signIn;