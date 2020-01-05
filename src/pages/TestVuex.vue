<template lang="html">
<div>
  <h1>vuex</h1>
  <hr>
  <h3 v-text='count'></h3>
  <button type="button" @click='addClick'>加</button>
  <button type="button" @click='subClick'>减</button>
  <hr>
  <h3 v-text='msg'></h3>
  <h3 v-text='msg2'></h3>
  <h3 v-text='msg3'></h3>
  <hr>
  <h1 v-text='fullName'></h1>

  <button type="button" @click='getMsg'>获取后端的msg</button>
  <hr>

  <div v-for="(song, idx) in list" :key='idx' v-text='song.name'></div>
  <hr>

  <h3 v-text='orderMsg'></h3>
  <button type="button" @click='orderMsgChange'>改变order里面的msg</button>

</div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'  // 映射

export default {
  data: function() {
    return {
      first: 'john'
    }
  },
  computed: {
    ...mapGetters('testStore', ['msg2', 'msg3']),
    ...mapState('testStore', ['count', 'msg', 'list']),
    ...mapState('orderStore', {
      orderMsg: (state)=>state.msg
    }),
    fullName() {
      return this.first + ' lucy'
    }
  },
  mounted() {
    // 调接口
    this.getMusic()
  },
  methods: {
    ...mapMutations('testStore', ['add', 'sub']),
    ...mapActions('testStore', ['getMsgOfAjax', 'getMusic', "changeMsg"]),

    ...mapMutations('orderStore', {
      changeOrderMsg: (commit, payload)=>{
        commit('changeMsg', payload)
      }
    }),
    ...mapActions('orderStore', {
      getOrderMusic: (dispatch)=>{
        dispatch('getMusic')
      }
    }),
    addClick() {
      this.add(100)
    },
    subClick() {
      this.sub(50)
    },
    getMsg() {
      this.getMsgOfAjax()
    },
    orderMsgChange() {
      this.changeOrderMsg('changed order msg')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
