const CardsModel = require('./../../models/cards.js');



module.exports = {
	async getCardsModel(){
		const cards = await CardsModel.find({},(err, cards) => cards);
		return cards;
	},
	async getCardForIdModel(id){
		const card = await CardsModel.findById(id,(err,card)=>{
			if(err) return err;
			return card
		})
	return card;
	},
	async addCardsModel(title,column){
		const card = await CardsModel.create({
		title,
		column
		})
	return card;
	},
	async updateCard(id,patch){
		const update = await CardsModel.findByIdAndUpdate(id,patch,(err,card)=>{
  		if(err) return err;
  		return card;
  		})
		return update;
	},
	async removeCard(id){
		const card = await CardsModel.findById(id,(err,card)=>{
			if(err) return err;
			return card
		})
		const remove = await CardsModel.findByIdAndRemove(id,(err,card)=>{
			if(err) return err;
			return card;
		});
		return {remove , card} ;
	}
}