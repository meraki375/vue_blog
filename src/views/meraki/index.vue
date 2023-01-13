<template>
  <div class="layout-demo">
    <a-layout style="height: 100%;">
      <!-- <a-layout-header>Header</a-layout-header> -->
      <a-layout>
        <a-layout-sider 
          theme="dark" 
          hide-trigger 
          collapsible
          :collapsed="collapsed"
          @collapse="onCollapse">
          <div class="menu-demo">
            <a-menu showCollapseButton @collapse="collapse"  @menuItemClick="onClickMenuItem">
              <a-menu-item key="1" v-if="switchMemu">
                <template #icon><icon-apps></icon-apps></template>
                首页
              </a-menu-item>
              <a-menu-item key="2" v-if="switchMemu">
                <template #icon><icon-safe></icon-safe></template>
                留言墙
              </a-menu-item>
              <a-menu-item key="3" v-if="switchMemu">
                <template #icon><icon-fire></icon-fire></template>
                时间线
              </a-menu-item>
              <a-menu-item key="4" v-if="switchMemu">
                <template #icon><icon-fire></icon-fire></template>
                开发计划
              </a-menu-item>
              <a-menu-item key="5" v-if="switchMemu">
                <template #icon><icon-fire></icon-fire></template>
                表白墙
              </a-menu-item>
              <a-menu-item key="6" v-if="switchMemu">
                <template #icon><icon-fire></icon-fire></template>
                随手小记
              </a-menu-item>
              <a-menu-item key="7" v-if="switchMemu">
                <template #icon><icon-fire></icon-fire></template>
                本站声明
              </a-menu-item>
            </a-menu>
          </div>
        </a-layout-sider>
        <a-layout-content>Content</a-layout-content>
      </a-layout>
      <!-- <a-layout-footer>Footer</a-layout-footer> -->
    </a-layout>
  </div>
</template>
<script setup lang="ts" name="Meraki">
import {
  IconApps,
  IconBug,
  IconBulb,
} from '@arco-design/web-vue/es/icon';
import { onBeforeUnmount, onMounted, ref, reactive } from 'vue'
import { Message } from '@arco-design/web-vue';
const switchMemu = ref(true)
const collapse = (value: boolean) =>{
  switchMemu.value = !value
  collapsed.value = value
}
const collapsed = ref(false);
const onCollapse = (val:any, type:any) => {
  const content = type === 'responsive' ? '触发响应式收缩' : '点击触发收缩';
  Message.info({
    content,
    duration: 2000,
  }); 
  collapsed.value = val;
}
const onClickMenuItem = (key:any) =>{
  Message.info({ content: `You select ${key}`, showIcon: true });
}
// export default {
//   components: {
//     IconApps,
//     IconBug,
//     IconBulb,
//   },
// };
</script>
<style scoped>
.menu-demo {
  width: 100%;
  height: 100%; 
  box-sizing: border-box;
  background-color: var(--color-neutral-2);
  position: absolute;
}
.arco-menu-item  {
  width: 150px;
  height: 60px; 
}
.menu-demo .arco-menu {
  width: 250px;
  height: 100%;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
}

.menu-demo .arco-menu :deep(.arco-menu-collapse-button) {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  color:blue;
  
}

.menu-demo .arco-menu:not(.arco-menu-collapsed) :deep(.arco-menu-collapse-button) {
  right: 0;
  bottom: 30px;
  transform: translateX(50%);
}

.menu-demo .arco-menu:not(.arco-menu-collapsed)::before {
  content: '';
  position: absolute;
  right: 0;
  bottom: 26px;
  width: 56px;
  height: 56px;
  background-color: inherit;
  border-radius: 50%;
  box-shadow: -4px 0 2px var(--color-bg-2), 0 0 1px rgba(0, 0, 0, 0.3);
  transform: translateX(50%);
}

.menu-demo .arco-menu.arco-menu-collapsed {
  width: 56px;
  height: 56px;
  /* padding-top: 24px; */
  /* padding-bottom: 138px; */
  border-radius: 50%;
  position: absolute;
  left: 30px;
  bottom: 30px;
}

.menu-demo .arco-menu.arco-menu-collapsed :deep(.arco-menu-collapse-button) {
  right: 4px;
  bottom: 4px;
}
.layout-demo {
  height: 100%;
  background: #000;
  border: 1px solid var(--color-border);
} 
.layout-demo :deep(.arco-layout-sider-children),
.layout-demo :deep(.arco-layout-content) {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--color-white);
  font-size: 16px;
  font-stretch: condensed;
  text-align: center;
}
 
.layout-demo :deep(.arco-layout-sider) {
  width:0 !important;
  
}

.layout-demo :deep(.arco-layout-content) {
  background-color: #ccc;
}
</style>