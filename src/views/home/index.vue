<template>
  <div class="home" id="home-wrap">
    <WorkPlatform></WorkPlatform>

    <div class="wrap">
      <section class="left">
        <div class="item"><GridCard v-if="data.projectList.length" :list="data.projectList"></GridCard></div>
        <div class="item"><FastCard></FastCard></div>
        <!-- <div class="item"><ImageCard></ImageCard></div> -->
      </section>
      <section class="right">
        <div class="item"><ListCard v-if="data.commentList.length" :list="data.commentList"></ListCard></div>
      </section>
    </div>

    <a-back-top target-container="#home-wrap">
      <GiSvgIcon name="backtop" :size="50" style="cursor: pointer"></GiSvgIcon>
    </a-back-top>
  </div>
</template>

<script setup lang="ts" name="Home">
import WorkPlatform from './WorkPlatform.vue'
import GridCard from './GridCard.vue'
import ListCard from './ListCard.vue'
import FastCard from './FastCard.vue'
import ImageCard from './ImageCard.vue'
import { ref, reactive, getCurrentInstance } from 'vue'
import { getProjectList,getCommentList } from '@/apis'
const data = reactive({
  projectList: [],
  commentList: []
})
const { proxy } = getCurrentInstance()
//获取项目列表
const getList = async () => {
  let params = {
        pageSize: 30,
        current:1,
    } 
  const res = await getProjectList(params)
  data.projectList = res.list
}
//获取消息列表
const getcommentList= async () => {
  let params = {
        pageSize: 30,
        current:1,
    } 
  const res = await getCommentList(params)
  data.commentList = res.list
}
getList()
getcommentList()
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  .wrap {
    display: flex;
    flex-wrap: wrap;
    padding: calc($margin / 2);
    .left,
    .right {
      flex: 1;
      flex-shrink: 0;
      min-width: 450px;
      overflow: hidden;
    }
    .item {
      padding: calc($margin / 2);
    }
  }
}
</style>
