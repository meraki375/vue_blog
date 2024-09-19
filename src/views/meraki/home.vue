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
            <a-carousel-item v-for="image in data.images">
              <img :src="image.image_url + '?imageMogr2/format/webp'" style="width: 100%;height: 100%;object-fit: cover;">
            </a-carousel-item>
          </a-carousel>
          <div class="top">
            <p id="hitokoto">
              <!-- <hitokoto /> -->
              永远对知识有追求心22
            </p>
            <div class="iconList">
              <div v-for="item in iconList">
                <div class="egg">
                  <a  :href="item.url" target="_blank" v-if="item.url">
                    <svg class="icon" aria-hidden="true" >
                      <use :xlink:href="item.code"></use>
                    </svg>
                  </a>
                  <div v-else class="egg_image">
                    <svg class="icon" aria-hidden="true" >
                      <use :xlink:href="item.code"></use>
                    </svg>
                    <div class="egg_hover">
                      <a-image
                        width="100"
                        :src="item.image_url"
                      />
                    </div>
                  </div>
                 
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
    </a-row>
    <a-row class="grid-content" :align="'stretch'" justify="center">
      <a-col  :xs="24" :sm="24" :md="20" :lg="20" :xl="16" :xxl="16">
        <div class="aplayer">
          <div style="padding: 0 20px;">
            <IconPark type="announcement" theme="outline" :size="'22px'" fill="#fff"/>
          </div>
          <div style="padding-right: 20px;">{{ data.msgIndex+ "/" + data.count }}</div>
          <div class="wh100" >
            <a-carousel
              style="width: 100%; height: 100px;"
              show-arrow="never"
              direction="vertical"
              :auto-play="true"
              indicator-type="never"
              @change="handleChange"
            >
              <a-carousel-item v-for="item in data.blogList" :key="item.id">
                <div  class="flex wh100" style="display: flex;">
                  <div class="flex wh100 bg" style="flex-direction: column; align-items: flex-start;">
                    
                    <div>
                      {{ `#${item.title}`  }}
                    </div>
                    <span>
                      {{ item.introduce }}
                    </span>
                    
                  </div>
                  <div class="flex" style="margin-right: 20px; position: relative;">
                      <IconPark style="margin-right: 20px;" type="like" theme="two-tone" size="36" :fill="['#fff' ,'#2F88FF']"  :strokeWidth="4" strokeLinejoin="miter" @click="islike(item.id)"/>
                      <div :class="[ data.isLikeNum ? 'offset-up': 'offset-down']">
                        {{ "+" + data.likeNum }}
                      </div>

                  </div>
                </div>
                
              </a-carousel-item>
            </a-carousel>
            
          </div>
          
          
        </div>
      </a-col>
     
      <a-col :xs="24" :sm="24" :md="20" :lg="20" :xl="16" :xxl="16" style="padding: 3px;">
        <a-row  :gutter="{ xs: 0, sm: 0, md: 0, lg: 0, xl: 24, xxl: 24 }" justify="center">
          <a-col class="blog-list" :xs="24" :sm="24" :md="24" :lg="24" :xl="17" :xxl="16" >
            <a-card class="card" v-for="item in data.blogList" hoverable @click="onDetails(item.id)">
              <template #actions>
                  <span class="icon-hover"> <icon-heart-fill /> {{ item.likeNum }}人觉得很赞 </span>
                  <span class="icon-hover"> <icon-eye /> {{ item.readCnt }}次浏览  </span>
              </template>
              <template #cover v-if="item.cover_url">
                <div style="overflow:hidden;  border-radius: 15px 15px 0 0; ">
                  <img
                    class="card_img"
                    alt="dessert"
                    :src="item.cover_url + '?imageMogr2/format/webp'"
                  />
                </div>
              </template>
              <a-card-meta  @click="onDetails(item.id)">
                <template #title >
                  <div
                    :style="{ display: 'flex', alignItems: 'center', color: '#1D2129' }"
                  >
                    <svg class="icon" style="font-size:12px" aria-hidden="true" >
                      <use :xlink:href="getIconByClassId(item.classId).code"></use>
                    </svg>
                    <p :style="{ color: getIconByClassId(item.classId).color,fontFamily: 'Helvetica',fontSize:'12px',marginLeft:'5px'}">{{ item.className }}</p>
                  </div>
                  <div style="word-wrap: break-word; overflow-wrap: break-word; font-size:20px">{{ item.title }}</div>
                  
                </template>
                <template #description >
                  {{item.introduce}}
                </template>
                <template #avatar>
                  
                  <div style="font-size: 12px;">
                    <div class="start">
                      <a-space>
                        <icon-clock-circle />
                        <span>{{dayjs().diff(item.updatedAt,'day')  + "天前"}}</span>
                      </a-space>
                    </div>
                    <div class="start">
                      
                      <a-space>
                        <icon-tag />
                        <span v-for="i in item.tabNames.split(',')">
                          {{ i || '暂无标签' }} 
                        </span>
                      </a-space>
                    </div>
                  </div>
                </template>
              </a-card-meta>
            </a-card>
          </a-col>
          <a-col :xs="0" :sm="0" :md="0" :lg="0" :xl="7" :xxl="8" >
            <div class="RecentComments">
              <comments :commentCount="data.commentCount" :userCount="data.userCount" v-if="data.commentCount"></comments>
            </div>
          
          </a-col>
        </a-row>
        
       
      </a-col>
      
      <a-row class="grid-content" :align="'stretch'" justify="center">
        <a-col :span="6" style="">
          <a-button size="large" long  :loading="data.loading" style="background-color: #83C1F1;color: white;" @click="init(7)">加载更多</a-button>
        </a-col>
      </a-row>
      
       <Footer></Footer>
    </a-row>
  
  </div>
  
