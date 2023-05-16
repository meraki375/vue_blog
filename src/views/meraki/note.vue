<template>
    <div class="container">
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="centent"> 
            <div>随手记录的一些小工具链接，进行分享</div>
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
                        <img alt="arco-design" :src="item.cover_url + '?imageMogr2/format/webp'" />
                    </div>
                    </template>
                    <a-list-item-meta
                    :title="item.title"
                    :description="item.centent"
                    >
                     
                    </a-list-item-meta>
                </a-list-item>
                </template>
            </a-list>
            
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
        q:'',
        date:''
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
.centent{
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
</style>