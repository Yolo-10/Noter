const { HttpException } = require('../util/errors')

/**
 * 全局捕获异常中间件
 * @param ctx
 * @param next
 */
const catchError = async (ctx, next) => {
	try {
		await next()
	} catch (error) {
		if (error instanceof HttpException) {
			ctx.body = {
				code: error.code,
				data: error.data,
				message: error.message,
			}
			// TODO:多种code形式
			switch (error.code) {
				case 403: ctx.status = 403
				case 400: ctx.status = 400
			}
		} else {
			ctx.body = {
                code: error.code,
				message: '捕获到未知异常:\n' + error.stack,
				request: `${ctx.method} ${ctx.path}`,
			}
			ctx.status = 500
		}
	}
}
module.exports = catchError