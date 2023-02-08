[GitHub OAuth](https://ruanyifeng.com/blog/2019/04/github-oauth.html)
[Cookie、localStorage和sessionStorage的区别](https://juejin.cn/post/6970291738652966942#heading-4)

## 第三方库

### Sequelize[链接](https://www.sequelize.cn/)
Sequelize 是一个基于 promise 的 Node.js ORM(对象关系映射)
orm 可以简化操作数据库，更好的约束数据类型
[node orm Sequelize的简单使用](https://juejin.cn/post/6990992410075463687#heading-0)

### loadsh[链接](https://www.lodashjs.com/)
Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

### reduxjs/toolkit
[js快速开始](https://cn.redux.js.org/tutorials/quick-start#%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93)
[ts应用案例](https://cn.redux.js.org/tutorials/essentials/part-2-app-structure#%E5%BA%94%E7%94%A8%E7%9B%AE%E5%BD%95)
[Redux步逻辑与数据请求](https://cn.redux.js.org/tutorials/essentials/part-5-async-logic/#使用-createasyncthunk-请求数据)

Redux Toolkit 是 Redux 官方强烈推荐，开箱即用的一个高效的 Redux 开发工具集。
Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。需要中间件处理异步逻辑 + `createAsyncThunk` API。

<img src="https://cn.redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif
" style="zoom: 33%;" />

## CSS
```scss
//控制兄弟节点的display!!!  [img与m-sub_menu互为兄弟节点]
img{
    border-radius: 20px;

    //控制兄弟节点的display!!!
    &:hover+.m-sub_menu{
        display: block;
    }
}
```

## Github Auth流程([流程图](https://juejin.cn/post/6844903957827944462#heading-22))
### 用户授权该网站得到授权码

1. 点击按钮
2. 跳转到github授权网址
```js
//client_id告诉 GitHub 谁在请求 , 网站的id
//redirect_uri是稍后跳转回来的网址

https://github.com/login/oauth/authorize?
    client_id=7e015d8ce32370079895&
    redirect_uri=http://localhost:8080/oauth/redirect)
```
3. 用户授权，授权成功，跳转到redirect_uri的网址，并带上授权码
```js
http://localhost:8080/oauth/redirect?code=859310e7cecc9196f4af
```

### 后端拿着授权码向github得令牌，拿令牌获取资源
4. `8080`后端端口，`/oauth/redirect`路由地址中操作

5. 向github地址请求令牌
```js
https://github.com/login/oauth/access_token?' +
    `client_id=${clientID}&` +
    `client_secret=${clientSecret}&` +
    `code=${requestToken}`
```

6. 拿着令牌去获取github的用户数据
```js
https://api.github.com/user`,
headers: {
    accept: 'application/json',
    Authorization: `token ${accessToken}`
}
```
