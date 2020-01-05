<template>
  <div id='app' class="app">

    <!-- 导航条 -->
    <div class="app_bar">
      <div>
        <span>TODOS</span>
        <input
          type="text"
          v-model.trim='todo'
          @keyup.enter='confirm'
          placeholder="添加todos" />
      </div>
    </div>

    <!-- 正在进行的任务列表 -->
    <!-- 当v-for循环中要使用v-model时，外层的数组必须是[{},{}],不能是[1,2,3] -->
    <div class="panel">
      <div class="panel_title">
        <span>正在进行</span>
        <span v-text='list1.length'></span>
      </div>
      <div class="panel_list" v-for="(item, idx) in list1" :key='idx'>
        <span @click='transform(idx, "up")'></span>
        <span>
          <input v-model='item.title' />
        </span>
        <span @click='remove(idx, "up")'></span>
      </div>
    </div>


    <!-- 已经完成的任务列表 -->
    <div class="panel">
      <div class="panel_title">
        <span>已经完成</span>
        <span v-text='list2.length'></span>
      </div>
      <!-- 一行 -->
      <div class="panel_list panel_list-done" v-for="(item,idx) in list2" :key='idx'>
        <span @click='transform(idx)'></span>
        <span>
          <input v-model='item.title' />
        </span>
        <span @click='remove(idx)'></span>
      </div>
    </div>

    <!-- 底部 -->
    <div class="app_bot">此todos由1916班制作完成</div>
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      todo: '',
      list1: [],
      list2: []
    }
  },
  methods: {
    confirm() {
      console.log(this.todo)
      if (!this.todo) return
      this.list1.push({
        title: this.todo,
        time: Date.now()
      })
      this.todo = ''
    },
    remove(idx, type) {
      if (type === 'up') {
        this.list1.splice(idx, 1)
      } else {
        this.list2.splice(idx, 1)
      }
    },
    transform(idx, type) {
      if (type === 'up') {
        var res1 = this.list1.splice(idx, 1)
        this.list2.push(res1[0])
      } else {
        var res2 = this.list2.splice(idx, 1)
        this.list1.push(res2[0])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
html, body {
  padding: 0;
  margin: 0;
  background: #cdcdcd;
}

.app {

}

.app_bar {
  height: 50px;
  background: rgba(47, 47, 47, 0.9);
  line-height: 50px;
}
.app_bar>div {
  width: 600px;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
}
.app_bar>div>span {
  float: left;
  color: #ddd;
  font-size: 24px;
}
.app_bar>div>input {
  float: right;
  width: 60%;
  height: 24px;
  margin-top: 12px;
  text-indent: 10px;
  border-radius: 5px;
  box-shadow: 0 1px 0 rgba(255,255,255,0.24), 0 1px 6px rgba(0,0,0,0.45) inset;
  border: none;
  font-size: 16px;
}


.panel {
  width: 600px;
  margin: 0 auto;
}
.panel_title {
  line-height: 70px;
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  padding-right: 5px;
}
.panel_title>span:nth-child(1) {
  font-size: 28px;
}
.panel_title>span:nth-child(2) {
  float: right;
  height: 20px;
  width: 20px;
  box-sizing: border-box;
  border-radius: 50%;
  background: #E6E6FA;
  line-height: 22px;
  text-align: center;
  color: #666;
  font-size: 14px;
  margin-top: 30px;
}
.panel_list {
  height: 32px;
  line-height: 32px;
  background: #fff;
  margin-bottom: 10px;
  padding:0 10px;
  border-radius: 3px;
  border-left: 5px solid #629A9C;
  box-shadow: 0 1px 2px rgba(0,0,0,0.07);
  overflow: hidden;
  box-sizing: border-box;
}
.panel_list>span:nth-child(1) {
  float: left;
  width: 26px;
  height: 26px;
  background: url(/icon/todo.png) no-repeat center center / 20px 20px;
  background: url(../assets/icon/todo.png) no-repeat center center / 20px 20px;
  margin-top: 3px;
  cursor: pointer;
}
.panel_list-done>span:nth-child(1) {
  background: url(/icon/done.png) no-repeat center center / 20px 20px;
  background: url(../assets/icon/done.png) no-repeat center center / 20px 20px;
}
.panel_list>span:nth-child(2) {
  float: left;
  margin-left: 10px;
  width: 400px;
}
.panel_list>span:nth-child(2) input {
  /* display: block; */
  width: 100%;
  padding: 0 10px;
  font-size: 16px;
  border: none;
  line-height: 32px;
}
.panel_list>span:nth-child(3) {
  float: right;
  width: 26px;
  height: 26px;
  background: url(/icon/delete.png) no-repeat center center / 20px 20px;
  background: url(../assets/icon/delete.png) no-repeat center center / 20px 20px;
  cursor: pointer;
  margin-top: 3px;
}

.app_bot {
  color: #666;
  font-size: 14px;
  text-align: center;
}

</style>
