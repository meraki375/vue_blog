<template>
  <a-card title="工作台" :bordered="false" size="medium" class="card-box">
    <template #extra>
      <GiNowTime></GiNowTime>
    </template>
    <a-row justify="space-between" align="center" class="work-platform">
      <a-space :size="15">
        <a-avatar :size="80">
          <img :src="userStore.userInfo.avatar" />
        </a-avatar>
        <div class="tip">
          <p>{{data.greeting}}</p>
          <p>{{data.weatheInfo}}</p>
        </div>
      </a-space>
      <a-space :size="50">
        <a-statistic title="项目数" :value="16" :value-from="0" :start="true" animation> </a-statistic>
        <a-statistic title="待办" :value="3" :value-from="0" :start="true" animation>
          <template #suffix>/15</template>
        </a-statistic>
        <a-statistic title="消息" :value="35" :value-from="0" :start="true" animation> </a-statistic>
      </a-space>
    </a-row>
  </a-card>
</template>

<script setup lang="ts">
import { useUserStore } from '@/store'
import { reactive, ref } from 'vue'
import { weathe } from '@/apis'
const userStore = useUserStore()

const data:any = reactive({
  greeting: '',
  weatheInfo: '天气晴'
})
const setGreeting = ()=> {
  const now = new Date();
  const currentHour = now.getHours();

  if (currentHour >= 6 && currentHour < 12) {
    data.greeting = `早上好，${userStore.userName}，开始记录您一天的学习吧！`;
  } else if (currentHour >= 12 && currentHour < 18) {
    data.greeting = `下午好，${userStore.userName}，继续努力学习吧！`;
  } else {
    data.greeting = `晚上好，${userStore.userName}，休息一下，明天继续学习吧！`;
  }
}
//获取天气数据
const weatheData = ()=>{
  weathe().then(res=>{
    console.log(res)
    if(res.data.status=== '1'){
      data.weatheInfo = `深圳-${res.data.lives[0].city}, ${res.data.lives[0].weather} , 当前温度 ${res.data.lives[0].temperature} 摄氏度`
    }
  })
}
setGreeting()
weatheData()

</script>

<style lang="scss" scoped>
:deep(.arco-statistic-title) {
  margin-bottom: 0;
}
.card-box {
  margin-top: $margin;
}
.work-platform {
  padding: 0 20px;
  .tip {
    color: $color-text-3;
    p {
      &:first-child {
        font-size: 1.25rem;
        color: $color-text-1;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
