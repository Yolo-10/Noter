## Todo

- [x] 1. 封装`post`和`get`请求
- [x] 2. 拦截器
     封装 axios 请求，封装所有请求的基本形式，请求头加 token+错误返回提醒，接受参数，返回 axios 请求
     post、get 请求传递参数，调用以上封装的函数
- [x] 3. 登录成功后存储 token
     componentDidMount 中获取路径中的参数,有 code 就需要向后端请求获取用户数据，之后保存 token
- [x] 如何使用 UseCallback 优化上述过程
      无需，只有当函数作为 props 或者是 effect 依赖时，当页面重新渲染时，函数地址重新规划，引起无需改变的其他变化，才需要 useCallback 凸显效果
- [x] 4. 页面初步加载，获取 Cookie(或 localStorage)中的 token
     封装 cookie 存储 token 的工具类, 在 App.jsx 中的 componentDidMount 从 cookie 中获取 token ,拿着 token 像后端 token 的有效性, dispatch 解码 token,调用 action 将用户信息保存在 redux 中
- [ ] 个人主页、账号设置、主页、标签页、编辑笔记、搜素
- [ ] 5. 获取路径参数：useLocation、useHistory、useParams、useMatch 几种的区别使用
- [x] 6. 如何判断 token 失效:try catch 获取 jwt.verity 过程的错误,token 失效或者不合法会抛出对应的操作
- [x] 7. 阅读 KOA 中的 next，理解 next 以及学习如何读源码
- [ ] 8. markdown 问题 7：代办的点点如何去除？暂无头绪?以及左边滚动条的鼠标样式如何改成 箭头
- [x] 9. highlight 仍然存在问题（cnpm i highlight.js 重新安装 highlight.js 成功）
- [x] 10.markdown 上传附件功能，useCallback 优化，图片上传功能，回车换行功能
- [ ] 11.百度地图；树状图
- [x] 12.title 字数计算框、保存提交填写不完整鉴定、后端字段鉴定、返回 400 的提示
- [ ] 13. 编辑页缺少题图、标签选择提交、首页缺少时间处理、回到顶部、所有标签切换、最热列表

