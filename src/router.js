import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用Vue.use()注册路由
Vue.use(VueRouter)

// 使用异步组件，优化性能
const Home = ()=>import('@/pages/Home.vue')
const TodoList = ()=>import('@/pages/TodoList.vue')
const TestAssets = ()=>import('@/pages/TestAssets.vue')
const TestModule = ()=>import('@/pages/TestModule.vue')



// import TestSass from '@/pages/TestSass.vue'
import MusicList from '@/pages/MusicList.vue'
import MusicDetail from '@/pages/MusicDetail.vue'

import Film from '@/pages/Film.vue'
import Hot from '@/components/Hot.vue'
import Future from '@/components/Future.vue'

import TestElement from '@/pages/TestElement.vue'
import TestVuex from '@/pages/TestVuex.vue'
import TestDevtools from '@/pages/TestDevtools.vue'

// 创建一个路由实例
const router = new VueRouter({
  mode: 'hash',
  // 这个routes描述了url路由和组件之间一一对应的显示关系
  routes: [
    {
      path: '/',
      components: {
        default: Home
        // aaa: TodoList,
        // bbb: TestSass
        // 当路由匹配成功的时候，使用名字叫aaa的router-view容器来显示这个组件
      }
    },
    {
      path: '/todo',   // 真实的路由路径
      component: TodoList,
      name: 'todo',    // 给路由（这个映射关系）取个容易编码的名字
      alias: '/todolist'   // 小名，路由路径
    },
    {
      path: '/sass',
      component: ()=>import('@/pages/TestSass.vue')
    },
    {
      path: '/music',
      component: MusicList
    },
    {
      path: '/detail/:id/:name',  // 动态路由，路由传参
      component: MusicDetail
    },
    {
      path: '/film',
      component: Film,
      children: [
        {
          path: '',
          component: Hot
        },
        {
          path: 'future',
          component: Future
        }
      ]
    },
    {
      path: '/testEle',
      component: TestElement
    },
    {
      path: '/testVuex',
      component: TestVuex
    },
    {
      path:'/testDevtools',
      component: TestDevtools
    },
    {
      path: '/TestAssets',
      component: TestAssets
    },
    {
      path: '/TestModule',
      component: TestModule
    },
    {
      path: '/*',
      redirect: '/'
    }
  ]
})


// 路由守卫，全局的路由拦截
// let isLogin = true
// router.beforeEach((to, from, next) => {
//   if (to.path === '/order') {
//     if (!isLogin) {
//       // 如果用户没有登录，跳转至 /login
//       next('/login')
//     } else {
//       // 已登录，直接通过
//       next()
//     }
//   } else {
//     next()
//   }
// })


// 抛出
export default router
