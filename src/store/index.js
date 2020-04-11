import Vue from 'vue'
import Vuex from 'vuex'

import user from './user'
import app from './app'
import menus from './menus'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    user,
    menus
  },
  getters
})
