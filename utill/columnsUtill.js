const ColumnsModel = require('../models/schemaColumn.js');



module.exports = {
	async getColumns(req, res) {
	const columns = await ColumnsModel.find({},(err, columns) => columns)
	return res.status(200).send(columns)
}
}