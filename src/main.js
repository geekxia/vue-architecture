// ES6模块化语法
// 引入Vue
import Vue from 'vue'
import App from './App.vue'

import router from './router'
// import store from './store'
// 使用分modules的store
import store from './store/index'

// npm install element-ui -S
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 使用 MintUI，通常用于移动端（做移动端应用时建议使用）
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 指定不是生产环境
Vue.config.productionTip = false

// Vue根组件的实例化、挂载
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
