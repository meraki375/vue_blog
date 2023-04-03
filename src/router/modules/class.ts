export default {
    path: '/class',
    name: '/Class',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/class',
        name: 'Class',
        component: () => import('@/views/class/class_list.vue'),
        meta: { title: '分类管理', keepAlive: false }
      }
    ]
  }
  