</template>

<script setup lang="ts" name="Home">
import "../../assets/icon/iconfont.js"
import {IconPark} from '@icon-park/vue-next/es/all';
import { getWallpaperList_c, getMessage_c, getBlogList_c, getClassList_c, articleLike} from '@/apis'
import comments from './components/comments.vue'
import { reactive, onActivated } from 'vue'
import { Notification,  } from '@arco-design/web-vue';
import {useRouter } from 'vue-router'
import dayjs from 'dayjs'

const router = useRouter()

const iconList =[
  {icon:'微信',code:'#icon-weixin',image_url:'https://meraki-1313127528.cos.ap-guangzhou.myqcloud.com/picgo/wexin.jpeg'},
  {icon:'QQ',code:'#icon-QQ',image_url:'https://meraki-1313127528.cos.ap-guangzhou.myqcloud.com/picgo/qq.jpeg'},
  {icon:'知乎',code:'#icon-zhihu',url:'https://www.zhihu.com/people/xiao-bo-bo-66-23'},
  {icon:'GitHub',code:'#icon-github',url:'https://github.com/meraki375'},
  {icon:'bilibil',code:'#icon-bilibili',url:'https://space.bilibili.com/16445532'},
  {icon:'邮件',code:'#icon-youjian',url:'mailto:2468343656@qq.com'},
]
const iconList1 =[
  {value: 6, code:'#icon-biji',color:'#2099d8'},
  {value: 7,code:'#icon-Vue',color:'#2c4052'},
  {value: 9,code:'#icon-JS',color:'#00aa93'},
  {value: 10,code:'#icon-tucao',color:'#da1b1a'},
  {value: 11,code:'#icon-tuoputu_fuwuqi',color:'#a9d0f8'},
  {value: 12,code:'#icon-41shuoshuo',color:'#2d2d2d'},
  {value: 13,code:'#icon-html',color:'#fe5732'},

]
const data = reactive({
  loading:false,
  params:{
    pageSize: 7,
    current: 1,
    status: 1
  },
  images: [] as any,
  blogList: [] as any,
  content:'',
  classList:[],
  classCount:'',
  count:'',
  msgIndex:1,
  likeNum: 0,
  isLikeNum:false,
  commentCount: 0,
  userCount: 0,
})
const init = async (value?: any) => {
  data.loading = true
  if (value) {
    data.params.pageSize = data.params.pageSize + value
    await getBlogList_c(data.params).then((res: any) => {
      data.blogList = res.list
      data.count = res.count
      data.commentCount = res.commentCount
      data.userCount = res.usersCount
      data.loading = false
      if(res.count === res.list.length){
        Notification.info({
          title: '我想和你说：',
          content: '没有更多内容啦，不要再点啦!',
          position: 'bottomRight',
          closable: true,
        })
      }
    })
  } else {
    await Promise.all([
      getBlogList_c(data.params).then((res: any) => {
        data.blogList = res.list
        data.count = res.count
        data.commentCount = res.commentCount
        data.userCount = res.usersCount
        data.loading = false
      }),
      getClassList_c(data.params).then((res: any) => {
        data.classList = res.list
        data.classCount = res.count
      }),
      getMessage_c().then((res: any) => {
        data.content = res.data.content
      })
    ])
  }
}


