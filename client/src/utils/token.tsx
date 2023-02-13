import { COOKIE_NAME } from "@/constant/config"
import cookie from 'react-cookies'

export const getToken = () => {
    return cookie.load(COOKIE_NAME)
}

export const saveToken = (token:string) => {
    cookie.save(COOKIE_NAME,token,{})
}

export const removeToken = () => {
    cookie.remove(COOKIE_NAME)
}
