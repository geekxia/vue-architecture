<template lang="html">
  <div>
    <h1>资讯页面</h1>

    <div v-for='(item, idx) in $store.state.musicList' :key='idx' class="music">
      <div v-text='item.title'></div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.music div {
  font-size: 0.2rem;
}
</style>
