<template> 
  <div class="home">
     
    <div class="iconfont">
      是买点零食买点零食
    </div>
    <timeBreach></timeBreach>

    
  </div>
  
</template>

<script setup lang="ts" name="Login">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore, useNavTabStore } from '@/store'
import { useLoading } from '@/hooks'
import { Message } from '@arco-design/web-vue'
import type { UserLoginParams } from '@/apis'
const router = useRouter()
const userStore = useUserStore()
const navTabStore = useNavTabStore()

 
</script>

<style lang="scss" scoped>
.home{
  width:100%;
  height:100%;
  background:url(' ') no-repeat;
  background-size:100% 100%;
  background-attachment:fixed;
}
 
</style>
