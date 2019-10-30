import Vue from 'vue'
import Vuex from 'vuex'

import orderStore from './order'

Vue.use(Vuex)

const store = new Vuex.Store({
  mudules: {
    orderStore

  }
})

export default store
