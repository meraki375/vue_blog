<template>
    
    <footer>
        <div class="container">
            <p>本站由腾讯云提供CDN加速服务和存储服务</p>
            <p>{{ data.hitokoto }}</p>
            <a href="https://beian.miit.gov.cn/" target="_blank">桂ICP备2022007761号-1</a>
            <p>Copyright 2023 BOBO, All rights reserved.</p>
        </div>
    </footer>

</template>
<script setup lang="ts" name="Footer">
import { fetchHitokoto } from '@/apis'
import {  reactive } from 'vue'
const data = reactive({
    hitokoto:''
})
fetchHitokoto().then((res:any) =>{
    data.hitokoto = res.data.hitokoto
})
</script>
<style scoped>
  footer {
    position: relative;
    bottom: 0;
    height: 100px;
    width: 100%;
    text-align: center;
    font-size: 14px; 
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  footer p {
    margin: 5px 0;
  }

  footer a {
    color: #666;
    text-decoration: none;
    margin: 0 10px;
  }
</style>

