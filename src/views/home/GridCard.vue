<template>
  <a-card title="项目" :bordered="false" size="medium">
    <ul class="list">
      <li class="list-item" v-for="item in data.list" :key="item.title">
        <div class="head">
          <a-avatar shape="square">
            <img
              alt="avatar"
              :src="item.cover_url"
            />
          </a-avatar>
          <span>{{ item.title }}</span>
        </div>
        <p class="text">{{ item.content }}</p>
        <div class="flex time">
          <p class="desc">{{ dayjs(item.createAt).format('YYYY年MM月DD日') }}</p>
          <a-statistic :value="item.progress" :value-from="0" :start="true" animation>
            <template #prefix>
              <icon-arrow-rise />
            </template>
            <template #suffix>%</template>
          </a-statistic>
        </div>
      </li>
    </ul>
  </a-card>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from 'vue'
import { getProjectList, } from '@/apis'
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

</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  .list-item {
    width: 33.33%;
    flex: 1;
    min-width: 200px;
    color: var(--color-text-3);
    line-height: 1.5;
    padding: 10px;
    box-sizing: border-box;
    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      border-radius: 4px;
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);
    }
    .head {
      display: flex;
      align-items: center;
      span {
        margin-left: 10px;
        font-size: 1.125rem;
        line-height: 1.75rem;
        color: var(--color-text-2);
      }
    }
    .text {
      margin-top: 10px;
      height: 50px;
    }
    .time{
      align-items: baseline;
      justify-content: space-around;
    }
    .desc {
      font-size: 1.125rem;
    }
  }
}
</style>
