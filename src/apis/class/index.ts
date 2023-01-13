import axios from '@/utils/http' 

import type { ApiClassItem, ApiClassEdit } from './type'
 

/** @desc 获取分类列表 */
export function getClassList(data:ApiClassItem) {
  return axios.get(`class/list`, data)
}

// /** @desc 新增/编辑博客 */
// export function editBlog(data: ApiBlogEdit) {
//   return axios.post('blog/edit', data)  
// }

// /** @desc 博客详情 */
// export function getBlog(data: ApiUserItem) {
//   return axios.get('blog/info', data)  
// }

// /** @desc 获取角色数据 */
// export function getSystemRoleList() {
//   return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
// }
