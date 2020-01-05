<template lang="html">
<div>
  <h3>正在热映的列表</h3>
  <hr>

  <h3 v-text='$store.state.count'></h3>
  <button type="button" @click='mulClick'>乘</button>

</div>
</template>

<script>
export default {
  methods: {
    mulClick() {
      this.$store.commit('mul', 2)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
