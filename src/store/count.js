const countStore = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state, payload) {
      state.count += payload
    },
    sub(state, payload) {
      state.count -= payload
    }
  },
  actions: {
    asyncAdd(store, payload) {
      setTimeout(()=>{
        store.commit('add', payload)
      }, 1000)
    },
    asyncSub(store, payload) {
      setTimeout(()=>{
        store.commit('sub', payload)
      }, 1000)
    }
  }
}

export default countStore
