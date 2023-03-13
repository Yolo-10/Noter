const { DataTypes, Model } = require('sequelize');
const { db } = require('@/db')

class Comment extends Model { }

Comment.init({
	uid: DataTypes.INTEGER,
    noteId: DataTypes.INTEGER,
	content: DataTypes.STRING(30), //评论限制30字
	num: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
},{
    sequelize: db, // 连接实例
    tableName: 'comment' // 模型名称
})

module.exports = { Comment }