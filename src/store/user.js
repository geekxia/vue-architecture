const userStore = {
  namespaced: true,
  state: {
    msg: '2222'
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
      }, 2000)
    }
  }
}

export default userStore
