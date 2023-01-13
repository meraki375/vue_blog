import { useNavTabStore, useAppStore } from '@/store'

export function removeNavTab() {
  const navtabStore:any = useNavTabStore() 
  const key = navtabStore.taging.path  
  const item = navtabStore.tagList.find((i:any) => i.path === key)
  navtabStore.removeTagItem(key.toString())
  if (item?.componentName) {
    navtabStore.removeCacheItem(item.componentName)
  }
}