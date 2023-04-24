<template> 
  <div class="home">
     
    <a-row class="grid-home" :align="'stretch'">
      <a-col :span="24">
        <div class="background">
          <a-carousel
            :style="{
              width: '100%',
              height: '100%', 
            }"
            :auto-play="true"
            animation-name="fade"
            indicator-type="never"
            show-arrow="never"
            :move-speed=10000
          > 
            <a-carousel-item v-for="image in images">
              <img src="https://api.ixiaowai.cn/api/api.php" style="width: 100%;height: 100%;object-fit: cover;">
              <!-- <img
                :src="image"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                "
              /> -->
            </a-carousel-item>
          </a-carousel>
          <div class="top">
            <p>温暖的灵魂终将相遇</p>
            <div class="iconList">
              <div v-for="item in iconList">
                <div class="egg">
                  <a  :href="item.url">
                    <svg class="icon" aria-hidden="true" >
                      <use :xlink:href="item.code"></use>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="header"> 
            <svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
            <defs>
            <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g class="parallax">
            <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
            <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
            </svg>
          </div>
          <sakana></sakana>
        </div>
      </a-col>
       
      <!-- <a-col :span="12">
        Col
      </a-col> -->
    </a-row>
    <a-row class="grid-centent" :align="'stretch'" justify="center">
      <a-col :span="20">
        
        <!-- <div class="centent">  -->
            <div calss="aplayer">
              <player></player>
            </div>
            <a-row class="grid-centent"   justify="space-around">
              <a-col :span="17" class="blog-list">
                <a-card class="card" v-for="item in data.blogList" >
                  <template #actions>
                    <a-space :size="40">
                      
                        <icon-heart />

                        <icon-eye />
                        
                        <icon-star />
                      
                    </a-space>
                  </template>
                  <template #cover @click="onDetails(item.id, item.title)">
                    <div style="height: 204px; border-radius: 15px;">
                      <img
                        style="width:100%; border-radius: 15px;"
                        alt="dessert"
                        :src="item.cover_url"
                      />
                    </div>
                  </template>
                  <a-card-meta :title="item.title" @click="onDetails(item.id, item.title)">
                    <template #description >
                      <div v-html="item.centent.slice(0,100).concat('...')"></div>
                    </template>
                    <template #avatar>
                      <div :style="{    color: '#1D2129' }">
                        <div class="start">
                          <icon-clock-circle style="margin-right: 5px;"/>
                          <h5>{{item.createAt}}</h5>
                        </div>
                        <div class="start">
                          <icon-tag style="margin-right: 5px;"/>
                          <h5>{{'分类'}}</h5>
                        </div>
                      </div>
                    </template>
                  </a-card-meta>
                </a-card>
                
              </a-col>
              <a-col :span="6" style="width: 100%; height: 100%;">
                <div class="center border">
                  <div class="text-center">
                    <a-avatar :size="96">
                      <img
                        alt="avatar"
                        src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                      />
                    </a-avatar>
                    <h1>meraki</h1>
                    <h3>绝口不提不是因为忘记,而是因为铭记</h3>
                    <div class="evenly" style="margin: 10px;">
                       <div>
                         <h2>文章</h2>
                         <h3>22</h3>
                       </div>
                       <div >
                          <h2>文章</h2>
                         <h3>22</h3>
                       </div>
                       <div>
                          <h2>文章</h2>
                          <h3>22</h3>
                       </div>
                    </div>
                  </div>
                </div>
                <div class="border" v-html="data.centent"></div>
                
              </a-col>
            </a-row>
        <!-- </div> -->
      </a-col>
       
      <!-- <a-col :span="12">
        Col
      </a-col> -->
    </a-row>
  
  </div>
  
</template>

<script setup lang="ts" name="Home">
import "../../assets/icon/iconfont.js"
import { getImageList, getMessage } from '@/apis'
import { ref, nextTick, reactive, getCurrentInstance } from 'vue' 
import { getBlogList } from '@/apis'
import {useRouter } from 'vue-router'
const router = useRouter()

const { proxy }: any = getCurrentInstance()
const images = [
  'https://xwmusicdata.oss-accelerate.aliyuncs.com//zyguitartest/app/pkg/20230308180520.JPG',
  'https://xwmusicdata.oss-accelerate.aliyuncs.com//zyguitartest/app/pkg/20230308180610.JPG',
  'https://xwmusicdata.oss-accelerate.aliyuncs.com//zyguitartest/app/pkg/20230308180627.JPG',
];
const iconList =[
  {icon:'微信',code:'#icon-weixin',url:''},
  {icon:'QQ',code:'#icon-QQ',url:''},
  {icon:'知乎',code:'#icon-zhihu',url:''},
  {icon:'GitHub',code:'#icon-github',url:''},
  {icon:'bilibil',code:'#icon-bilibili',url:''},
  {icon:'邮件',code:'#icon-youjian',url:''},
]
const data = reactive({
  params:{
    pageSize: 10,
    current: 1,
    q:'',
    date:''
  },
  images: [] as any,
  blogList: [] as any,
  centent:''
})
const init = async () => {
  await getBlogList(data.params).then((res:any)=>{
    data.blogList = res.list
  })
  let res:any = await getMessage()
  data.centent = res.data.centent
}
const onDetails = (id:number, title:string) =>{
  return router.push({ path: '/meraki/blog', query: { id: id, title:title }})
}
init()
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'qfont';
  src: url('../../assets/font/Qfont.ttf');
}
.grid-demo .arco-col {
  width:100%;
  height:100%;
}
.grid-home{
  width: 100%;
  height: 100%;
  background: #fff;
  overflow:hidden;
}
.home{
  width:100%;
  height:100%;
  overflow-y: auto;
}
.background{
  width:100%;
  height:100%;
  position: relative;
}
.centent{
  justify-content: center;
  width: 100%;
  height: 100%;
}
.top{
  width: 63%;
  height: 65px;
  border-radius: 15px;
  background: rgba(0, 0, 0, .5);
  color: #EAEADF;
  text-align: center;
  line-height: 65px;
  font-size: 35px;
  position: absolute;
  font-family: qfont;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 9;
}
.iconList{
  display: flex;
  justify-content: center
}
.egg{
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background: rgba(0, 0, 0, .5);
  margin:10px 10px 0 0;
  line-height: 40px;
}
.header {
  position:absolute;
  text-align:center;
  bottom: 0;
  width: 100%;
  z-index: 8;

} 
.flex { /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position:relative;
  width: 100%;
  height:15vh;
  margin-bottom:-7px; /*Fix for safari gap*/
  min-height:100px;
  max-height:150px;
}

.content {
  position:relative;
  height:20vh;
  text-align:center;
  background-color: white;
}  
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% { 
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
  .content {
    height:30vh;
  }
  h1 {
    font-size:24px;
  }
}
.border{
  border-radius: 15px;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}
.grid-centent{ 
  // display: flex;
  width: 100%;
  height: auto;
  margin: 20px 0;
  // overflow:hidden;
}
.card{
  // width: 50%; 
  border-radius: 15px;
  margin: 0 20px 20px 0;
  border: 1px solid #ccc;
  break-inside: avoid;//避免在主体框中插入任何中断（页面，列或区域）。
}
.blog-list{
  margin: 20xp 0;
  column-count: 2; //多列的列数
  column-gap: 0;//列间距
}
</style>
