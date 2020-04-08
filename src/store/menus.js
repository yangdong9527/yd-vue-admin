import{ routes } from '../router/router'
const menus = {
  state: {
    menus: routes,
    asyncRouter: []
  },
  mutations: {
    SET_ASYNCROUTER(state, val) {
      state.menus = state.menus.concat(val)
      return state.asyncRouter = val
    }
  },
  actions: {
    set_menus({commit}, asyncRouter) {
      commit('SET_ASYNCROUTER', asyncRouter)
    }
  }
}

export default menus