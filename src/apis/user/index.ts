import axios from '@/utils/http' 
import type { UserLoginParams } from './type'

/** @desc 登录 */
export function login(data: UserLoginParams) {
  return axios.post('auth/login', data)
}

/** @desc 退出登录 */
export function logout() {
  return axios.post('user/logout')
}

/** @desc 注册 */
export function register(data: UserLoginParams) {
  return axios.post('auth/register', data)
}
