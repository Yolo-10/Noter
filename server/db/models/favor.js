const { DataTypes, Model } = require('sequelize');
const { db } = require('../db')

//点赞表
class Favor extends Model {}

Favor.init({
    uid: DataTypes.INTEGER,
	artId: DataTypes.INTEGER,
	type: DataTypes.INTEGER,
},{
    sequelize: db, // 连接实例
    tableName: 'favor' // 模型名称
})


module.exports = { Favor }