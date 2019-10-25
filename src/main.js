import Vue from 'vue'
import App from './App.vue'

// ES6 模块化语法
// import 引入资源

Vue.config.productionTip = false

// 最顶层的Vue实例化，并且挂载到HTML的 #app节点上
new Vue({
  render: h => h(App),
}).$mount('#app')
