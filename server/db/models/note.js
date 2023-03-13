const { DataTypes, Model,QueryTypes  } = require('sequelize');
const { db } = require('@/db')
const { Tag } = require('./tag')

class Note extends Model {
	// 新增文章,存草稿或者直接发布
	static async addNote(note) {
		return await Note.create({ ...note })
	}

	// 搜索所有笔记--按更新时间降序排序
	static async showAllNotes() {
		let sql = `SELECT u.user_name, u.avatar, n.* 
			FROM note n LEFT JOIN user u ON n.author = u.id ORDER BY n.updated_at DESC`
		let notes = await db.query(sql, { type: QueryTypes.SELECT })
		// notes = this.common(notes)
		return notes
	}

	static async showHotNotes() {
		let sql = `SELECT u.user_name, u.avatar, n.id , n.title ,n.tag
			FROM note n LEFT JOIN user u ON n.author = u.id 
			ORDER BY n.like_num DESC,n.updated_at DESC LIMIT 5`
		let notes = await db.query(sql, { type: QueryTypes.SELECT })
		// notes = this.common(notes)
		return notes
	}

	// 获取文章视图公共方法:每个笔记加上标签tags
	static async common(notes) {
		let tagObj = {}
		let tags = await Tag.findAll({ raw: true })
		tags.map(item => {
			tagObj[item.id] = item.name
		})
		notes = notes.map(item => {
			item.tags = item.tag.split(',').map(i => {
				return { id: i, name: tagObj[i] }
			})
			return item
		})
		return notes
	}
}

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
	// 评论数量
	commentNum: {
		type: DataTypes.INTEGER,
		defaultValue: 0
	},
	// 所处状态
	status: {
		type: DataTypes.INTEGER,
		defaultValue: 1 //处于草稿状态
	}
},{
    sequelize: db,
    tableName: 'note' 
})

module.exports = { Note }