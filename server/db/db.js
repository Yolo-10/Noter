const Sequelize = require('sequelize')
const { Model } = require('sequelize')
const { unset, clone, isArray } = require('lodash');
const { host,port,dbName,user,password } = require('../config/constant').database

//连接配置
const db = new Sequelize(dbName,user,password,{
    dialect: 'mysql',     	// 数据库类型
	host: host,
	port: port,
    logging: false,        	// console中是否显示具体sql
	timezone: '+08:00',   	// 设置东八时区,重要
    define: {
		timestamps: true,
		paranoid: true,
		underscored: true, 		// 自动将驼峰转下划线
		scopes: {
			noTS: {
				attributes: {
					exclude: ['updatedAt', 'deletedAt', 'createdAt']
				}
			}
		}
	}
})

// 如果不存在,则创建该表(如果已经存在,则不执行任何操作)
db.sync()


/** 查找数据库返回的数据做处理
 * 全局:返回的时候删除三个时间戳
 * 功能简单粗暴单一
 */
Model.prototype.toJSON = function () {
	let data = clone(this.dataValues)
	unset(data, 'updatedAt')
	unset(data, 'createdAt')
	unset(data, 'deletedAt')

	for (let key in data) {
		if (key === 'image') {
			data[key] = global.config.host + data[key]
		}
	}

	// 待删除字段
	// TODO:有什么用？？？？ 好像这一部分暂时未使用到
	if (isArray(this.exclude)) {
		this.exclude.forEach(val => {
			unset(data, val)
		})
	}

	return data
}

module.exports = { db }