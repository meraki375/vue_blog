<template>
  <a-layout class="layout">
    <Aside></Aside>
    <Main></Main> 
  </a-layout>
  
</template>

<script setup lang="ts">
import Aside from './Aside.vue'
import Main from './Main.vue'

</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
}
</style>
