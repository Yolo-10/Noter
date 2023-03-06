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

    ctx.auth = { id: decode }
    // TODO:此处读取的auth是有值得，但ctx没有auth这个属性，思考为什么
    // console.log(1111,ctx.auth)

    await next()
}

module.exports = {
    auth,
}