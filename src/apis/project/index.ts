import axios from '@/utils/http' 
 
 

/** @desc 获取项目列表 */
export function getProjectList(data:any) {
  return axios.get(`api/project/list`, data)
}

/** @desc 新增/编辑项目信息 */
export function editProject(data: any) {
  return axios.post('api/project/edit', data)  
}

/** @desc 删除项目 */
export function delProject(data: any) {
  return axios.delete('api/project/del', data)  
}

// /** @desc 获取角色数据 */
// export function getSystemRoleList() {
//   return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
// }
