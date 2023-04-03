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
          >
              <a-menu>
                <a-image
                  src='https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/music/cover/20221212183832.png'
                  title='哆啦A梦 の 百宝袋'
                  description='铜锣烧！！！'
                  width="200" 
                >
                </a-image>
                <LoopMenuItem
                  v-for="item in routerMap.options.routes[0].children"
                  :key="item.id"
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
// :deep(.arco-image){
//   font-family: "qfont";
// }
// :deep(.arco-menu.arco-menu-vertical.arco-menu-collapsed) {
//   // Menu菜单组件修改
//   .arco-menu-icon {
//     margin-right: 0;
//     padding: 10px 0;
//   }
//   .arco-menu-has-icon {
//     padding: 0;
//     justify-content: center;
//   }
//   .arco-menu-title {
//     display: none;
//   }
// }
.menuButton{
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #83C1F1;
  opacity: 0.3;
  position:absolute;
  bottom:50px;
  left:50px;
  z-index: 9;
  display: flex;
  justify-content: center;
  align-items: center;
}
// .aside {
//   z-index: 9;
// }
// .menu-demo{
//   display: flex;
// }
//   .arco-menu-item {
//     color:#83C1F1;
//     font-weight:600;
//     height:50px;
//   }
  
// } 
// :deep(.arco-menu-vertical .arco-menu-inner .arco-menu-collapsed) {
//   padding:0 !important;
// }
// :deep(.arco-menu-collapsed){
//   width:0;
// }
// .arco-layout-sider{
  
//   width: 0 !important;
//   z-index: 9999;
//   opacity: .8;
// }
// .arco-layout-sider-collapsed{
//   width:0 !important;
// }
.arco-menu{
  width: 100%;
  height: 100%;
}

// .arco-drawer{
  // padding: 0 !important;
  // background:red;
  // z-index: 999;
// }
// .theme-btn{
//   position:absolute;
//   bottom:100px;
//   left:100px;
// }
// .layout-demo  {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   // color: var(--color-white);
//   // font-size: 16px;
//   font-stretch: condensed;
//   text-align: center;
// }
// .arco-drawer{
//   color:red !important;
//   padding: 0;
// }

</style>
