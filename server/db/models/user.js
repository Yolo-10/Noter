const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

//用户表
class User extends Model {}

User.init({
    // 记录ID
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    // 用户名
    userName: DataTypes.STRING(64),
    // 邮箱
    email: DataTypes.STRING(128),
    // 密码
    password: {
        type: DataTypes.STRING(128),
    },
    // GitHubId
    githubId: {
        type: DataTypes.INTEGER,
        unique: true, // 唯一
    },
    // 真实姓名
    realName: DataTypes.STRING(64),
    // 简介
    desc: DataTypes.STRING(255),
    // 用户头像
    avatar: DataTypes.STRING(255),
}, {
    sequelize, // 连接实例
    modelName: 'user' // 模型名称
});

module.exports = { User };