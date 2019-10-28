<template lang="html">
  <h1>电影详情页</h1>
</template>

<script>
export default {

  mounted() {
    console.log(this.$route)
    console.log('id', this.$route.params.id)
    // 调接口，获取电影详情
    // this.d = ajax.
  }
}
</script>

<style lang="css" scoped>
</style>
