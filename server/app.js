require('module-alias/register');
const koa = require('koa')
const cors = require('@koa/cors');
const bodyParser = require('koa-bodyparser');
const initManager = require('@/util/initManager')
const catchError= require('@/middlewares/exception')
const { db } = require('@/db')

const app = new koa()
const port = 8030

require('./db/asso')
//创建数据库表？
db.sync();

app.use(cors());
app.use(bodyParser());
//中间件捕捉异常
app.use(catchError);
//初始化路由
initManager.InitCore(app)

app.listen(port,()=>{
    console.log(`now listening ${port}`)
})