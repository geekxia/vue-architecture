import Vue from 'vue'
import VueRouter from 'vue-router'

// 引入组件，在Vue中，一切皆组件
import TodoList from '@/views/TodoList.vue'
import Film from '@/views/Film.vue'
import Movie from '@/views/Movie.vue'
import News from '@/views/News.vue'
import User from '@/views/User.vue'

import HotList from '@/components/HotList.vue'
import FutureList from '@/components/FutureList.vue'
import Detail from '@/views/Detail.vue'

Vue.use(VueRouter)  // 在Vue中使用Vue-router，注册路由

const router = new VueRouter({
  routes: [
    {
      path: '/todo',   // 当路由是 /todo时，渲染TodoList组件；下面的同理
      component: TodoList
    },
    {
      path: '/',      // 当访问根路径时，重定向跳转至 /film
      redirect: '/film'
    },
    {
      path: '/film',
      component: Film,
      // 子路由，即二级路由、路由嵌套
      children: [
        {
          path: 'hot',
          component: HotList
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
      component: Movie
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
      component: Detail
    }
  ]
})


export default router
