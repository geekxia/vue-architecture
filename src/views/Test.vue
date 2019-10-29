<template lang="html">
  <div>
    <h4>测试Vuex</h4>
    <h4 v-text="$store.state.count"></h4>


    <button type="button" name="button" @touchstart='updateCount'>修改count</button>

    <button type="button" name="button" @touchstart='getMusics'>获取音乐列表</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      count: 0
    }
  },
  mounted() {
    this.$store.dispatch('fetchMusics')
  },
  methods: {
    updateCount() {
      this.$store.commit('add', 1)
      // this.$store.state.count = 8
    },
    getMusics() {
      this.$store.dispatch('fetchMusics')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