[GitHub OAuth](https://ruanyifeng.com/blog/2019/04/github-oauth.html)

[Cookie、localStorage 和 sessionStorage 的区别](https://juejin.cn/post/6970291738652966942#heading-4)

[koa2 中间件里面的 next 到底是什么](https://www.cnblogs.com/cloud-/p/7239819.html)

[一次性 import 整个目录下的所有 svg 文件](https://juejin.cn/post/7049982240880590878)

[未定义'\_\_WebpackModuleApi'(非未定义)](https://www.saoniuhuo.com/question/detail-2198811.html)

[require.context 实现引用全部 js 文件或 svg 文件](https://www.cnblogs.com/mengff/p/12783812.html)

[如何在 React 项目中优雅的使用 SVG](https://juejin.cn/post/6977184089862307854)
[Sequelize 官网翻译八 —— 原生查询 sequelize.query](https://zhuanlan.zhihu.com/p/125022799)

[js 语法性能优化](https://blog.csdn.net/weixin_36193690/article/details/115756354?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167772756616782427464643%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=167772756616782427464643&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_ecpm_v1~rank_v31_ecpm-22-115756354-null-null.142^v73^wechat_v2,201^v4^add_ask,239^v2^insert_chatgpt&utm_term=js%E5%AD%97%E7%AC%A6%E8%BD%AC%E6%8D%A2%E6%88%90%E6%95%B0%E5%AD%97%20%E6%80%A7%E8%83%BD%E6%AF%94%E8%BE%83&spm=1018.2226.3001.4187)

[前端文件的上传和下载](https://juejin.cn/post/7074869887759286280)

[前端本地文件操作与上传](https://juejin.cn/post/6844903513882001422)

[Object.assign](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)

[JS 数组和对象相互转换方法](https://blog.csdn.net/petertanjinjie/article/details/110102932)

[MySQL 中如何对数据进行排序](https://blog.csdn.net/Sihang_Xie/article/details/125490823)

## 第三方库

### Sequelize[链接](https://www.sequelize.cn/)

Sequelize 是一个基于 promise 的 Node.js ORM(对象关系映射)
orm 可以简化操作数据库，更好的约束数据类型
[node orm Sequelize 的简单使用](https://juejin.cn/post/6990992410075463687#heading-0)

### loadsh[链接](https://www.lodashjs.com/)

Lodash 是一个一致性、模块化、高性能的 JavaScript 实用工具库。

### reduxjs/toolkit

[js 快速开始](https://cn.redux.js.org/tutorials/quick-start#%E4%BD%BF%E7%94%A8%E6%80%BB%E7%BB%93)
[ts 应用案例](https://cn.redux.js.org/tutorials/essentials/part-2-app-structure#%E5%BA%94%E7%94%A8%E7%9B%AE%E5%BD%95)
[Redux 步逻辑与数据请求](https://cn.redux.js.org/tutorials/essentials/part-5-async-logic/#使用-createasyncthunk-请求数据)

Redux Toolkit 是 Redux 官方强烈推荐，开箱即用的一个高效的 Redux 开发工具集。
Redux store 对异步逻辑一无所知。它只知道如何同步 dispatch action，通过调用 root reducer 函数更新状态，并通知 UI 某些事情发生了变化。需要中间件处理异步逻辑 + `createAsyncThunk` API。

<img src="https://cn.redux.js.org/assets/images/ReduxAsyncDataFlowDiagram-d97ff38a0f4da0f327163170ccc13e80.gif
" style="zoom: 33%;" />

### react-cookie

React-cookie：React 使用 cookie

```js
// 存储
cookie.save(key, value, {})
// 加载
cookie.load(key)
// 删除
cookie.remove(key)
```

## CSS

### 控制兄弟节点的 display

```scss
//控制兄弟节点的display!!!  [img与m-sub_menu互为兄弟节点]
img {
  border-radius: 20px;

  //控制兄弟节点的display!!!
  &:hover + .m-sub_menu {
    display: block;
  }
}
```

### 单行文本、多行文本省略号的效果

[省略号](https://blog.csdn.net/Zhwsy/article/details/128852239)

### 去除 textarea 的红波浪线、蓝色下划线

红波浪线、蓝色下划线是浏览器自带的语法检查导致的，添加属性 spellcheck="false" 即可去除该波浪线

```js
<textarea spellCheck="false"></textarea>
```

### p 标签文字过长自动换行(h 标签也会...)==>属性提升:放到父元素中

[html 内容超出了 div 或 p 的宽度 让内容自动换行](https://blog.csdn.net/u013344860/article/details/79475277)
word-wrap:break-word,或 word-break:break-all

### 滑动条样式

[滑动条样式](https://juejin.cn/post/6997011443967066143)

## Github Auth 流程([流程图](https://juejin.cn/post/6844903957827944462#heading-22))

### 用户授权该网站得到授权码

1. 点击按钮
2. 跳转到 github 授权网址

```js
//client_id告诉 GitHub 谁在请求 , 网站的id
//redirect_uri是稍后跳转回来的网址

https://github.com/login/oauth/authorize?
    client_id=7e015d8ce32370079895&
    redirect_uri=http:/3000/login
```

3. 用户授权，授权成功，跳转到 redirect_uri 的网址，并带上授权码

```js
http://localhost:3000/login?code=b40e2a1cf08b7884d2ea
```

### 向`github`去获取用户数据

4. 前端获取路径中的 `code`，发起一个后端请求

5. 后端中向 `github` 地址请求令牌

```js
//github.com/login/oauth/access_token?' +
https: `client_id=${clientID}&` +
  `client_secret=${clientSecret}&` +
  `code=${requestToken}`
```

6. 拿着令牌去获取 github 的用户数据

```js
https://api.github.com/user`,
headers: {
    accept: 'application/json',
    Authorization: `token ${accessToken}`
}
```

## 登录鉴权流程

1. 部分路由未登录时可访问，部分不可访问
   操作：使用 useRoutes 生成路由中，使用鉴权组件 Auth 包裹权限路由，鉴权组件 Auth 内判断当前的 store 中是否已经存储 token，没有则跳转至登录页
2. 进入登录页，点击 github 第三方登录按钮，初次会有授权页面出现，授权成功后会跳转到 redirect_uri(授权码 code 以键值对的形式在路径中)
3. redirect_uri(此处设置为/login), login 组件中加入页面初次加载事件，判断路径是否存在 code 参数，有的话，拿着 code，向后端发送一个请求
4. 后端请求中向 github 申请令牌，再拿着令牌向 github 拉取用户数据，数据库内如何未有该账户，加入该账户；并拿着用户数据生成一个 token 返回
5. token 返回后 store 与 Cookie(或 localStorage)中存储 token
6. 封装的 axios 请求中，需要每次将 token 放在请求头中，后端如果需要用户 id 等数据的话，从 token 中取
7. 整个应用初步加载时，需要判断 Cookie(或 localStorage) 是否已经有 token 了，如果有，就算登录了

## 权限控制

1. 普通按钮显示权限：在具体 HTML 位置中，根据 store 的 userInfo 判断显隐
2. 菜单权限：根据 store 的 userInfo(role)[1|1|1|...], 每个数字表示该角色是否拥有每个页面的权限，有相应权限就对应加载————相关路由菜单按钮
3. 路由跳转校验权限：使用鉴权组件 Auth 包裹权限路由，Auth 中判断 store 中存储的 userInfo 是否存在和是否存在该访问，不存在就跳转到登录页面
4. api 权限：在后端需要鉴权的 api 中加入 jwt.verity 的鉴定

## axios 中的 get 与 post

1. 三种请求方式：`axios.post()`,`axios.get()`,`axios()`
2. `axios.get(带参数的 url)`

```js
axios.get("http://localhost:8080/api?list=1&&age=12")
给后端的参数是 ==> list:1 age:12
```

3. `axios.post(url,{data 键值对})`

```js
axios.post("http://localhost:8080/api", {
  list: 1,
  age: 12,
})
```

4. 通用

```js
axios({
  url: "http://localhost:8080/api", // ==>请求地址
  params: {}, //==> get请求传参
  data: {}, //==> post请求传参
  method: "post/get", //==> 请求方式
})
```

## useMemo、useCallback

[useMemo](https://juejin.cn/post/6889815642099335181#heading-3)

[如何正确的在 useEffect 里请求数据 - 掘金 (juejin.cn)](https://juejin.cn/post/7079725009811275784#heading-6)

一个父组件中存在两个子组件，每个子组件中都有默认执行的一些语句，当一个组件的内容改变后，引起整个父组件都重新渲染,其实另一个子组件一点都没有改变，但是一些语句又执行了一次，使用 memo 可以性能优化

而如果以 props 的形式传递函数给子组件，当一个组件的内容改变后，父组件重新渲染，由于复杂类型函数会发生改变，引起本不该发生任何变化的子组件再度执行了一次，此种场景就可以使用 `useMemo|useCallback` 这两个 api

只有当函数作为 props 或者是 effect 依赖时，当页面重新渲染时，函数地址重新规划，引起无需改变的其他变化，才需要 useCallback 凸显效果

## ts 学习指南

[typescript 总结学习](https://juejin.cn/post/7124117404187099172#heading-1)

[TypeScript 入门教程 ](https://ts.xcatliu.com/introduction/index.html)

## next(链接)[https://www.cnblogs.com/cloud-/p/7239819.html]

先注册的后执行
看源码方法：debug + 例子带入理解

## Markdown 组件

功能栏：

加粗、斜体、标题、删除线

无序、有序、待办、引用、代码块

图片、链接、保存

1. 问题 1：如何实现实时编写，实时预览

- [markdown 语法解析器](https://www.jianshu.com/p/549cace91e22)

- [marked 的使用](https://cloud.tencent.com/developer/article/1961057)

- [useRef 的使用](https://blog.csdn.net/weixin_46797477/article/details/120832949)
  使用 marked 库去解析，编辑区用 textarea 标签，预览区用 div 标签，需要在每次左边的值发生更改的同时渲染成右边，故采用了 onKeyUp 事件,并用 useRef 标记 textarea 对象，用 ref.current.value 获取其身上的值，使用 marked 编译成 html 语法，用 setPrev 设置预览区内容 prev

  bug:onKeyUp 不能完全保证，如果是鼠标事件剪切的话，无法监听到变化，右边的预览区不行!

  解决：react 中 textarea 上有一个 value 属性,以及 onChange 事件；这里结合 value、change 属性对原有代码进行更改了，可以实现键盘输入、粘贴时改变数据而更新预览区的代码了！！！

2. 问题 2：如何直接将变量放置在 div 标签中，是会直接以 html 输出，没有编译，如何在 react 渲染 html？

- [React 中如何渲染 HTML 代码](https://juejin.cn/post/6844903989390245901)

```js
<div dangerouslySetInnerHTML={{ __html: this.state.Html1 }}></div>
```

3. 问题 3：一点小改进，onKeyUp 是绑定在 textarea 对象上的，要获取的编辑区值也是 textarea 身上的，是否可以不用 ref，直接用 e 这个鼠标键盘事件的获取来接收数据？
   解决：试验后可以！用 e.target.value 直接获取到了数据。

4. 问题 4：下载 highlight.js 一直报错https://registry.npmmirror.com/highlight.js/-/highlight.js-11.6.0.tgz response 502 status ，502 官网下载链接出错
   解决：从官网直接下载了包，导入 node_modules 中/ cnpm i highlight.js
   (npm install highlight.js --save --legacy-peer-deps 导入的好像不能生效)
5. 问题 5： 有序、无序列表不显示序号、原点；引用文字、代码块无背景？；链接无颜色？；以及编辑区、预览区长度无滚动条，会超出!

   - [x] 有序、无序：css 样式 list-style 被改成 none 了，修改回来
   - [x] 引用文字、链接: blockquote 自己新增样式
   - [x] 代码块：highlight 仍然存在问题（解决：`cnpm i highlight.js` 重新安装 highlight.js ）
   - [x] 左右滚动条: --webkit-scrollbar、--webkit-scrollbar-thumb 伪类设置滑动条样式

6. 问题 6：编辑区 textarea 标签内文字过长，会自动换行，但是预览区 p 标签并不会自动换行，引起超出页面范围，不想 overflow-x 整个页面，如何解决？
   解决：CSS 属性 word-wrap:break-word,或 word-break:break-all

7. 问题 7：代办的点点如何去除？暂无头绪

8. 问题 8：同步滚动

   思路： 获取一边的滑动比例 scrollTop/scrollHeight，再令另一边的 scrollTop=scrollHeight\*比例

   获取一边的 scrollTop: onScroll 事件 event.target.scrollTop/scrollHeight

   设置另一边：useRef，ref.current.scrollTop

   代码通用性：两个 ref，都注册 onScroll 事件，onScroll 中传递对象 ref

   **bug**：一边滚动引起另一边的滚动，另一边的滚动又引起这一边的滚动，无限循环，不会停止
   onScroll->handleScroll->driveScroll->onScroll->handleScroll->driveScroll
   **重点**：判断是因为自己引起的 scroll 还是因为其他人同步带动的 scroll

   > 解决：
   > scrollingItem 记录滑动的是谁（0 为无人，1 为左，2 为右）
   > 自发开始（scrollingItem=0） 将 scrollingItem 置为 1，继续
   > 自发继续（scrollingItem=自己） 继续
   > 自发结束（scrollingItem=0） 一定时间内，同步事件不被触发，将 scrollingItem 置为 0（防抖：n 秒内时间不触发则执行，被触发则重新计时）
   > 被引起的（scrollingItem!=0 且不等于自己） return

9. 问题 9:左边点击事件
   （1）获取 textarea 中的光标位置：

   ```js
   refInput.current?.selectionStart
   refInput.current?.selectionEnd
   ```

   (2) 改变 textarea 的值: value+useState+slice 切片
   需要改变 textarea 的值，要获取原有的值，可以用 ref.current.value,但 react 中 textarea 上有一个 value 属性,指定值,这里结合 value、change 属性对原有代码进行更改了，可以实现键盘输入、粘贴时改变数据而更新预览区的代码了！！！要更改 textarea 的值可以直接使用 setState 更改了，slice()函数对原来数据进行切片，而后进行字符串拼接就可以实现点击效果了！

   ```js
   <textarea value={inpV} onChange={(e) => doInsPre(e)} />
   ```

   (3) 改变值后的光标选择：setSelectionRange(start,end)
   问题代码:(光标选择无效)

   ```js
   setInpV(str)
   refInput.current?.setSelectionRange(newSelSt, newSelEd)
   ```

   原因:setInpV 是异步操作，setInpV 导致 inpV 改变，组件重新 render 了一次,程序会先 setSelectionRange 后再 render,使得光标选择的消失了，没有效果了

   解决:(注意! setTimeout 开启一个定时器,就要及时去除定时器,否则当定时器过多时会引起内存泄露)

   ```js
   if (timer2) clearTimeout(timer2)
   timer2 = setTimeout(() => {
     refInput.current?.focus()
     refInput.current?.setSelectionRange(newSelSt, newSelEd)
     clearTimeout(timer2)
   }, 50)
   setInpV(str)
   ```

   (4) 是否换行: 有序列表、无序列表、代办、引用需要换行；其他无需
