const { DataTypes, Model } = require('sequelize');
const { db } = require('../db')

//用户表
class User extends Model {
  
    // 从github中获取数据
    static async getUserByGithubId(gitUser) {
        const user = await User.findOne({
            where: {
                githubId: gitUser.id,
            },
        });
        if (user) {
            return user;
        } else {
            return await User.create({
                githubId: gitUser.id,
                userName: gitUser.login,
                email: gitUser.email,
                avatar: gitUser.avatar_url,
                desc: gitUser.bio,
            });
        }
    }
}

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
    sequelize: db, // 连接实例
    tableName: 'user' // 模型名称
});

module.exports = { User };