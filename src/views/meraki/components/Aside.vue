<template>
  <div>
    <div class="top-box">
      <div class="container" @click="data.upTop = true">
        <div class="boys">
          <div class="girl"></div>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div :class="['drawer', data.toggleDrawerStyle ? 'isSearch' : '',data.upTop ? 'upTop' : '' ]">
        <div class="backg"  @click="data.upTop = false"></div>
        <div class="time-box" @click="data.upTop = false">
          {{ data.currentTime }}
        </div>
        
        <input 
          class="search-btn" 
          type="text" 
          size="30" 
          placeholder="搜索。。。" 
          autocomplete="off" 
          @focus="data.toggleDrawerStyle = true"
          @blur="data.toggleDrawerStyle = false"
        >
        <div class="path-box">
          <div
            v-for="item in routerMap.options.routes[0].children"
            :key="item.path"
          >
            <span @click="handleClickItem(item)">
              <img style="border-radius: 10px;" :src="item.img_url" />
            </span>
            <p>{{ item.name }}</p>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
  
  <!-- <player
    :id="'2088799380'"
    :type="'playlist'"
    :autoplay="true"
    :fixed="true"
  ></player> -->
  <!-- <Player id="五月天"  :autoplay="true" :fixed="true"></Player> -->
  
</template>

<script setup lang="ts" name="Aside">
import { ref, reactive, onBeforeUnmount } from 'vue'
import { useRouter } from 'vue-router' 
import dayjs from 'dayjs'
// import LoopMenuItem from './MenuItem.vue'
import routerMap from '@/router/index'
const router = useRouter() 
const data = reactive({
  toggleDrawerStyle: false,
  currentTime: getCurrentTime(),
  upTop: false
})

const timer = setInterval(() => {
  data.currentTime = getCurrentTime()
}, 1000)

onBeforeUnmount(() => {
  clearInterval(timer)
})
const handleClickItem = (item: any) => {
  if (item.path) {
    data.upTop = false
    router.push({ path: item.path })
  }
}
function getCurrentTime() {
  return dayjs().format('HH:mm:ss')
}

</script>

<style lang="scss" scoped>
.path-box{
  margin-top: 30px;
  display: grid; /* 使用网格布局 */
  grid-template-columns: repeat(5, 1fr); /* 3 列，每列宽度相等 */
  gap: 10px; /* 项目之间的间距 */
  span{
    width: 100px;
    height: 100px;
    border-radius: 20px;
    margin: 20px;
    background: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 18px 18px 30px rgba(0, 0, 0, 0.2);
                // -18px -18px 30px rgba(255, 255, 255, 1);
    transition: all .25s ease-out;
    img{
      width: 68px;
      height: 68px;
      transition: all .35s ease-out;
    }
    &:hover{
      cursor: pointer;
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.2),
                  0 0 0  rgba(255, 255, 255, 0.8),
                  inset 18px 18px 30px rgba(0, 0, 0, 0.1),
                  inset -18px -18px 30px rgba(255, 255, 255, 1);
    }
    &:hover img{
      width: 58px;
      height: 58px;
    }
    
  }
  p{
    text-align: center;
    color: #ffffff;
  }
}
.time-box{
  width: 100%;
  height: 50px;
  font-size: 70px;
  color: #ffffff;
  text-align: center;
}
@keyframes magnify {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes shrink {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1);
  }
}
.search-btn{
  font-size: 20px;
  color: #ffffff;
  width: 400px;
  height: 60px;
  margin-top: 30px;
  border-radius: 25px;
  background: rgb(209 221 226 / 50%);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(20px);
  border: none;
  transition: width 0.3s ease-in-out; /* 添加过渡效果 */
}
.search-btn::placeholder {
  text-align: center;
  color: #ffffff;
}
.search-btn:hover::placeholder {
  color: rgba(0,0,0,0.5)
}
.search-btn:hover {
  width: 740px;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
}
.search-btn:focus {
  width: 700px;
  background: rgba(255, 255, 255, 1);
  outline: none; /* 阻止默认的蓝色外边框 */
  caret-color: #83C1F1;
  color: #000000;
  padding: 0 20px; 
}
// .search-btn:focus~ .drawer{
//   background: red;
// }
.search-btn:focus::placeholder {
  color: transparent;
}
.top-box {
  width: 100%;
  height: 20px;
  background: rgb(0, 0, 0, 0.2);
  position: absolute;
  z-index: 9999;
  top: 0;
}
.upTop{
  top: 0 !important;
}
.drawer{
  width: 100%;
  height: 100vh;
  position: absolute;
  top: -100vh;
  z-index: 1000;
  background: rgba(131, 193, 241, 0.5);
  // background: #ffffff;
  backdrop-filter: blur(5px);
  transition: top 0.3s ease-in-out; /* 添加过渡效果 */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
// .upTop .drawer{
//   top: -100vh !important;
// }
.isSearch{
  // background: rgba(131, 193, 241, 0.5);
  backdrop-filter: blur(10px);
  background-image: radial-gradient(rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%),radial-gradient(rgba(0,0,0,0) 33%,rgba(0,0,0,.3) 166%);
  transition: .25s;
}
//跳动方块
.container {
  width: 100%;
  height: 20px; 
  display: flex;
  justify-content: center;
}
.girl{
  width: 10px;
  height: 10px;
  --duration: 3s;
  background: rgb(248, 165, 178);
  border-radius: 2px;
  animation: slide var(--duration) ease-in-out infinite;
}
@keyframes slide {
  0%, 100% { /* 添加起始和结束状态 */
    transform: translateX(0);
    filter: brightness(1);
  }
  50% { /* 添加中间状态 */
    transform: translateX(110px);
    filter: brightness(1.45);
  }
}
.boys{
  width: 100px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.boys span{
  background: #83C1F1;
  width: 10px;
  height: 10px;
  border-radius: 2px;
}
.boys span:nth-child(2) {
  animation: jump-off 3s ease-in-out infinite;
}
.boys span:nth-child(3) {
  animation: jump-off-2 3s ease-in-out infinite;
}
.boys span:nth-child(4) {
  animation: jump-off-3 3s ease-in-out infinite;
}
.boys span:nth-child(5) {
  animation: jump-off-4 3s ease-in-out infinite;
}
@keyframes jump-off {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  10% {
    transform: scale(0);
    opacity: 0;
  }
  20% {
    transform: scale(1);
    opacity: 1;
  } 
  80% {
    transform: scale(1);
    opacity: 1;
  }
  90% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes jump-off-2 { 
  10% {
    transform: scale(1);
    opacity: 1;
  }
  20% {
    transform: scale(0);
    opacity: 0;
  }
  30% {
    transform: scale(1);
    opacity: 1;
  } 
  70% { 
    transform: scale(1);
    opacity: 1;
  }
  80% { 
    transform: scale(0);
    opacity: 0;
  }
  90% {
    transform: scale(1);
    opacity: 1;
  } 
}
@keyframes jump-off-3 { 
  20% {
    transform: scale(1);
    opacity: 1;
  }
  30% {
    transform: scale(0);
    opacity: 0;
  }
  40% {
    transform: scale(1);
    opacity: 1;
  } 
  60% { 
    transform: scale(1);
    opacity: 1;
  }
  70% { 
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(1);
    opacity: 1;
  } 
}
@keyframes jump-off-4 { 
  30% {
    transform: scale(1);
    opacity: 1;
  }
  40% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  60% { 
    transform: scale(0);
    opacity: 0;
  }
  70% { 
    transform: scale(1);
    opacity: 1;
  } 
}
.backg{position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: -1; }
</style>
