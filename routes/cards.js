const {getCardsModel,getCardForIdModel,addCardsModel,updateCard,removeCard} = require('./repository/cardsRepository.js');

module.exports ={//return array cards from .json 
	async getCards(req, res) {
		try{ 
			const cards = await getCardsModel();
				return res.status(200).send(cards)
		}catch(e){ res.status(500).send(e.message)}
	},
//return card with search id
	async getCardForId(req, res) {
		try{ 
			const id = req.params.id;
			const card = await getCardForIdModel(id);
				return res.status(200).send(card)
		}catch(e){ res.status(500).send(e.message)}

},
//add card new card in .json
	 async addCards(req, res) {
		try{ 
			const title = req.body.title;
			const column = req.body.column;
			const card = await addCardsModel(title,column);
				return res.status(200).send(card)
		}catch(e){ res.status(500).send(e.message)}
},
	 async updateCard(req,res){
		try{ 
			const id = req.params.id;
		  	const patch = req.body;
		  	const update = await updateCard(id,patch);
		  		return res.status(200).send(update);
	  	}catch(e){ res.status(500).send(e.message)}
},
	async removeCard(req,res){
		try{ 
			const { id } = req.params;
			const remove = await removeCard(id);
				return res.status(200).send('card remove');
		}catch(e){ res.status(500).send(e.message)}
	}
}