const requireDirectory = require('require-directory')
const Router = require('koa-router')

class InitManger {
  //进行一些初始化操作
  static InitCore (app){
  	// 接收传过来的Koa实例
    InitManger.app = app
    // 调用封装了动态加载路由的函数
    // 静态方法只能通过类名调用
    InitManger.InitLoadRouters()
    InitManger.loadHttpException()
  }

  // 封装动态加载路由的函数
  static InitLoadRouters () {
    // process.cwd()方法可以获取项目的根路径
    // 路由文件放在了项目的根目录的api文件夹下
    const apiDirectory = `${process.cwd()}/routes`
    
    //requireDirectory实现路由自动加载
    requireDirectory(module, apiDirectory, {
        visit: ModuleLoad
    })

    function ModuleLoad (obj) {
        // 如果是路由就进行注册
        if(obj instanceof Router){
            InitManger.app.use(obj.routes())
        }
    }
  }

  // 全局http异常初始化
  static loadHttpException () {
    global.errs = require('./errors');
  }
}


module.exports = InitManger
