import axios from '@/utils/http' 
 
/** @desc 获取壁纸列表 */
export function getWallpaperList(data:any) {
  return axios.get(`api/wallpaper/list`, data)
}

/** @desc 新增壁纸 */
export function editWallpaper(data: any) {
  return axios.post('api/wallpaper/edit', data)  
}

/** @desc 删除壁纸 */
export function delWallpaper(data: any) {
  return axios.delete('api/wallpaper/del', data)  
}