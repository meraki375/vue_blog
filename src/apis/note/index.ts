import axios from '@/utils/http' 
 
 

/** @desc 获取笔记列表 */
export function getNoteList(data:any) {
  return axios.get(`api/note/list`, data)
}

/** @desc 新增/编辑笔记 */
export function editNote(data: any) {
  return axios.post('api/note/edit', data)  
}

/** @desc 删除笔记 */
export function delNote(data: any) {
  return axios.delete('api/note/del', data)  
}

// /** @desc 获取角色数据 */
// export function getSystemRoleList() {
//   return axios.get<IResListData<ApiRoleItem[]>>(`${prefix}/system/role/list`)
// }
