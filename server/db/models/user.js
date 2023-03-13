const { DataTypes, Model } = require('sequelize');
const { db } = require('@/db')
const { Note } = require('./note');

class User extends Model {
    static async noteTotal(id) {
        return await Note.count('id',{ where: {author: id} })
    }
    static async likeTotal(id) {
        return await Note.sum('likeNum', { where: {author:id} })
    }
    static async collectTotal(id) {
        return await Note.sum('collectNum',{ where: {author:id} })
    }
    static async commentTotal(id) {
        return await Note.sum('commentNum',{ where: {author:id} })
    }
    static async modifyInfo(info, id) {
        return await User.update({...info},{ where: {id:id} })
    }

    // 根据用户id查询用户信息
    static async getUserInfo(id) {
        const user = await User.findByPk(id); //findByPk:根据主键查询
        if (!user) throw new NotFound('未找到该用户');
        return user;
    }
  
    // 通过githubId寻找用户：无则新增、有则返回
    static async getUserByGithubId(gitUser) {
        const user = await User.findOne({ where: {githubId: gitUser.id}});
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