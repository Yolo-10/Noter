module.exports = {
    database:{
        host:'localhost',
        port:3306,
        dbName:'noter',
        user:'root',
        password:'123456',
    },
    secrets:{
        secretKey:'noter2023', 
        expiresIn: 60 * 60 * 24 * 30,
    },
    github: {
		client_id: '55280d745fd8bb0a098e',
		scope: 'user:email',
		client_secret: 'd0d02698055c810bb18f46fdc43ad2d78e964603'
	},
}