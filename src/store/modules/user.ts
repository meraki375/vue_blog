import { defineStore } from 'pinia'
import { login as userLogin, logout as userLogout, register as userRegister} from '@/apis'
import type { UserLoginParams } from '@/apis'
import { setToken, clearToken } from '@/utils/auth'

export type RoleType = '' | '*' | 'admin' | 'user'

export interface UserInfo {
  username: string
  avatar?: string
  phone?: string
  registrationDate?: string
  accountId?: string
  role: RoleType
}

interface UserState {
  userInfo: UserInfo
}

export const useUserStore = defineStore({
  id: 'User',
  state: (): UserState => {
    return {
      userInfo: JSON.parse(localStorage.getItem('UserInfo') as string) || {
        username: '',
        avatar: '',
        email:'',
        phone: '',
        registrationDate: '',
        accountId: '',
        role: ''
      }
    }
  },
  getters: {
    userName(): string {
      return this.userInfo.username
    }
  },
  actions: {
    // 登录
    async login(loginForm: UserLoginParams) {
      try {
        await userLogin(loginForm).then((res:any)=>{
          setToken(res.token)
          this.userInfo = res.user
        })  
        localStorage.setItem('UserInfo', JSON.stringify(this.userInfo))
      } catch (err) {
        clearToken()
        throw err
      }
    },// 注册
    async register(loginForm: UserLoginParams) {
      try {
        await userRegister(loginForm).then((res:any)=>{
          setToken(res.token)
          this.userInfo = res.user
        })  
        localStorage.setItem('UserInfo', JSON.stringify(this.userInfo))
      } catch (err) {
        clearToken()
        throw err
      }
    },
    // 退出登录
    async logout() {
      try {
        await userLogout()
        clearToken()
      } catch (err) {
        return err
      }
    },
    // 修改个人信息
    async editInfo(userInfo: any) {
      try {
        localStorage.setItem('UserInfo', JSON.stringify(userInfo))
      } catch (err) {
        return err
      }
    }
  }
})
