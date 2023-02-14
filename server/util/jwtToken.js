const jwt = require('jsonwebtoken');
const { secretKey,expiresIn } = require('../config/constant').secrets


//根据参数生成Token
const generateToken = function (user) {
    const token = jwt.sign({ user }, secretKey, { expiresIn });
    console.log('token',token)
    return token;
};

module.exports =  {
    generateToken
}