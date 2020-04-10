import request from '@/utils/request.js'

export function getMenu(params) {
  return request({
    url: '/menu',
    method: 'get'
  })
}

export function getTree(params) {
  return request({
    url: '/menu/tree',
    method: 'get',
    params
  })
}

export function addMenu(data) {
  return request({
    url: '/menu',
    method: 'post',
    data
  })
}

export function updateMenu(data) {
  return request({
    url: '/menu',
    method: 'put',
    data
  })
}

export function delMenu(params) {
  return request({
    url: '/menu',
    method: 'delete',
    params
  })
}
