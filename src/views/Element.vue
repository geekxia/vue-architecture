<template lang="html">
  <div>
    <el-row>
      <el-col :span="12"><div class="col">
        <el-select v-model="sport" placeholder="请选择">
          <el-option
            v-for="item in sportArr"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div></el-col>
      <el-col :span="6"><div class="col">
        <el-button type="primary" @click='submit'>提交</el-button>
      </div></el-col>
      <el-col :span="6"><div class="col">第三列</div></el-col>
    </el-row>

    <div>
      <i class="el-icon-edit"></i>
      <i class="el-icon-share"></i>
      <i class="el-icon-delete"></i>
    </div>

    <div>

    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      sport: '',
      sportArr: [
        { label: '篮球', value: 0 },
        { label: '足球', value: 1 },
        { label: '桌球', value: 2 },
        { label: '排球', value: 3 },
        { label: '羽毛球', value: 4 }
      ]
    }
  },
  methods: {
    submit() {
      console.log(this.sport)
      const h = this.$createElement;
        this.$message({
          message: h('p', null, [
            h('span', null, '内容可以是 '),
            h('i', { style: 'color: teal' }, 'VNode')
          ])
        });
    }
  }
}
</script>

<style lang="css" scoped>
.col {
  /* background: #eeeeee; */
  font-size: .27rem;
}
</style>
