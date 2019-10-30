<template lang="html">
  <div>
    <h4 v-text='nums2'></h4>
    <h4 v-text="userinfo.name"></h4>
    <!-- <h4 v-text='userinfo.name'></h4> -->

    <button type="button" name="button" @touchstart='updateCount'>修改count</button>

    <button type="button" name="button" @touchstart='getMusics'>获取音乐列表</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
export default {
  data: function() {
    return {
      msg: ''
    }
  },
  computed: {
    ...mapState(['userinfo', 'count']),
    ...mapGetters(['nums2']),
    msg2() {
      return this.msg + 'hello 1012'
    }
  },
  mounted() {
    // this.$store.dispatch('fetchMusics')
    this.fetchMusics()
  },
  methods: {
    ...mapMutations(['add']),
    ...mapActions(['fetchMusics']),
    updateCount() {
      // this.$store.state.count = 8
      // this.$store.commit('add', 1)
      this.add(5)
    },
    getMusics() {
      // this.$store.dispatch('fetchMusics')
      this.fetchMusics()
    }
  }
}
</script>

<style lang="css" scoped>
</style>
