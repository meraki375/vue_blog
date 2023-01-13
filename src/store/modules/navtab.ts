import { defineStore } from 'pinia'
import router from '@/router'

interface NavTabState {
  tagList: NavTabItem[]
  cacheList: string[]
  taging:{}
}

const defaultTabItem: NavTabItem = { name: '首页', path: '/home', componentName: 'Home' }

export const useNavTabStore = defineStore({
  id: 'NavTab', // 页签缓存
  state: (): NavTabState => {
    return {
      tagList: [defaultTabItem], // 保存页签tab的数组
      cacheList: [], // keep-alive缓存的数组, 元素是组件名
      taging: {} // 当前的页签
    }
  },
  getters: {},
  actions: {
    // 添加一个页签, 如果当前路由已经打开, 则不再重复添加
    addTagItem(item: NavTabItem) {
      const ignoreTagList = ['Login']
      if (ignoreTagList.includes(item.componentName)) return
      const flag = this.tagList.findIndex((i) => i.path === item.path)
      if (flag >= 0) {
        return this.taging = item 
      }
      this.tagList.push(item)
      this.taging = item 
    },
    // 删除一个页签
    removeTagItem(path: string) {
      if (path === defaultTabItem.path) return
      const index = this.tagList.findIndex((item) => item.path === path)
      if (index >= 0) {
        const isActive = router.currentRoute.value.path === this.tagList[index]['path']
        this.tagList.splice(index, 1)
        this.taging = this.tagList[this.tagList.length - 1]
        if (isActive) {
          router.push({ path: this.tagList[this.tagList.length - 1]['path'] })
        }
      }
    },
    // 清空页签
    clearTagList() {
      this.tagList = [defaultTabItem]
      this.taging = this.tagList[0]
      router.push(defaultTabItem.path)
    },
    // 添加缓存页
    addCacheItem(componentName: string) {
      if (this.cacheList.includes(componentName)) return
      this.cacheList.push(componentName)
      console.log(this.cacheList);
      
    },
    // 删除一个缓存页
    removeCacheItem(componentName: string) {
      const index = this.cacheList.findIndex((item) => item === componentName)
      if (index >= 0) {
        this.cacheList.splice(index, 1)
      }
    },
    // 清空缓存页
    clearCacheList() {
      this.cacheList = []
    },
    // 初始化
    init() {
      this.clearTagList()
      this.clearCacheList()
    }
  }
})
