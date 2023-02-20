const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { auth } = require('../middlewares/auth')
const { User } = require('../db/models/user')
const { success } =require('../util/success') 

/**
 * 用户所获得的所有点赞、收藏、文章总数接口
 */
router.get('/status', auth, async (ctx) => {
	// TODO:Promise.all什么用，此处的ctx无auth
    const r = await Promise.all([
		User.likeTotal(ctx.auth.id), //TODO:这个函数内部才有
		User.collectTotal(ctx.auth.id),
		User.noteTotal(ctx.auth.id)
	])
	success(null, {
		likeNum: r[0],
		collectNum: r[1],
		noteNum: r[2]
	})
})

module.exports = router