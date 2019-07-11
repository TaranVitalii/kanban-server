const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ColumnSchema = new Schema({
	id: Number, 
	title:String,
	 __v: {
    type: Number,
    select: false
  }
})

module.exports = mongoose.model('ColumnSchema', ColumnSchema);
