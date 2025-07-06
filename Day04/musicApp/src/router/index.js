import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      //路由重定向
      redirect:'/mine'
    },
    //我的页面路由
    {
      //路由路径
      path:"/mine",
      //路由名称
      name:'mine',
      //路由对应的vue页面
      component:() => import('@/pages/Mine.vue')
    },
    //发现页面路由
    {
      //路由路径
      path:"/discover",
      //路由名称
      name:'discover',
      //路由对应的vue页面
      component:() => import('@/pages/Discover.vue')
    },
    //云村页面路由
    {
      //路由路径
      path:"/cloud",
      //路由名称
      name:'cloud',
      //路由对应的vue页面
      component:() => import('@/pages/Cloud.vue')
    },
    //视频页面路由
    {
      //路由路径
      path:"/video",
      //路由名称
      name:'video',
      //路由对应的vue页面
      component:() => import('@/pages/Video.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
