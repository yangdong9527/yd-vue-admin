import { loginAPI , getInfo} from '@/api/login.js'
import { getCookie, setCookie, removeCookie } from '@/utils/auth.js'
const user = {
  state: {
    info: '',
    token: getCookie('token') || ''
  },
  mutations: {
    SET_INFO(state, val) {
      
      return state.info = val
    },
    SET_TOKEN(state, token) {
      return state.token = token
    }
  },
  actions: {
    Login({commit}, params) {
      return new Promise((resolve, reject) => {
        loginAPI(params).then(res => {
          let {info, menus, token} = res.data
          commit('SET_INFO', {info, menus})
          commit('SET_TOKEN', token)
          setCookie('token', token)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },
    loginOut({commit}) {
      return new Promise((resolve, reject) => {
        removeCookie('token')
        removeCookie('user')
        commit('SET_INFO', '')
        commit('SET_TOKEN', '')
        resolve()
      })
    },
    getInfo({commit}) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          commit('SET_INFO', res.data)
          resolve(res)
        }).catch(err => {
          reject(err)
        })
      })
    }
  }
}

export default user