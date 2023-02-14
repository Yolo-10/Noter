import axios from "axios";
import { message } from "antd";
import { getToken } from "./token";

// 所有请求
// 拦截器:加token,处理返回
// TODO:是否需要allRes字段
const request = (url = '', options = {}) => {
    // 获取token
    let token = getToken();
    // 加token
    token ? axios.defaults.headers.common.Authorization = token :
        delete axios.defaults.headers.common.Authorization
    
    return axios({
        url,
        ...options,
    }).then(r => {
        if (r && r.status === 200) {
            return r.data
        } else {
            message.error('网络错误')
        }
    }).catch(e => {
        if(e.response) {
            message.error(e.response.data.message)
            return e.response.data
        }
        message.error('网络错误')
    })
}
export default request

export const get = (url:string,params:{}) => {
    // TODO:是否需要处理参数
    // 返回请求
    return request(
        url,
        { 
            method: 'GET',
            params,
        }
    )
}

export const post = (url: string, data: {}) => {
    return request(
        url,
        {
            method: 'POST',
            data,
        }
    )
}