const { DataTypes, Model } = require('sequelize');
const { db } = require('../db')

//评论表
class Comment extends Model {}

Comment.init({
    bookId: DataTypes.INTEGER,
	content: DataTypes.STRING(12),   // 短评限制12字符
	nums: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
},{
    sequelize: db, // 连接实例
    tableName: 'comment' // 模型名称
})


module.exports = { Comment }