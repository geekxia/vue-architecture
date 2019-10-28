import Vue from 'vue'
import App from './App.vue'
// 引入我们定义的路由匹配项
import router from './router'

// ES6 模块化语法
// import 引入资源

Vue.config.productionTip = false

// 最顶层的Vue实例化，并且挂载到HTML的 #app节点上
new Vue({
  router,   // Vue根组件实例化时，传入路由选项。必须要传入，否则路由会不起作用
  render: h => h(App),
}).$mount('#app')
