import axios from 'axios'
import {Notification} from 'element-ui'
import store from '../store/index'
import { getCookie } from './auth'

const Service = axios.create( {
  baseURL: 'http://127.0.0.1:7001',
  timeout: 5000
})
Service.interceptors.request.use(config => {
  const token = getCookie('token')
  if(token) {
    config.headers['Authorization'] = 'Bearer ' + token
  }
  return config
},error => {
  return Promise.reject(error)
})

Service.interceptors.response.use(response => {
  // 响应在 2xx 范围内
  if(response.data && response.data.code === 0) {
    return Promise.resolve(response.data)
  }else {
    Notification.error({
      title: response.data.message
    })
    return Promise.reject(response.data)
  }
}, error => {
  if(error.response) {
    // 一种错误 请求成功 但是响应不在 2xx
    const status = error.status
    const res = error.response.data
    Notification.error({
      title: res.message
    })
    return Promise.reject(res)
  }else {
    // 其他的错误 比如 超时,代码错误...
    if(error.message.indexOf('timeout') > -1) {
      Notification.error({
        title: '请求超时请重试'
      })
    }else {
      Notification.error({
        title: '抱歉出现了一个错误!'
      })
    }
    return Promise.reject(error.message)
  }
})

export default Service