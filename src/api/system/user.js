import request from '@/utils/request'

function getUser(params) {
  return request({
    url: '/user',
    method: 'get',
    params
  })
}

function getRole() {
  return request({
    url: '/role/options',
    method: 'get'
  })
}

function addUser(data) {
  return request({
    url: '/user',
    method: 'post',
    data
  })
}

function updateUser(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  })
}

function delUser(params) {
  return request({
    url: '/user',
    method: 'delete',
    params
  })
}

export default {
  getUser,
  getRole,
  addUser,
  updateUser,
  delUser
}