<template>
  <!-- <div > -->
    <!-- <a-layout > -->
      <a-layout-sider
        :width="0"
         
        :collapsed-width="0"
        breakpoint="xl" >
        <div class="menu-demo">
          <a-drawer
            :width="240"
            :height="240"
            :visible="collapsed"
            :placement="'left'"
            :closable="false"
            :header="false"
            :footer="false"
            @cancel="handleCancel"
            :drawer-style="{ background: '#e0ebfd' }"
          >
              <a-menu> 
                  <img
                    src='https://i.hd-r.cn/5e0e40aea3584ccffe0cd7dd69fcc85b.jpg'
                    style="object-fit:fill;width: 200px;height: 200px;"
                  /> 
               
                <LoopMenuItem
                  v-for="item in routerMap.options.routes[0].children"
                  :key="item.path"
                  :data="item"
                  @click="handleClickItem"
                ></LoopMenuItem>
                <GiThemeBtn class="theme-btn" v-if="!collapsed"></GiThemeBtn>
              </a-menu>
          </a-drawer>
          
        </div>
      </a-layout-sider>
      <div class="menuButton" @click="collapse(true)"><icon-menu-unfold :size='32' style="color: #fff;"/></div>
    <!-- </a-layout> -->
  <!-- </div> -->
  <player
    :id="'2088799380'"
    :type="'playlist'"
    :autoplay="true"
    :fixed="true"
  ></player>
   
  
</template>

<script setup lang="ts" name="Aside">
import { ref } from 'vue'
import { useRouter } from 'vue-router' 
import LoopMenuItem from './MenuItem.vue'
import routerMap from '@/router/index'
const router = useRouter() 
const collapsed = ref(false);
const collapse = (value: boolean) =>{ 
  collapsed.value = value
} 

const handleClickItem = (item: MenuItem) => {
  if (item.path) {
    router.push({ path: item.path })
  }
}
const handleCancel = () => {
  collapsed.value = false;
}
</script>

<style lang="scss" scoped>
.menuButton{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #83C1F1;
  opacity: 0.3;
  position:absolute;
  bottom:100px;
  left:50px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}

.arco-menu{
  width: 100%;
  height: 100%;
}
:deep(.arco-menu-inner){
 background: #e0ebfd;
}
:deep(.arco-menu-item){
  background: #e0ebfd;
}
</style>
