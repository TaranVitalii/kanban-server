const ColumnsModel = require('./../../models/column.js');

module.exports = {
	async getColumnsModel(){
		const columns = await ColumnsModel.find({},(err, columns) => columns)
		return columns;
	},
	async postColumnsModel(title,id){
		const column = await ColumnsModel.create({title,id});
		return column;
	}
}