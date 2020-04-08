import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import menus from './menus'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    menus
  },
  getters
})
