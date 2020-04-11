const app = {
  state: {
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
  },
  mutations: {
    SET_ISCOLLAPSE(state, val) {
      sessionStorage.setItem('isCollapse', val)
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