const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
	id: Number, 
	title:String,
})

module.exports = mongoose.model('ColumnSchema', ColumnSchema);
