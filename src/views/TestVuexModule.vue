<template lang="html">
<div>
  <!-- <h1 v-text='$store.state.order.msg'></h1> -->
  <h1 v-text='msg'></h1>
  <h1 v-text='userMsg'></h1>

  <button type="button" @click='click1'>测试mutations方法</button>
  <br>
  <button type="button" @click='click2'>测试actions方法</button>
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState('order', ['msg']),
    ...mapState('user', {
      userMsg: state=>state.msg
    }),
  },
  mounted() {
    console.log(this.$store.state)
  },
  methods: {
    ...mapMutations('order', ['changeMsg']),

    ...mapMutations('user', {
      changeUserMsg: (commit, arg)=>{
        commit('changeMsg', arg)
      }
    }),

    ...mapActions('order', ['asyncMsg']),
    ...mapActions('user', {
      asyncUserMsg: (dispatch, arg)=>{
        dispatch('asyncMsg', arg)
      }
    }),
    click1() {
      this.changeMsg('order')
      this.changeUserMsg('user')
    },
    click2() {
      this.asyncMsg('async order')
      this.asyncUserMsg('async user')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
