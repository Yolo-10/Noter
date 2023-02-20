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
    // ctx.request.header.authorization = 1;
    console.log(decode)
    ctx.auth = {
        id: 1,
    }

    await next()
}

module.exports = {
    auth,
}