import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件，在Vue中，一切皆组件
import TodoList from '@/views/TodoList.vue'
import Film from '@/views/Film.vue'
import Movie from '@/views/Movie.vue'
import News from '@/views/News.vue'
import User from '@/views/User.vue'
import Detail from '@/views/Detail.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login.vue'
import Money from '@/views/Money.vue'
import Test from '@/views/Test.vue'
import ES from '@/views/ES.vue'
import ScssTest from '@/views/ScssTest.vue'
import Element from '@/views/Element.vue'
import MintUi from '@/views/MintUi.vue'

import HotList from '@/components/HotList.vue'
import FutureList from '@/components/FutureList.vue'
import FilterTab from '@/components/FilterTab.vue'


Vue.use(VueRouter)  // 在Vue中使用Vue-router，注册路由

const router = new VueRouter({
  // mode: 'history',  // 切换VueRouter的路由模式
  routes: [
    {
      path: '/todo',   // 当路由是 /todo时，渲染TodoList组件；下面的同理
      component: TodoList,
      name: 'todo'
    },
    {
      path: '/',      // 当访问根路径时，重定向跳转至 /film
      redirect: '/film'
    },
    {
      path: '/film',
      components: {
        default: Film    // 视图命名
      },
      // 子路由，即二级路由、路由嵌套
      children: [
        {
          path: 'hot',
          name: 'hot',
          components: {
            b: HotList,   // 命名视图，即有名字的 router-view
            a: FilterTab
          }
        },
        {
          path: 'future',
          component: FutureList
        },
        {
          path: '',
          redirect: 'hot'   // 当路由是 /film 时，重定向到 /film/hot
        }
      ]
    },
    {
      path: '/movie',
      component: Movie,
      alias: '/m',  // 路由别名
      name: 'm'   // 路由名称
    },
    {
      path: '/news',
      component: News
    },
    {
      path: '/user',
      component: User
    },
    {
      path: '/detail/:id',  // 动态路由，id 是变化的
      component: Detail,
      name: 'detail'
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/money',
      component: Money
    },
    {
      path: '/test',
      component: Test
    },
    {
      path: '/es',
      component: ES
    },
    {
      path: '/scss',
      component: ScssTest
    },
    {
      path: '/ele',
      component: Element
    },
    {
      path: '/mint',
      component: MintUi
    }
  ]
})

// 路由守卫，全局的路由拦截
let isLogin = true
router.beforeEach((to, from, next) => {
  if (to.path === '/order') {
    if (!isLogin) {
      // 如果用户没有登录，跳转至 /login
      next('/login')
    } else {
      // 已登录，直接通过
      next()
    }
  } else {
    next()
  }
  // console.log('to', to)
  // console.log('from', from)
  // next()
})

export default router


// 路由跳转默认是 Hash模式，底层通过 location.hash()来实现的
// History模式，底层是通过 history.pushState() 来实现的
