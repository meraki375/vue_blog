import axio from 'axios'
import axios from '@/utils/http'
import waline from '@/utils/waline' 
/** @desc 获取动漫每日一言 */
export function fetchHitokoto() {
    return axio.get(`https://v1.hitokoto.cn/?c=b`)
}

/** @desc 获取公告内容 */
export function getMessage_c() {
    return axios.get('api/craica/message/info')
}

/** @desc 获取博客列表 */
export function getBlogList_c(data:any) {
    return axios.get(`api/craica/blog/list`, data)
}
  
/** @desc 博客详情 */
export function getBlog_c(data: any) {
    return axios.get('api/craica/blog/info', data)  
}

/** @desc 获取笔记列表 */
export function getNoteList_c(data:any) {
    return axios.get(`api/craica/note/list`, data)
}

/** @desc 获取壁纸列表 */
export function getWallpaperList_c(data:any) {
    return axios.get(`api/craica/wallpaper/list`, data)
}

/** @desc 获取分类列表 */
export function getClassList_c(data:any) {
    return axios.get(`api/craica/class/list`, data)
}

/** @desc 获取个人声明 */
export function getPrivacy_c(data:any) {
    return axios.get(`api/craica/privacy/info`, data)
}

/** @desc 获取某篇文章的评论数 */
export function getComment_count(data:any) {
    return waline.get(`https://aaa.craica.cn/api/comment?type=count`, data)
}

/** @desc 获取某篇文章的评论数 */
export function getArticle_count(data:any) {
    return waline.post(`https://aaa.craica.cn/api/article`, data)
}

/** @desc 点赞某篇文章 */
export function articleLike(data:any) {
    return waline.post(`https://aaa.craica.cn/article?lang=zh-CN`, data)
}

/** @desc 获取最近的评论 */
export function getconmentList(data:any) {
    return waline.get(`https://aaa.craica.cn/comment`, data)
}

/** @desc 点赞某条评论 */
export function conmentLike(data:any) {
    return waline.put(`https://aaa.craica.cn/comment/${data.id}`, data)
}

/** @desc 获取用户排行 */
export function getrankList(data:any) {
    return waline.get(`https://aaa.craica.cn/user`, data)
}