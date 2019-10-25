<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['msg'],
  mounted() {
    this.getRestaurants()
    this.getMusics()
    this.getLocalUsers()
    this.getJsonServerData()
  },
  methods: {
    // 获取饿了么的餐馆列表
    getRestaurants() {
      let url = 'http://localhost:8080/restapi/shopping/v3/restaurants?latitude=22.625609&longitude=113.837925&offset=0&limit=8&extras[]=activities&extras[]=tags&extra_filters=home&rank_id=&terminal=h5'
      axios({
        url: url,
        method: 'GET'
      }).then(res => {
        console.log('餐馆列表', res)
      })
    },
    // 获取JayZhou歌曲列表
    getMusics() {
      let url = 'http://localhost:8080/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=56379327078885827&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=%E5%91%A8%E6%9D%B0%E4%BC%A6&g_tk=5381&loginUin=0&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0'
      axios({
        url: url,
        method: 'GET'
      }).then(res => {
        console.log('音乐列表', res)
      })
    },
    // 获取本地模拟的用户列表数据
    getLocalUsers() {
      axios({
        url: 'http://localhost:8080/data/users.json',
        method: "GET"
      }).then(res => {
        console.log('用户列表', res)
      })
    },
    // 获取json-server服务数据
    getJsonServerData() {
      axios({
        url: 'http://localhost:3000/users',
        method: "GET"
      }).then(res => {
        console.log('json-server', res)
      })
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.qf {
  color: red;
}
</style>
