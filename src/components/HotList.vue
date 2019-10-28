<template lang="html">

  <div>
    <div v-for="(item, idx) in list" :key='idx'>
      <!-- 移动端的Touch事件 -->
      <div v-text='item.name' @touchstart="touchHandle(item)"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        { name: 'aaaaaa', time: '2017', id: 0 },
        { name: 'bbbbbb', time: '2018', id: 1 },
        { name: 'cccccc', time: '2019', id: 2 },
        { name: 'dddddd', time: '2020', id: 3 }
      ]
    }
  },
  methods: {
    touchHandle(item) {
      console.log(item)
      // 编程式路由跳转，跳转到 localhost:8080/#/detail/1
      this.$router.push('/detail/'+item.id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
