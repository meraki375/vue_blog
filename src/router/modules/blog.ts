export default {
  path: '/blog',
  name: '/Blog',
  component: () => import('@/layout/index.vue'),
  children: [
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('@/views/blog/blog_list.vue'),
      meta: { title: '博客管理', keepAlive: false }
    },
    {
      path: '/blog/detail',
      name: 'BlogDetail',
      component: () => import('@/views/blog/blog_detail.vue'),
      meta: { title: '博客管理-详情', keepAlive: false }
    },
    {
      path: '/blog/edit',
      name: 'BlogEdit',
      component: () => import('@/views/blog/blog_edit.vue'),
      meta: { title: '博客管理-新增', keepAlive: false },
      beforeEnter: (to: any, from: any, next: any) => {
        to.meta.title = to.query.id ? '博客管理-编辑' : '博客管理-新增'
        next()
      }
    }
  ]
}
