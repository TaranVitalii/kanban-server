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
	const name = req.body.name;
	const columnId = req.body.columnId;

	const card = await CardsModel.create({
		name,
		columnId
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

  	return res.status(200).send(card);
},
async removeCard(req,res){
	const { id } = req.params;

	const remove = await CardsMode.findByIdAndRemove(id,(err,card)=>{
		if(err) return err;
		return card;
	});
	return res.status(200)
  
}}