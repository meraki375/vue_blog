<template>
    <div class="container">
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="centent"> 
                <a-timeline :style="{ marginRight: '100px' }" label-position="relative"> 
                <a-timeline-item :label="dayjs(item.createAt).format('YYYY年MM月DD日 HH:mm:ss')" v-for="item in data.timeList">
                    <template #dot>
                        <IconClockCircle :style="{ fontSize: '12px', color: '#F53F3F' }" />
                    </template>
                    {{ item.title }}
                </a-timeline-item>
                
                </a-timeline>
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts" name="Timeline">
import dayjs from 'dayjs'
import { getBlogList_c} from '@/apis'
import { reactive } from 'vue'
const data = reactive({
    form:{
        title:'时间线',
        icon:'timeline'
    },
    timeList:[] as any
})
const init =  () => {
    let params = {
        pageSize: 9999,
        current:1,
        q:'',
        date:''
    } 
    getBlogList_c(params).then((res:any)=>{
        data.timeList = res.list
    })
}
init()
</script>

<style lang="scss" scoped>
.centent{
    width: 70%;
    height: 100%;
    margin: 30px auto;
}
.container{
    background-color: #fff;
    overflow-y: auto;
    padding-bottom: 20px;
}
:deep(.arco-timeline-item-label-relative > .arco-timeline-item-label){
    max-width: 300px;
}
</style>