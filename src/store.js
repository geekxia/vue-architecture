import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


const store = new Vuex.Store({
  state: {
    count: 0,
    userinfo: {
      name: '1912',
      age: 20
    },
    musicList: []
  },
  mutations: {
    // 同步地修改state里面的count这个数据
    add(state, payload) {
      state.count += payload
    },
    updateUserinfo() {

    },
    updateMusicList(state, payload) {
      let list = state.musicList
      list = [...list, ...payload]
      state.musicList = list
    }
  },
  actions: {
    fetchMusics(store) {
      let url = 'http://localhost:8080/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=56379327078885827&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
      axios({
        url: url,
        method: 'GET'
      }).then(res => {
        console.log('音乐列表',  res.data.data.song.list)
        store.commit('updateMusicList', res.data.data.song.list)
      })
    },
  }
})

export default store
