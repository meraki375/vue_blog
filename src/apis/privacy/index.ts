
import axios from '@/utils/http' 
 

/** @desc 获取公告内容 */
export function getPrivacy() {
    return axios.get('api/privacy/info')
}

/** @desc 修改公告内容 */
export function editPrivacy(data:any) {
    return axios.post('api/privacy/edit', data)
}
