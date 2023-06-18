import { createPinia } from 'pinia'
import { useAppStore } from './modules/app'
import { useNavTabStore } from './modules/navtab'
import { useUserStore } from './modules/user'
import { useMenuStore } from './modules/menu'
import { useFileStore } from './modules/file'
import { useLikeStore } from './modules/like'

const pinia = createPinia()

export { useAppStore, useNavTabStore, useUserStore, useMenuStore, useFileStore, useLikeStore }
export default pinia
