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