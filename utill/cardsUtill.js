const CardsModel = require('../models/schemaCards.js');


module.exports ={//return array cards from .json 
	async getCards(req, res) {
		const cards = await CardsModel.find({},(err, cards) => cards);
		return res.status(200).send(cards)
	},
//return card with search id
async getCardForId(req, res) {
	const id = req.params.id;

	const card = await CardsModel.findById(id,(err,card)=>{
		if(err) return err;
		return card
	})
	return res.status(200).send(card)
},
//add card new card in .json
async addCards(req, res) {
	console.log(req.body)
	const title = req.body.title;
	const column = req.body.column;

	const card = await CardsModel.create({
		title,
		column
	})
	return res.status(200).send(card)
},
async updateCard(req,res){
	const id = req.params.id;
  	const patch = req.body;
  	const update = await CardsModel.findByIdAndUpdate(id,patch,(err,card)=>{
  		if(err) return err;
  		return card;
  	})

  	return res.status(200).send(update);
},
async removeCard(req,res){
	const { id } = req.params;

	const remove = await CardsModel.findByIdAndRemove(id,(err,card)=>{
		if(err) return err;
		return card;
	});
	return res.status(200).send('card remove');
  
}}