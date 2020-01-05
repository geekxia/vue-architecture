import Vue from 'vue'
import Vuex from 'vuex'
import testStore from './modules/test'
import orderStore from './modules/order'
import userStore from './modules/user'
import count from './modules/count'
Vue.use(Vuex)   // 注册

// 仓库、数据中心、总部
const store = new Vuex.Store({
  modules: {
    testStore,
    orderStore,
    userStore,
    count
  }
})

export default store
