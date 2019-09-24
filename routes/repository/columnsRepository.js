const ColumnsModel = require('./../../models/column.js');

module.exports = {
	async getColumnsModel(){
		const columns = await ColumnsModel.find({},(err, columns) => columns)
		return columns;
	},
	async postColumnsModel(title,id){
		const column = await ColumnsModel.create({title,id});
		return column;
	},
	async deleteRemoveCard(id){
		const column = await ColumnsModel.findById(id,(err,column)=>{
			if(err) return err;
			return column
		})
		const remove = await ColumnsModel.findByIdAndRemove(id,(err,column)=>{
			if(err) return err;
			return column;
		});
		return {remove , column} ;
	}

}
