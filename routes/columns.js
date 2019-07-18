const ColumnsModel = require('../models/column.js');



module.exports = {
	async getColumns(req, res) {
	try{
	const columns = await ColumnsModel.find({},(err, columns) => columns)
	return res.status(200).send(columns)
	}catch(e){ res.status(500).send(e.message)}

},
	async postColumns(req,res){
		try{
		const title = req.body.title;
		const id = req.body.id;
		const columns = await ColumnsModel.create({title,id})
		return res.status(200).send(columns)
		}catch(e){ res.status(500).send(e.message)}
	}
}