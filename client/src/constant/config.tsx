export const BASE_URL = 'http://localhost:8030'

export const COOKIE = {
    cookieName: 'MorningBlog',
    expires : 7 * 24 * 60 * 60* 1000, //7天
}

export const MENU_MAIN = [
    {name:'首页',key:'/'},
    {name:'创作中心',key:'/my'},
]

export const MENU_MY = [
    {name:'个人主页',key:'/profile'},
    {name:'账号设置',key:'/setting'},
]

export const HOME_TAB = [
    '所有',
    '标签'
] 

export const GITHUB_CONFIG = {
    clientID : '55280d745fd8bb0a098e',
    redirectUri : 'http://localhost:3000/login',
}
