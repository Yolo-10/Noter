const { verifyToken } = require('../util/jwtToken');

const auth = async(ctx, next) => {
    let decode;
    let token = ctx.request.header.authorization;

    if (!token)
        throw new global.errs.Forbidden('无令牌，请登录')
    try {
        decode = verifyToken(token).user.id;
    } catch (err) {
        if (err.name === 'TokenExpiredError') 
            throw new global.errs.Forbidden('令牌过期，请重新登录')
        else if (err.name === 'JsonWebTokenError')
            throw new global.errs.Forbidden('无效令牌，请重新登录')
    }

    // 为什么此处的输出的ctx无auth字段，next函数里面也没有，但在next的await中有
    ctx.auth = {id:decode}

    await next()
}

module.exports = {
    auth,
}