<template lang="html">
  <div>

  </div>
</template>

<script>

import demo1 from '@/utils/index1'
import demo2 from '@/utils/index2'

import { a, b, foo, bar } from '@/utils/index3'
import { foo1, bar1, a1 } from '@/utils/index4'

export default {
  mounted() {
    console.log(demo1)
    console.log(demo2)
    // console.log(demo3)
    console.log(a, b)
    foo()
    bar()
    foo1()
    bar1()
    console.log(a1)
  }
}
</script>

<style lang="css" scoped>
</style>
