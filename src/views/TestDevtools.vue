<template lang="html">
<div>
  <HelloDevtools></HelloDevtools>
  <h1 v-text='count'></h1>

  <button type="button" @click='click("add")'>add</button>
  <button type="button" @click='click("sub")'>sub</button><br>
  <button type="button" @click='click("async_add")'>async add</button>
  <button type="button" @click='click("async_sub")'>async sub</button><br>
  <button type="button" @click='click("no_commit_add")'>no commit add</button>
  <button type="button" @click='click("no_commit_sub")'>no commit sub</button>

</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
const HelloDevtools = ()=>import('@/components/HelloDevtools.vue')
export default {
  components: {
    HelloDevtools
  },
  computed: {
    ...mapState('count', ['count'])
  },
  methods: {
    ...mapMutations('count', ['add', 'sub']),
    ...mapActions('count', ['asyncAdd', 'asyncSub']),
    click(type) {
      switch (type) {
        case 'add':
          this.add(100)
          break;
        case 'sub':
          this.sub(50)
          break;
        case 'async_add':
          this.asyncAdd(20)
          break;
        case 'async_sub':
          this.asyncSub(10)
          break;
        case 'no_commit_add':
          this.$store.state.count.count += 5
          break;
        case 'no_commit_sub':
          this.$store.state.count.count -= 5
          break;
        default:

      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
