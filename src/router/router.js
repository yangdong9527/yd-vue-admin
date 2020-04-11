import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/layout/index'

Vue.use(VueRouter)

export const routes = [
  {
    path: '/',
    hidden: true,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    hidden: true,
    component: () => import('@/views/login/login.vue')
  },
  {
    path: '/404',
    hidden: true,
    component: () => import('@/components/404/index.vue')
  },
  {
    path: '/',
    component: Layout,
    hidden: false,
    alwaysShow: false,
    meta: {
      icon: 'el-icon-s-home'
    },
    children: [
      {
        path: 'home',
        name: 'home',
        hidden: false,
        component: () => import('@/views/home/index'),
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        }
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
