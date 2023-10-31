<template>
  <a-card title="消息" :bordered="false" size="medium">
    <template #extra>
      <a-link>更多</a-link>
    </template>
    <ul class="list">
      <li class="list-item" v-for="item in data.list" :key="item.id">
        <a-avatar :size="40" style="min-width: 40px">
          <img  :src=" item.mail ? `https://q1.qlogo.cn/g?b=qq&nk=${item.mail}&s=100` :'https://meraki-1313127528.cos.ap-guangzhou.myqcloud.com/picgo/%E5%BF%83%E6%B5%B7.jpg'" />
        </a-avatar>
        <div class="info">
          <div class="flex nickTime">
            <p>{{ item.nick }}</p>
            <p>{{dayjs(item.createAt).format('YYYY年MM月DD日') }}</p>
          </div>
          <p v-html="richTextContainer(item.comment)"></p>
        </div>
      </li>
    </ul>
  </a-card>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'
import dayjs from 'dayjs'
const props = defineProps({
  list: {
    type: Array,
    default: []
  }
})
const data = reactive({
  list: props.list
})
const richTextContainer = (text:any) =>{
    const newText = text.replace(/class="wl-emoji"/g, 'style="max-width: 20px; max-height: 20px;"');
    return newText
}
</script>

<style lang="scss" scoped>
.list {
  height:calc(100vh - 360px);
  overflow: auto;
  .list-item {
    padding: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-bottom: 1px solid $color-border;
    cursor: pointer;
    &:hover {
      background: var(--color-fill-1);
    }
    .info {
      margin-left: 10px;
      p {
        line-height: 1.5;
        &:first-child {
          font-size: 14px;
          color: var(--color-text-2);
          transition: all 0.2s;
          &:hover {
            color: $color-theme;
          }
        }
        &:last-child {
          font-size: 1rem;
          color: var(--color-text-3);
        }
      }
    }
  }
}
.nickTime {
  justify-content: space-between;
}
</style>
