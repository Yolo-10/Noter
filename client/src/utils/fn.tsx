import { notification } from "antd"

export const isN = (e: string | null | undefined) => {
    return ((e===null)||(e===undefined)||(e===''))
}

export const getUrlParams = (url:string) => {
    if(url.indexOf('?') === -1) return null
    let paramsArr = url.split('?')[1].split('&')
    if(paramsArr.length === 0) return null
    let res : { [key: string]: string }= {}
    paramsArr.map((obj) => {
        let [key, value] = obj.split('=');
        res[key] = value
    })
    return res
}

export const msg = (info:string) => {
    notification.info({
        message: '提示',
        description: info,
        placement: 'topLeft',
        duration: 2,
        style: {
            width: 300,
            color:'#ff0000',
            background: 'rgba(255,255,255,.9)',
        },
    })
}