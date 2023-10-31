import axios from '@/utils/http' 
 
 

/** @desc 获取评论列表 */
export function getCommentList(data:any) {
  return axios.get(`/api/wl_Comment/list`, data)
}

