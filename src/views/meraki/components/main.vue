<template>
  <a-layout class="main">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive :max='10'>
            <component v-if="route.meta && route.meta.keepAlive" :is="Component" :key="route.path"/>
        </keep-alive>
        <component v-if="!(route.meta.keepAlive)" :is="Component"/> 
      </template>
      
    </router-view>
  </a-layout>
</template>

<script setup lang="ts" name="Main">
import { useNavTabStore, useAppStore } from '@/store'

const navtabStore = useNavTabStore()
const appStore = useAppStore()
console.log(navtabStore.cacheList);
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
}
</style>
