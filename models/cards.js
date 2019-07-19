const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CardsSchema = new Schema({ 
	title:String,
	column:Number,
	 __v: {
    type: Number,
    select: false
  }

})

module.exports = mongoose.model('CardsSchema', CardsSchema);
