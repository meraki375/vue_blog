export default {
  path: '/system',
  name: 'System',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: '/system',
      name: 'SystemMain',
      component: () => import('@/views/system/index.vue'),
      meta: { title: '系统管理', keepAlive: false }
    }, 
    {
      path: '/system/user-manage',
      name: 'SystemUserManage',
      component: () => import('@/views/system/user-manage/index.vue'),
      meta: { title: '用户管理', keepAlive: false }
    },
    {
      path: '/system/role-manage',
      name: 'SystemRoleManage',
      component: () => import('@/views/system/role-manage/index.vue'),
      meta: { title: '角色管理', keepAlive: false }
    },
    {
      path: '/system/menu-manage',
      name: 'SystemMenuManage',
      component: () => import('@/views/system/menu-manage/index.vue'),
      meta: { title: '菜单管理', keepAlive: false }
    },
    {
      path: '/system/user-center',
      name: 'SystemUserCenter',
      component: () => import('@/views/system/user-center/index.vue'),
      meta: { title: '个人中心', keepAlive: false }
    }
  ]
}
