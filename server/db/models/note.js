const { Sequelize, DataTypes, Model } = require('sequelize');

//文章表
class Note extends Model {}

Note.init({
    // 记录ID
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // 标题
    title: DataTypes.STRING(255),
    // 文章封面
    cover: DataTypes.STRING(255),
    // json内容
	raw: DataTypes.TEXT,
	// html内容
	html: DataTypes.TEXT,
	// 作者Id
	author: DataTypes.INTEGER,
	// 文章类型
	tag: DataTypes.STRING(100),
	// 点赞数量
	likeNum: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
	// 收藏数量
	collectNum: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
	// 所处状态
	status: {
		type: DataTypes.INTEGER,
		defaultValue: 1 //处于草稿状态
	}
},{
    Sequelize,
    modelName: 'note' 
})

module.exports = { Note }