const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { auth } = require('../middlewares/auth')
const { User } = require('../db/models/user')
const { success } =require('../util/success') 

/**
 * 用户所获得的所有点赞、收藏、文章总数接口
 */
router.get('/status', auth, async(ctx) => {
    const r = await Promise.all([
		User.likeTotal(1),
		User.collectTotal(1),
		User.noteTotal(1)
	])
	success(null, {
		likeNum: r[0],
		collectNum: r[1],
		noteNum: r[2]
	})
})

module.exports = router