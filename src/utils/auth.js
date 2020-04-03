import Cookie from 'js-cookie'

export function setCookie(key, val){
  return Cookie.set(key, val)
}

export function getCookie(key) {
  return Cookie.get(key)
}

export function removeCookie(key) {
  return Cookie.remove(key)
}