import Vue from 'vue'
import App from './App.vue'
// 引入我们定义的路由匹配项
import router from './router'
import store from './store/index'


// 使用 ElementUI，通常用于PC端（做PC端应用时建议使用）
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 使用 MintUI，通常用于移动端（做移动端应用时建议使用）
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

Vue.config.productionTip = false

// 最顶层的Vue实例化，并且挂载到HTML的 #app节点上
new Vue({
  router,   // Vue根组件实例化时，传入路由选项。必须要传入，否则路由会不起作用
  store,
  render: h => h(App),
}).$mount('#app')
