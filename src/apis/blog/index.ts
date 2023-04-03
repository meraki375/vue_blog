import axios from '@/utils/http' 

import type { ApiBlogItem, ApiBlogEdit } from './type'
 

/** @desc 获取博客列表 */
export function getBlogList(data:ApiBlogItem) {
  return axios.get(`blog/list`, data)
}

/** @desc 新增/编辑博客 */
export function editBlog(data: ApiBlogEdit) {
  return axios.post('blog/edit', data)  
}

/** @desc 博客详情 */
export function getBlog(data: any) {
  return axios.get('blog/info', data)  
}

// /** @desc 获取角色数据 */
// export function getSystemRoleList() {
//   return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
// }
