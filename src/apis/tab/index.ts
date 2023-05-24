import axios from '@/utils/http' 
 
 

/** @desc 获取标签列表 */
export function getTabList(data:any) {
  return axios.get(`api/tab/list`, data)
}

/** @desc 新增/编辑标签 */
export function editTab(data: any) {
  return axios.post('api/tab/edit', data)  
}

/** @desc 删除标签 */
export function delTab(data: any) {
  return axios.delete('api/tab/del', data)  
}
