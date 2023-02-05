module.exports = {
    database:{
        host:'localhost',
        port:3306,
        database:'hznu',
        user:'root',
        password:'123456',
    },
    secrets:{
        secretKey:'noter2023', 
        expiresIn: 60 * 60 * 24 * 30,
    },
}