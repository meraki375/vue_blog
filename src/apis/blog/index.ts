import axios from '@/utils/http' 
 

/** @desc 获取博客列表 */
export function getBlogList(data:any) {
  return axios.get(`api/blog/list`, data)
}

/** @desc 新增/编辑博客 */
export function editBlog(data: any) {
  return axios.post('api/blog/edit', data)  
}

/** @desc 博客详情 */
export function getBlog(data: any) {
  return axios.get('api/blog/info', data)  
}

/** @desc 删除博客 */
export function delBlog(data: any) {
  return axios.post('api/blog/del', data)  
}

/** @desc 修改博客状态 */
export function blogStatus(data: any) {
  return axios.post('api/blog/status', data)  
}

