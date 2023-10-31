import axios from '@/utils/http' 
import type { UserLoginParams } from './type'

/** @desc 登录 */
export function login(data: UserLoginParams) {
  return axios.post('api/auth/login', data)
}

/** @desc 退出登录 */
export function logout() {
  return axios.post('api/user/logout')
}

/** @desc 注册 */
export function register(data: UserLoginParams) {
  return axios.post('api/auth/register', data)
}


/** @desc 统计登录 */
export function offline(data: any) {
  return axios.post('/api/user/stat/offline', data)
}
