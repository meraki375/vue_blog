import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordNormalized } from 'vue-router'
import { getToken } from '@/utils/auth'

// 路由模块化自动导入
const modules = import.meta.globEager('./modules/*.ts')

function formatModules(_modules: any, result: RouteRecordNormalized[]) {
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default
    if (!defaultModule) return
    const moduleList = Array.isArray(defaultModule) ? [...defaultModule] : [defaultModule]
    result.push(...moduleList)
  })
  return result
}

export const appRoutes: RouteRecordNormalized[] = formatModules(modules, [])

const routes = [
  
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录', keepAlive: false }
  },
  // {
  //   path: '/meraki',
  //   name: 'meraki',
  //   component: () => import('@/views/meraki/demo.vue'),
  //   meta: { title: '前台', keepAlive: false }
  // },
  {
    path: '/registered',
    name: 'registered',
    component: () => import('@/views/login/registered.vue'),
    meta: { title: '注册', keepAlive: false }
  },
  ...appRoutes,
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import('@/layout/index.vue'),
    meta: { title: '首页', keepAlive: false },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index.vue'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/index.vue'),
        meta: { title: '关于', keepAlive: false }
      },
      {
        path: '/navigation',
        name: 'Navigation',
        component: () => import('@/views/navigation/index.vue'),
        meta: { title: '导航', keepAlive: false }
      },
      {
        path: '/tool',
        name: 'Tool',
        component: () => import('@/views/tool/index.vue'),
        meta: { title: '功能页', keepAlive: true }
      }
    ]
  },
  {
    path: '/meraki',
    name: 'Meraki',
    redirect: '/meraki',
    component: () => import('@/views/meraki/components/index.vue'),
    meta: { title: '前台', keepAlive: false },
    children: [
      // {
      //   path: '/meraki/home',
      //   name: 'Mhome',
      //   component: () => import('@/views/meraki/demo.vue'),
      //   meta: { title: '首页', keepAlive: false }
      // },
      {
        path: '/meraki/home',
        name: '首页',
        icon: '1cangchucangku',
        id: 'SY',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/meraki/table',
        name: '留言表',
        icon: '1dingdan',
        id: 'LYB',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '留言表', keepAlive: false }
      },
      {
        path: '/meraki/time',
        name: '时间线',
        icon: '1shijianchuo',
        id: 'SJX',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '时间线', keepAlive: true }
      },
      {
        path: '/meraki/plan',
        name: '开发计划',
        icon: '1linghuokuozhan',
        id: 'KFJH',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '开发计划', keepAlive: true }
      },
      {
        path: '/meraki/wall',
        name: '表白墙',
        icon: '1gongyi',
        id: 'BBQ',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '表白墙', keepAlive: true }
      },
      {
        path: '/meraki/note',
        name: '随手小记',
        icon: '1wendang',
        id: 'SSXJ',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '随手小记', keepAlive: true }
      },
      {
        path: '/meraki/statement',
        name: '本站声明',
        icon: '1banquan',
        id: 'BZSM',
        component: () => import('@/views/meraki/home.vue'),
        meta: { title: '本站声明', keepAlive: true }
      }
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
 
router.beforeEach((to, from, next) => { 
  if (to.path === '/login' || to.path === '/registered') {
    next()
  }else if(to.matched.length === 0){
    next('/error/404')
  }else{
    const token = getToken()
    if (!token) {
      next('/login')
    } else {
      next()
    }
  }
})

export default router
