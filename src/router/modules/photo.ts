export default {
    path: '/photo',
    name: '/Photo',
    component: () => import('@/layout/index.vue'),
    children: [
      { 
        path: '/photo',
        name: 'Photo',
        component: () => import('@/views/photo/photo.vue'),
        meta: { title: '壁纸管理', keepAlive: false }
      }
    ]
  }
  