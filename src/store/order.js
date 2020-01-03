const orderStore = {
  namespaced: true,
  state: {
    msg: '1111'
  },
  mutations: {
    changeMsg(state, payload) {
      state.msg = payload
    }
  },
  actions: {
    asyncMsg(store, payload) {
      setTimeout(()=>{
        store.commit('changeMsg', payload)
      }, 1000)
    }
  }
}

export default orderStore
