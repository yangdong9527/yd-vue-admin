import request from '@/utils/request.js'

function getRole(params) {
  return request({
    url: '/role',
    method: 'get',
    params
  }) 
}

function getTree(params) {
  return request({
    url: '/menu/tree',
    method: 'get',
    params
  })
}

function addRole(data) {
  return request({
    url: '/role',
    method: 'post',
    data
  })
}

function update(data) {
  return request({
    url: '/role',
    method: 'put',
    data
  })
}

function delRole(params) {
  return request({
    url: '/role',
    method: 'delete',
    params
  })
}

export default {
  getRole,
  getTree,
  addRole,
  update,
  delRole
}