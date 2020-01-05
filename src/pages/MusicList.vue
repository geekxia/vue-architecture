<template lang="html">
<div>
  <h1>音乐列表</h1>


  <div v-for='(item) in list' :key='item.id' @click='skipToDetail(item)'>
    <!-- <router-link to="/detail"> -->
      <span v-text='item.id'></span>
      <span v-text='item.name'></span>
    <!-- </router-link> -->
  </div>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      list: [
        {id:1, name:'东风破'},
        {id:2, name:'七里香'},
        {id:3, name:'双截棍'}
      ]
    }
  },
  methods: {
    skipToDetail(item) {
      console.log(item)
      console.log('this.$router', this.$router)
      // 编程式的路由跳转
      this.$router.push('/detail/'+item.id+'/'+item.name)
      // this.$router.replace('/')
      // this.$router.go()

      // 编程式路由跳转，跳转到 localhost:8080/#/detail/1
      // this.$router.push('/detail/'+item.id)
      // this.$router.push({
      //   name: 'detail',
      //   params: {
      //     id: item.id
      //   }
      // })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
