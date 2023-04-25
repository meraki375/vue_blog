export default {
    path: '/wallpaper',
    name: '/Wallpaper',
    component: () => import('@/layout/index.vue'),
    children: [
      { 
        path: '/wallpaper',
        name: 'Wallpaper',
        component: () => import('@/views/wallpaper/wallpaper.vue'),
        meta: { title: '壁纸管理', keepAlive: false }
      }
    ]
  }
  