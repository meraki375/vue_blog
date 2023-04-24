export default {
    path: '/note',
    name: '/Note',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/note',
        name: 'Note',
        component: () => import('@/views/note/note_list.vue'),
        meta: { title: '笔记管理', keepAlive: false }
      }
    ]
  }
  