export default {
    path: '/tab',
    name: '/Tab',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/tab',
        name: 'Tab',
        component: () => import('@/views/tab/tab_list.vue'),
        meta: { title: '标签管理', keepAlive: false }
      }
    ]
  }
  