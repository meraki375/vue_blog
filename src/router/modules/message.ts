export default {
    path: '/message',
    name: '/Message',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/message',
        name: 'Message',
        component: () => import('@/views/message/message.vue'),
        meta: { title: '公告管理', keepAlive: false }
      }
    ]
  }
  