import router from './router'
import store from '../store/index'
import { getCookie } from '../utils/auth'
import { getMenus } from '@/api/login'
import Layout from '@/views/layout/index'


router.beforeEach((to, from, next) => {
  if(getCookie('token')) {
    if(to.path === '/login') {
      next()
    }else {
      // 登录了 
      if(store.getters.asyncRouter.length === 0 ){
        // 没有获取菜单 
        // 加载菜单
        getMenus().then(res => {
          // 修改过滤路由 得到真正的路由
          const asyncRouter = filterMenusToRouter(res.data)
          // 生成菜单 然后将刚才得到的路由添加到 router 中
          store.dispatch('set_menus', asyncRouter).then(res => {
            asyncRouter.push({path: '*', redirect: '/404', hidden: true})
            router.addRoutes(asyncRouter)
            next({...to, replace: true})
          })
        })
      }else {
        // 有菜单了
        next()
      }
    }
  }else {
    // 没有登录
    if(to.path === '/login') {
      next()
    }else{
      
      next({path: `/login?redirect=${to.path}`})
    }
  }
})

function filterMenusToRouter(arr) {
  const result = arr.map(item => {
    if(!item.component) {
      item.component = Layout
      item.path = '/'+item.path
    }else {
      item.component = loadMenu(item.component)
    }
    if(item.children && item.children.length !== 0) {
      item.children = filterMenusToRouter(item.children)
    }
    return {
      path: item.path,
      name: item.name,
      hidden: item.hidden,
      component: item.component,
      meta: item.meta,
      children: item.children
    }
  })
  return result
}

function loadMenu(path) {
  return () => import(`@/views/${path}.vue`)
}