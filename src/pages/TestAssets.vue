<template lang="html">
<div>
  <img :src='icon.deleteIcon' />
  <img :src='icon.todoIcon' />
  <img :src='icon.doneIcon' />
</div>
</template>

<script>
import { icon } from '@/assets'
console.log('-------', icon)
export default {
  data: function() {
    return {
      icon: icon
    }
  }
}
</script>

<style lang="css" scoped>
</style>
