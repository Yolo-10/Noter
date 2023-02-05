const koa = require('koa')
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const app = new koa()
const port = 8010

app.use(cors());
app.use(bodyParser());

app.listen(port,()=>{
    console.log(`now listening ${port}`)
})