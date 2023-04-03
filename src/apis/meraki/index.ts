import axios from 'axios'

/** @desc 获取二次元壁纸列表 */
export function getImageList() {
    return axios.get(`https://api.ixiaowai.cn/api/api.php?return=json`)
}