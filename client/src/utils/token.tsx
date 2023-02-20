import { COOKIE } from "@/constant/config"
import cookie from 'react-cookies'

export const getToken = () => {
    return cookie.load(COOKIE.cookieName)
}

export const saveToken = (token: string) => {
    let time = new Date(new Date().getTime() + COOKIE.expires)
    cookie.save(COOKIE.cookieName,token,{expires:time})
}

export const removeToken = () => {
    cookie.remove(COOKIE.cookieName)
}
