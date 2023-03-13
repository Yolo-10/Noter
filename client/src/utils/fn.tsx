import { notification } from "antd"
import dayjs from 'dayjs'
import calendar from 'dayjs/plugin/calendar' 
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn') 
dayjs.extend(calendar)
dayjs.extend(relativeTime)

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

/**格式化时间：t(number)2023-03-08T08:36:08.000Z
*  5天内：相对时间
*  5天外：YY/MM/HH hh:mm:ss */
export const rTime = (t: number) => {
    const DAY_5 = 5 * 24 * 60 * 60 * 1000;
    let ro = dayjs(t);
    return dayjs().diff(ro) > DAY_5 ? ro.format('YY/MM/HH hh:mm:ss'):ro.fromNow()
}

// 缓慢滚动到头部
export const scrollToTop = () => {
    let scrT = document.documentElement.scrollTop || document.body.scrollTop
    if (scrT > 0) {
        window.scroll(0,0)
    }
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