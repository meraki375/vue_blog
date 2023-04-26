import axio from 'axios'
import axios from '@/utils/http' 
/** @desc 获取动漫每日一言 */
export function fetchHitokoto() {
    
    return axio.get(`https://v1.hitokoto.cn/?c=b`)
}

/** @desc 获取公共内容 */
export function getMessage() {
    return axios.get('/message/info')
}

/** @desc 修改公告内容 */
export function editMessage(data:any) {
    return axios.post('/message/edit', data)
}
