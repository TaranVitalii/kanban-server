const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardsSchema = new Schema({
	id: Schema.Types.ObjectId , 
	title:String,
	column:Number,

})

module.exports = mongoose.model('CardsSchema', CardsSchema);
