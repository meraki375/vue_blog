import axios from '@/utils/http' 

import type { ApiClassItem, ApiClassEdit } from './type'
 

/** @desc 获取分类列表 */
export function getClassList(data:any) {
  return axios.get(`class/list`, data)
}

/** @desc 新增/编辑分类 */
export function editClass(data: ApiClassEdit) {
  return axios.post('class/edit', data)  
}

/** @desc 删除分类 */
export function delClass(data: any) {
  return axios.delete('class/del', data)  
}

// /** @desc 获取角色数据 */
// export function getSystemRoleList() {
//   return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
// }
