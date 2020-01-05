<template>
<div>
  <h1>ElementUI</h1>
  <h1>8939843</h1>

  <el-row type='flex' align='middle' :gutter='50'>
    <el-col :span='4'>
      <span class="label">编码：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->

    <el-col :span='4'>
      <span class="label">商品分组：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->

    <el-col :span='4'>
      <span class="label">商品类型：</span>
    </el-col>
    <el-col :span="4">
      <el-input placeholder="请输入内容"></el-input>
    </el-col>
    <!-- <el-col :span='2'></el-col> -->
  </el-row>

  <el-row>
    <div>99998</div>
  </el-row>

  <hr>

  <el-button type="primary" icon="el-icon-check">搜索</el-button>


  <hr>

  <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
      <el-table-column
        prop="mobile"
        label="手机">
      </el-table-column>
    </el-table>

    <hr>


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


</div>
</template>


<script>
export default {
  data: function() {
    return {
      tableData: [
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        },
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        },
        {
          date: '2020-01-02',
          name: '张三',
          address: '广东',
          mobile: '13000000000'
        }
      ],
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

<style lang="scss" scoped>
.label {
  display: block;
  text-align: right;
}
</style>
