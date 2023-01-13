import axios from '@/utils/http'
const prefix = '/mock'

import type { ApiDeptItem, ApiRoleItem, ApiUserItem, ApiUserList } from './type'

/** @desc 获取部门数据 */
export function getSystemDeptList() {
  return axios.get<IResListData<ApiDeptItem[]>>(`${prefix}/system/dept/list`)
}

/** @desc 获取用户数据 */
export function getSystemUserList(data:ApiUserList) {
  return axios.get(`system/user/list`, data)
}

/** @desc 新增/编辑用户 */
export function addSystemUser(data: ApiUserItem) {
  return axios.post('system/user/add', data)  
}

/** @desc 新增/编辑用户 */
export function delSystemUser(data: ApiUserItem) {
  return axios.delete('system/user/del', data)  
}

/** @desc 获取角色数据 */
export function getSystemRoleList() {
  return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
}
