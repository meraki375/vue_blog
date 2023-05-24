
import axios from '@/utils/http' 
 

/** @desc 获取公告内容 */
export function getMessage() {
    return axios.get('api/craica/message/info')
}

/** @desc 修改公告内容 */
export function editMessage(data:any) {
    return axios.post('api/message/edit', data)
}
