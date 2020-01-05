const orderStore = {
  namespaced: true,
  state: {
    msg: 'order msg'
  },
  mutations: {
    changeMsg(state, payload) {
      state.msg = payload
    }
  },
  actions: {
    getMusic() {
      setTimeout(()=>{
        console.log('order store getMusic')
      }, 2000)
    }
  }
}

export default orderStore
