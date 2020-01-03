import Vue from 'vue'
import Vuex from 'vuex'

import order from './order'
import user from './user'
import count from './count'

Vue.use(Vuex)

const store = new Vuex.Store({
  // modules 分模块
  modules: {
    order,
    user,
    count
  }
})

export default store
