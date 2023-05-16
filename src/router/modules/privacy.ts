export default {
    path: '/privacy',
    name: '/Privacy',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('@/views/privacy/privacy.vue'),
        meta: { title: '声明管理', keepAlive: false }
      }
    ]
  }
  