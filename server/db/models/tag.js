const { DataTypes, Model } = require('sequelize');
const { db } = require('@/db')

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
    sequelize: db, // 连接实例
    tableName: 'tag' // 模型名称
})

module.exports = { Tag }