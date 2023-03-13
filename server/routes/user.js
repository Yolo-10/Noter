const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { auth } = require('@/middlewares/auth')
const { User } = require('@/db/models/user')
const { success } = require('@/util/success') 
const { UserModifyValidator } = require('@/util/validator')
const { generateToken } = require('@/util/jwtToken')

// 用户所获得的所有点赞、收藏、文章总数接口
router.get('/status', auth, async (ctx) => {
	// TODO:Promise.all什么用
    const r = await Promise.all([
		User.likeTotal(ctx.auth.id),
		User.collectTotal(ctx.auth.id),
		User.commentTotal(ctx.auth.id),
		User.noteTotal(ctx.auth.id)
	])
	success(null, {
		likeNum: r[0],
		collectNum: r[1],
		noteNum: r[2]
	})
})

// 更新个人资料
router.post('/modify', auth, async (ctx) => {
	const v = await new UserModifyValidator().validate(ctx)
	await User.modifyInfo(v.get('body'), ctx.auth.id)
	const u = await User.getUserInfo(ctx.auth.id)
	const t = generateToken(u)
	success("信息更新成功",{token:t,user:u})
})

// 登录时鉴定token有效性
router.get('/verity', auth, async (ctx) => {
	success("登录成功")
})

module.exports = router