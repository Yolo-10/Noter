const jwt = require('jsonwebtoken');
const { secretKey,expiresIn } = require('../config/constant').secrets


// 根据参数生成Token
const generateToken = function (user) {
    const token = jwt.sign({ user }, secretKey, { expiresIn });
    return token;
};

// 鉴定token有效性
const verifyToken = function (token) {
    return jwt.verify(token,secretKey)
}

module.exports =  {
    generateToken,
    verifyToken
}