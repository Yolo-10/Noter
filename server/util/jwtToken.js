const jwt = require('jsonwebtoken');
const { secretKey,expiresIn } = require('../config/constant').secrets


//根据参数生成Token
const generateToken = function (uid, scope) {
    const token = jwt.sign({ uid, scope }, secretKey, { expiresIn });
    console.log('生成了令牌', token);
    return token;
};

module.exports =  {
    generateToken
}