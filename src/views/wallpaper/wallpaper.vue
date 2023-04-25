<template>
     <div class="table-page">
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" title="首页壁纸">
                <a-form :model="data.wallpaper" layout="vertical" >
                    <a-form-item  label="上传">
                        <Mupload
                            :fileList="data.wallpaperList"
                            fileKey="wallpaper1"
                            :form="data.wallpaper"
                            uploadFolder="wallpaper"
                            :limit="10"
                            @uploadSuccess="uploadSuccess"
                            @uploadError="uploadError"
                        ></Mupload>
                        <span>最好使用1080*1920分辨率的图片,已开启腾讯云图片压缩</span>
                    </a-form-item>
                    <a-form-item label="轮播图展示">
                        <a-carousel
                            :autoPlay="true"
                            animation-name="card" 
                            show-arrow="hover"
                            indicator-position="outer"
                            :style="{
                            width: '100%',
                            height: '360px',
                            }"
                        >
                            <a-carousel-item v-for="image in data.wallpaper.wallpaper1" :style="{ width: '60%' }">
                            <img
                                :src="image.image_url + '?imageMogr2/format/webp'"
                                :style="{
                                width: '100%',
                                }"
                            />
                            </a-carousel-item>
                        </a-carousel>
                    </a-form-item>
                   
                </a-form>
            </a-tab-pane>
            <a-tab-pane key="2" title="其他壁纸">
                Content of Tab Panel 2
            </a-tab-pane>
            <a-tab-pane key="3">
                <template #title>博客详情壁纸</template>
                Content of Tab Panel 3
            </a-tab-pane>
        </a-tabs>
     </div>
    
</template>
<script setup lang="ts" name="wallpaper">
import { ref, reactive } from 'vue'
import { getWallpaperList, editWallpaper, delWallpaper} from '@/apis'
import { Message } from '@arco-design/web-vue'
const data = reactive({
    wallpaper: {
        wallpaper1 :[] as any
    },
    wallpaperList: [] as any,
})
const uploadSuccess = ((file:any, fileKey:any, url:any)=>{
    editWallpaper({image_url: url,type:1}).then((res:any)=>{
        if(res.code === 201){
            info()
            Message.success(res.message)
        }else{
            Message.error(res.message)
        }
    })
})
const uploadError = ((file:any)=>{
    delWallpaper({id:file.id}).then((res:any)=>{
        if(res.code === 201){
            info()
            Message.success(res.message)
        }else{
            Message.error(res.message)
        }
    })
})
const info = (()=>{
    getWallpaperList({type:1,pageSize:10,current:1}).then((res:any)=>{
        if(res.code === 200){
            data.wallpaper.wallpaper1 = res.list
            data.wallpaperList = res.list.map((elem:any)=>{
                elem.url = elem.image_url + "?imageMogr2/format/webp"
                return elem
            })
        }
    })
})
info()
</script>
<style lang="scss" scoped>
.table-page {
    height: 100%;
    overflow-y:auto;
    margin: $margin;
    background: var(--color-bg-1);
    padding: $padding;
    padding-bottom: 0;
    box-sizing: border-box;
    // display: flex;
    flex-direction: column; 
}

</style>