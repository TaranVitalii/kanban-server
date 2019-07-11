const ColumnsModel = require('../models/schemaColumn.js');



module.exports = {
	async getColumns(req, res) {
	const columns = await ColumnsModel.find({},(err, columns) => columns)
	return res.status(200).send(columns)
},
	async postColumns(req,res){
		const title = req.body.title;
		const id = req.body.id;
		const columns = await ColumnsModel.create({title,id})
	return res.status(200).send(columns)
	}
}