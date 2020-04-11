import { getCookie, setCookie  } from '@/utils/auth.js'
const app = {
  state: {
    isCollapse: getCookie('isCollapse') || false
  },
  mutations: {
    SET_ISCOLLAPSE(state, val) {
      setCookie('isCollapse', val)
      state.isCollapse = val
    }
  },
  actions: {
    set_isCollapse({commit}, val) {
      commit('SET_ISCOLLAPSE', val)
    }
  }
}

export default app