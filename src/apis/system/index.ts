import axios from '@/utils/http'
const prefix = '/mock'

import type { ApiDeptItem, ApiRoleItem, ApiUserItem, ApiUserList } from './type'

/** @desc 获取用户数据 */
export function getSystemDeptList(data:any) {
  return axios.get(`api/getUser`,data)
}

/** @desc 获取用户列表*/
export function getSystemUserList(data:ApiUserList) {
  return axios.get(`api/system/user/list`, data)
}

/** @desc 新增/编辑用户 */
export function editUser(data: ApiUserItem) {
  return axios.post('api/system/user/edit', data)  
}

/** @desc 删除用户 */
export function delSystemUser(data: ApiUserItem) {
  return axios.delete('api/system/user/del', data)  
}

/** @desc 获取角色数据 */
export function getSystemRoleList() {
  return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
}
