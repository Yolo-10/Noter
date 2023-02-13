const Router = require('koa-router');
const axios = require('axios');
const { github } = require('../config/constant')
const { success } = require('../util/success')
const { generateToken } = require('../util/jwtToken')
const { User } = require('../db/models/user')

//自动加前缀
const router = new Router({ prefix: '' });

// github授权登录
router.get('/oauth', async (ctx) => {
  //拿到授权码
  const code = ctx.query.code;
  // 向 GitHub 请求令牌
  const authResp = await axios({
    method: 'post',
    url: 'https://github.com/login/oauth/access_token?' +
      `client_id=${github.client_id}&` +
      `client_secret=${github.client_secret}&` +
      `code=${code}`,
    headers: {
      accept: 'application/json'
    }
  })

  if (authResp?.data?.access_token) {
    // 有了令牌，向github请求用户数据
    const resp = await axios({
      method: 'get',
      url: `https://api.github.com/user`,
      headers: {
        accept: 'application/json',
        Authorization: `token ${authResp.data.access_token}`
      }
    });

    // 拿到用户数据，本平台内登录，获取数据
    if (resp?.status === 200) {
      const { token, user } = await generateData(resp.data);
      success('已获取 token', { token, user, type: 233 });
    }
  } else {
    throw new global.errs.Forbidden();
  }
});

// 从github中获取用户数据，（并向用户表新增一条数据），生成token等信息返回
async function generateData(githubUser){
  const user = await User.getUserByGithubId(githubUser);
  const token = generateToken(user.id);
  return {
    token,
    user,
  };
}

module.exports = router