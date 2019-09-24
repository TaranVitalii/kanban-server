const CardsModel = require('./../../models/cards.js');

async function updateCardWS(cardIdTarget,editorColumnId){
	const update = await CardsModel.findByIdAndUpdate(cardIdTarget,editorColumnId,(err,card)=>{
	  		if(err) return err;
	  		return card;
	  		})
	return update
}
module.exports = updateCardWS;