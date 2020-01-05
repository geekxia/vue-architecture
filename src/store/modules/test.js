import { getZjlMusic } from '@/utils/api'

const testStore = {
  // 如果是分模块来管理store，一定要加这个属性
  namespaced: true,
  // 状态、数据
  state: {
    count: 0,
    msg: 'hello vuex',
    list: []    // 周杰伦音乐列表
  },
  getters: {
    msg2(state) {
      return state.msg + ' 1916'
    },
    msg3(state) {
      return state.msg + ' 1917'
    }
  },
  // 同步方法，这是改变state的唯一方式
  mutations: {
    add(state, payload) {
      console.log('store mutations add', payload)
      state.count += payload
    },
    sub(state, payload) {
      console.log('store mutations sub', payload)
      state.count -= payload
    },
    mul(state, payload) {
      state.count *= payload
    },
    changeMsg(state, payload) {
      state.msg = payload
    },
    changeList(state, payload) {
      state.list = payload
    }
  },
  // 异步方法，所有调取后端接口的api，都在这里封装
  actions: {
    getMsgOfAjax(store) {
      setTimeout(()=>{
        store.commit('changeMsg', 'hello 1916')
      }, 1000)
    },
    getMusic(store) {
      getZjlMusic().then(res=>{
        store.commit('changeList',res.song.list)
      })
    }
  }
}

export default testStore
