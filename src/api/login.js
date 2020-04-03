import request from '@/utils/request.js'

export function loginAPI(data) {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

export function registerAPI(data) {
  return request({
    url: '/user/register',
    method: 'post',
    data
  })
}