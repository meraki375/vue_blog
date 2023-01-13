<template>
    <div>
      
    </div>
    <a-layout-sider
      breakpoint="xl" 
      class="aside"
      theme="dark" 
      hide-trigger 
      collapsible
      :collapsed="collapsed" >
      <div class="menu-demo">
        
        <a-menu  
          showCollapseButton 
          @collapse="collapse" 
          @menuItemClick="onClickMenuItem"
        >
          <a-image
            src='https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/music/cover/20221212183832.png'
            title='哆啦A梦 の 百宝袋'
            description='有老鼠啊！！！'
            width="200"
           
            :preview-visible="visible1"
            @preview-visible-change="() => { visible1= false }"
          >
          </a-image>
          <LoopMenuItem
            v-for="item in routerMap.options.routes[13].children"
            :key="item.id"
            :data="item"
            @click="handleClickItem"
          ></LoopMenuItem>
          <GiThemeBtn class="theme-btn" v-if="!collapsed"></GiThemeBtn>
        </a-menu>
      </div>
    </a-layout-sider>
  
</template>

<script setup lang="ts" name="Aside">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMenuStore } from '@/store'
import LoopMenuItem from './MenuItem.vue'
import routerMap from '@/router/index.ts' 
const route = useRoute()
const router = useRouter()
const menuStore = useMenuStore() 
const collapsed = ref(false);
const collapse = (value: boolean) =>{ 
  collapsed.value = value
} 
const getMenuKeys = (params: MenuItem[]) => {
  const data: string[] = []
  function forTree(arr: MenuItem[]) {
    arr.forEach((item: MenuItem) => {
      if (item.path) {
        data.push(item.path)
      }
      if (item.children?.length) {
        forTree(item.children)
      }
    })
  }
  forTree(params)
  return data
}
 
const menuKeyList = getMenuKeys(routerMap.options.routes[13].children)
console.log(menuKeyList);
 

const handleClickItem = (item: MenuItem) => {
  if (item.path) {
    if (item.path === '/file') {
      router.push({ path: item.path, query: { fileType: 0 } })
    } else {
      router.push({ path: item.path })
    }
     
  }
}
</script>

<style lang="scss" scoped>
:deep(.arco-menu.arco-menu-vertical.arco-menu-collapsed) {
  // Menu菜单组件修改
  .arco-menu-icon {
    margin-right: 0;
    padding: 10px 0;
  }
  .arco-menu-has-icon {
    padding: 0;
    justify-content: center;
  }
  .arco-menu-title {
    display: none;
  }
}

// .aside {
//   z-index: 9;
// }
.menu-demo{
  height:100%;
  position: absolute;
  :deep(.arco-menu-collapse-button) {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color:blue;
    position:absolute;
    bottom:50px;
    left:50px;
    z-index: 9;
  }
  .arco-menu-item {
    color:#83C1F1;
    font-weight:600;
    height:50px;
  }
  
} 
:deep(.arco-menu-vertical .arco-menu-inner) {
  padding:0 !important;
}
:deep(.arco-menu-collapsed){
  width:0;
}
.arco-layout-sider-collapsed{
  width:0 !important;
}
.arco-menu{
   height: 100%;
}
.theme-btn{
  position:absolute;
  bottom:100px;
  left:100px;
}

</style>
