import {Cookies} from 'react-cookie'

const cookies: Cookies = new Cookies()

export const setCookie = (name: string, value: string, days: number) => {
  const expires = new Date()
  expires.setUTCDate(expires.getUTCDate() + days) //보관기한
  return cookies.set(name, value, {path: '/', expires: expires})
}

export const getCookie = (name: string) => {
  return cookies.get(name)
}

export const removeCookie = (name: string, path: string = '/') => {
  cookies.remove(name, {path})
}
