const koa = require('koa')

const app = new koa()
const port = 8010

app.listen(port,()=>{
    console.log(`now listening ${port}`)
})