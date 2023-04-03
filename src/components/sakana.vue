<template>
    <!-- <div> -->
        <div class="sakana-box"></div>
    <!-- </div> -->
   
</template>

<script setup lang="ts" name="sakana">
import Sakana from 'sakana';
import {onMounted, nextTick} from 'vue' 
const a = () =>{
    Sakana.init({
        el: '.sakana-box',     // 启动元素 node 或 选择器
        inertia: 0.001,        // 惯性
        decay: 1,              // 衰减
        scale:      .5,                // 缩放倍数
        canSwitchCharacter: true,      // 允许换角色
    });
}
onMounted(() => {
  nextTick(() => {
    a()
  })
})
</script>
<style>
    html .sakana-box{
        position: fixed;
        right: 0;
        bottom: 0;
        transform-origin: 100% 100%; /* 从右下开始变换 */
        z-index: 999;
    }
</style>