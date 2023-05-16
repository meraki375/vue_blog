export default {
    path: '/project',
    name: '/Project',
    component: () => import('@/layout/index.vue'),
    children: [
      {
        path: '/project',
        name: 'Project',
        component: () => import('@/views/project/project_list.vue'),
        meta: { title: '项目管理', keepAlive: false }
      }
    ]
  }
  