const {getColumnsModel,postColumnsModel,deleteRemoveCard} = require('./repository/columnsRepository.js');

module.exports = {
	async getColumns(req, res) {
	try{
		if(req.isAuthenticated()){
		const columns = await getColumnsModel();
			return res.status(200).send(columns)
		}else{res.status(404).send('Unauthorized')}
	}catch(e){ res.status(500).send(e.message)}

},
	async postColumns(req,res){
		try{
			// if(req.isAuthenticated()){
			const title = req.body.title;
			const id = req.body.id;
			const column = await postColumnsModel(title,id);
				return res.status(200).send(column)
			// }else{res.status(404).send('Unauthorized')}
		}catch(e){ res.status(500).send(e.message)}
	},
	async removeColumn(req,res){
try{
			// if(req.isAuthenticated()){
			const { id } = req.params;
			const column = await deleteRemoveCard(id);
				return res.status(200).send(column)
			// }else{res.status(404).send('Unauthorized')}
		}catch(e){ res.status(500).send(e.message)}
	}
}