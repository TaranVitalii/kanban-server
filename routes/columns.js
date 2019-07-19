const {getColumnsModel,postColumnsModel} = require('./repository/columnsRepository.js');

module.exports = {
	async getColumns(req, res) {
	try{
	const columns = await getColumnsModel();
	return res.status(200).send(columns)
	}catch(e){ res.status(500).send(e.message)}

},
	async postColumns(req,res){
		try{
		const title = req.body.title;
		const id = req.body.id;
		const column = await postColumnsModel(title,id);
		return res.status(200).send(column)
		}catch(e){ res.status(500).send(e.message)}
	}
}