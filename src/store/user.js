import { loginAPI } from '@/api/login.js'
import { getCookie, setCookie } from '@/utils/auth.js'
const user = {
  state: {
    info: '',
    roleKey: [],
    token: ''
  },
  mutations: {
    SET_INFO(state, info) {
      return state.info = info
    },
    SET_ROLEKEY(state, roleKey) {
      return state.roleKey = roleKey
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
          commit('SET_INFO', info)
          commit('SET_ROLEKEY', menus)
          commit('SET_TOKEN', token)
          setCookie('token', token)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}

export default user