const onDetails = (id:number) =>{
  return router.push({ path: '/meraki/blog', query: { id: id }})
}
const handleChange =(value:number)=>{
  data.msgIndex = value
}
const getIconByClassId = (classId:number)=> {
  return iconList1.find((icon:any) => icon.value === classId) || iconList1[0]
}
const getWallpaper = async()=>{
  await getWallpaperList_c({type:1,pageSize:10,current:1}).then((res:any)=>{
    if(res.code === 200){
      data.images = res.list
    }
  })
}
const islike = async(id:any)=>{
  await articleLike({path:`/meraki/blog?id=${id}`, type:'reaction0'}).then((res:any)=>{
    data.likeNum = res
    data.isLikeNum = true
    setTimeout(()=>{
      data.isLikeNum = false
    }, 1500);
  })
}
getWallpaper()
onActivated(() => {
  init();
})
</script>

<style lang="scss" scoped>
// @font-face {
//   font-family: 'qfont';
//   src: url('https://meraki-1313127528.cos.ap-guangzhou.myqcloud.com/picgo/Qfont.woff2');
// }
.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
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
  overflow-y: scroll;
}
.home::-webkit-scrollbar {
  width: 0px; /* 滚动条宽度 */
}
.background{
  width:100%;
  height:100%;
  position: relative;
}
.content{
  justify-content: center;
  width: 100%;
  height: 100%;
}
.top{
  width: auto;
  height: 65px;
  border-radius: 15px;
  background: rgba(0, 0, 0, .5);
  padding: 0 20px;
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
#hitokoto{
  display: inline-block;
  white-space: nowrap;
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
.egg .egg_hover{
  // display: none;
  width: 100px;
  height: 100px;
  padding: 10px;
  background: rgba(0, 0, 0, .5);
  position: relative;
  top: 20px;
  left: -35px;
  border-radius: 6px;
  transform: translateY(-70%) scale(0);
  transition: transform 0.5s ease;
} 
.egg .egg_hover::before{
  content: '';
  position: absolute;
  top: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid rgba(0, 0, 0, .5);;
} 
.egg .egg_image *:hover ~ .egg_hover{
    transform: translateY(0) scale(1);
    transition: transform 0.5s ease;
}
.egg_image{
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
.grid-content{ 
  width: 100%;
  height: auto;
  margin: 20px 0;
}
.card{
  // min-width: 275px;
  border-radius: 15px;
  margin: 0 0 20px 0;
  border: 1px solid #ccc;
  break-inside: avoid;//避免在主体框中插入任何中断（页面，列或区域）。
  box-shadow: 0 0 10px rgba(172, 177, 171, 0.5);
  transition: border-left-color 0.5s ease-in-out;
}

.card:hover {
  border-left: 1px solid #6bf8ff;
}
.card::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 15px;
  left: -2px;
  width: 0;
  height: 0;
  background: #6bf8ff;
  // border-left: 4px solid #6bf8ff;
  opacity: 0.8;
  animation: glowfrom 0.8s ease-in-out alternate forwards;
  box-shadow: 0 0 10px #6bf8ff ;
}


.card:hover::before {
  // z-index: 77;
  animation: glowto 0.8s ease-in-out alternate forwards;
}
 
@keyframes glowto {
  0% {
    width: 2px;
    height:0;
  }
  100% {
    width: 2px;
    height: calc(100% - 30px);
  }
}
@keyframes glowfrom {
  0% {
    width: 2px;
    height: calc(100% - 30px);
  }
  100% {
    width: 2px;
    height: 0;
  }
}
.card:hover .card_img {
  transform: scale(1.4) ;
  transition: transform 1s ease;
  border-radius: 15px 15px 0 0; 
}
.card_img {
  width:100%;
  height:auto;
  transition: transform 1s ease;
  border-radius: 15px 15px 0 0; /* 顺序为左上、右上、右下、左下 */
}
.blog-list{
  margin: 20px 0;
  column-count: 2; //多列的列数
  column-gap: 20px; /* 设置列之间的间距 */
}

@media (max-width: 575px) {
  /* 当窗口大小小于576px时，应用以下样式 */
  .blog-list {
    column-count: 1; /* 将列数改为一列 */
  }
}
.blog-item {
  break-inside: avoid; /* 防止元素被拆分到不同列 */
  margin-bottom: 20px; /* 设置元素之间的间距 */
}
.aplayer{
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 15px;
  background: #83C1F1;
  color: white;
}

.offset-up {
  position: absolute;
  left: 35px;
  opacity: 1;
  animation: glowto1 2s ease-in-out alternate forwards;
}
.offset-down{
  position: absolute;
  left: 35px;
  opacity: 0;

}
 
@keyframes glowto1 {
  0% {
    transform: translateY(10px);
  }
  100% {
    transform: translateY(-30px);
  }
}
.RecentComments{
  margin: 20px 0;
  width: 100%;
  height: 400px;
  border-radius: 15px;
  border: 1px solid #83C1F1;
}
</style>
