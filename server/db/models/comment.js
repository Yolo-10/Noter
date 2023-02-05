const { Sequelize, DataTypes, Model } = require('sequelize');

//评论表
class Comment extends Model {}

Comment.init({
    bookId: Sequelize.INTEGER,
	content: Sequelize.STRING(12),   // 短评限制12字符
	nums: {
		type: Sequelize.INTEGER,
		defaultValue: 0
	},
},{
    sequelize, // 连接实例
    modelName: 'comment' // 模型名称
})


module.exports = { Comment }