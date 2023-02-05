const { Sequelize, DataTypes, Model } = require('sequelize');

//点赞表
class Favor extends Model {}

Favor.init({
    uid: Sequelize.INTEGER,
	artId: Sequelize.INTEGER,
	type: Sequelize.INTEGER,
},{
    sequelize, // 连接实例
    modelName: 'favor' // 模型名称
})


module.exports = { Favor }