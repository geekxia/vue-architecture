<template lang="html">
  <div>
    <h1 v-text='music'></h1>
    <h1 v-text='name'></h1>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      music: ''
    }
  },
  computed: {
    name () {
      return this.$route.params.name
    }
  },
  mounted() {
    console.log(this.$route)
    // 从路由参数中取值
    console.log('id', this.$route.params.id)
    console.log('name', this.$route.params.name)
    this.music = this.$route.params.name
    // 调取后端接口，获取音乐详情
  }
}
</script>

<style lang="css" scoped>
</style>
