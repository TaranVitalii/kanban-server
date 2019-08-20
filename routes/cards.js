const {getCardsModel,getCardForIdModel,addCardsModel,updateCard,removeCard} = require('./repository/cardsRepository.js');

module.exports ={//return array cards from .json 
	async getCards(req, res) {
		try{ 
			// if(req.isAuthenticated()){
			const cards = await getCardsModel();
				return res.status(200).send(cards)
			// }else{res.status(404).send('Unauthorized')}
		}catch(e){ res.status(500).send(e.message)}
	},
//return card with search id
	async getCardForId(req, res) {
		try{ 
			// if(req.isAuthenticated()){
			const id = req.params.id;
			const card = await getCardForIdModel(id);
				return res.status(200).send(card)
			// }else{res.status(404).send('Unauthorized')}

		}catch(e){ res.status(500).send(e.message)}

},
//add card new card in .json
	 async addCards(req, res) {
		try{ 
			// if(req.isAuthenticated()){
			const title = req.body.title;
			const column = req.body.column;
			const card = await addCardsModel(title,column);
				return res.status(200).send(card);
			// }else{res.status(404).send('Unauthorized')}
		}catch(e){ res.status(500).send(e.message)}
},
	 async updateCard(req,res){
		try{ 
			// if(req.isAuthenticated()){
			const id = req.params.id;
		  	const patch = req.body;
		  	const update = await updateCard(id,patch);
		  		return res.status(200).send(update);
			// }else{res.status(404).send('Unauthorized')}
	  	}catch(e){ res.status(500).send(e.message)}
},
	async removeCard(req,res){
		try{ 
			// if(req.isAuthenticated()){
			const { id } = req.params;
			const {card} = await removeCard(id);
				return res.status(200).send(card);
			// }else{res.status(404).send('Unauthorized')}
		}catch(e){ res.status(500).send(e.message)}
	}
}