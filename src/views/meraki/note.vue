<template>
    <div class="container">
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="content"> 
            <h4 style="font-size: 20px;">随手记录的一些小工具链接，进行分享</h4>
            <a-list
                class="list-demo-action-layout"
                :bordered="false"
                :split="false"
                :data="data.noteList"
                :gridProps="{ gutter: 0, span: 12 }" 
            >
                <template #item="{ item }">
                <a-list-item class="list-demo-item" action-layout="vertical"> 
                    <template #extra>
                        <div className="image-area">
                            <img :src="item.cover_url + '?imageMogr2/format/webp'" class="cover-image" />
                        </div>
                    </template>
                    
                    <template #meta>
                        <div class="meta">
                            
                            <a style="color: #83C1F1;" :href="item.url"><h3 >{{ item.title }}</h3></a>
                            <span >{{ item.content }}</span>
                        </div>
                    </template>
                </a-list-item>
                </template>
            </a-list>
            <Comment :locale="{reactionTitle:'你认为有哪个笔记值得你收藏？'}" reaction></Comment>
        </div>
        
        <Footer></Footer>
    </div>
</template>
<script setup lang="ts" name="Note">
import { getNoteList_c } from '@/apis'
import { reactive } from 'vue' 
const data = reactive({
    form:{
        title:'随手小记',
        icon:'notebook'
    },
    noteList:[] as any
})
const init =  () => {
    let params = {
        pageSize: 9999,
        current:1,
        status:1
    } 
    getNoteList_c(params).then((res:any)=>{
        data.noteList = res.list
    })
}
init()
</script>

<style lang="scss" scoped>
.container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
}
.content{
    width: 70%;
    height: 100%;
    margin: 30px auto;
    text-align: center;
}
.list-demo-action-layout .image-area {
  width: 183px;
  height: 119px;
  border-radius: 2px;
  overflow: hidden;
}

.list-demo-action-layout .list-demo-item {
  padding: 20px 0;
  border-bottom: 1px solid var(--color-fill-3);
}

.list-demo-action-layout .image-area img {
  width: 100%;
}

.list-demo-action-layout .arco-list-item-action .arco-icon {
  margin: 0 4px;
}
.meta {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  text-align: left;
}
.cover-image {
  width: 100%;
  height: 100%;
  object-fit:fill; /* 使用对象填充属性覆盖整个区域 */
}

</style>