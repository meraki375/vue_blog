import axio from 'axios'
import axios from '@/utils/http' 
/** @desc 获取二次元壁纸列表 */
export function getImageList() {
    return axio.get(`https://api.ixiaowai.cn/api/api.php?return=json`)
}

/** @desc 获取公共内容 */
export function getMessage() {
    return axios.get('/message/info')
}

/** @desc 修改公告内容 */
export function editMessage(data:any) {
    return axios.post('/message/edit', data)
}