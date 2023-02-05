const { Sequelize, DataTypes, Model } = require('sequelize');

//标签表
class Tag extends Model {}

Tag.init({
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
	name: DataTypes.STRING(100),
	author: DataTypes.INTEGER
},{
    sequelize, // 连接实例
    modelName: 'tag' // 模型名称
})


module.exports = { Tag }