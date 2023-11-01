<template>
  <div class="detail" ref="containerRef">
    <a-affix :target="containerRef">
      <section class="head">
        <a-page-header title="详情" subtitle="Base Detail Page" @back="back">
          <template #breadcrumb>
            <a-breadcrumb>
              <a-breadcrumb-item v-for="(item, index) in route.matched" :key="index">{{
                item.meta.title
              }}</a-breadcrumb-item>
            </a-breadcrumb>
          </template>
          <template #extra>
            <a-button @click="back">返回</a-button>
          </template>
        </a-page-header>
      </section>
    </a-affix>
    <section class="item">
      <a-descriptions title="基本信息" size="small">
        <a-descriptions-item label="编号">Lin我i什么</a-descriptions-item>
        <a-descriptions-item label="消息标题">男</a-descriptions-item>
        <a-descriptions-item label="查看量">07月16日</a-descriptions-item>
        <a-descriptions-item label="发布人">广州市</a-descriptions-item>
        <a-descriptions-item label="发布状态">199 **** 6962</a-descriptions-item>
        <a-descriptions-item label="发送时间">326010228@qq.com</a-descriptions-item>
        <a-descriptions-item label="创建时间">双鱼座</a-descriptions-item>
        <a-descriptions-item label="上下架">
          <a-space :size="5">
            <a-tag color="purple">王者荣耀</a-tag>
            <a-tag color="magenta">打疫苗</a-tag>
          </a-space>
        </a-descriptions-item>
        <a-descriptions-item label="标签">
          <a-space :size="5">
            <a-tag color="#f53f3f">vue3</a-tag>
            <a-tag color="#7816ff">pinia</a-tag>
            <a-tag color="#00b42a">vite</a-tag>
            <a-tag color="#165dff">ts</a-tag>
            <a-tag color="#ff7d00">arco design</a-tag>
          </a-space>
        </a-descriptions-item>
      </a-descriptions>
    </section>

    <section class="item">
      <a-descriptions title="其他信息" :column="1" :label-style="{ dispaly: 'flex' }">
        <a-descriptions-item label="标题">Lin</a-descriptions-item>
        <a-descriptions-item label="内容">男</a-descriptions-item>
      </a-descriptions>
    </section>
  </div>
</template>

<script setup lang="ts" name="IndicatorDetail">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()

const containerRef = ref()

const back = () => {
  router.back()
}
</script>

<style lang="scss" scoped>
.detail {
  overflow: auto;
  .head {
    background: var(--color-bg-1);
  }
  .item {
    margin: $margin;
    padding: 20px 30px;
    background: var(--color-bg-1);
    border-radius: 2px;
  }
}
</style>
