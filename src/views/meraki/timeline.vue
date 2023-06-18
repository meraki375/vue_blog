<template>
    <div class="container">
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="content">
            <a-row >
                <a-timeline :style="{ marginRight: '100px' }" label-position="relative"> 
                    <a-timeline-item :label="dayjs(item.createAt).format('YYYY年MM月DD日')" v-for="item in data.timeList" >
                        <a-row :style="{ display: 'inline-flex', alignItems: 'center' }" @click="isClick(item.id)">
                            <img
                                width="40"
                                :style="{ marginRight: '16px', marginBottom: '12px', objectFit: 'fill' }"
                                :src="item.cover_url || 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png'"
                            />
                            <div :style="{ marginBottom: '12px' }">
                                {{ item.title }}
                                <div :style="{ fontSize: '12px', color: '#4E5969' }" v-if="item.introduce">
                                {{ item.introduce.length > 15 ?  item.introduce.slice(0,15) + '...' : item.introduce}}
                                </div>
                            </div>
                        </a-row>
                    </a-timeline-item>
                </a-timeline>
            </a-row >
        </div>
        <Footer></Footer>
    </div>
</template>

<script setup lang="ts" name="Timeline">
import dayjs from 'dayjs'
import { getBlogList_c} from '@/apis'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
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

const isClick  = (id:any) =>{
    return router.push({ path: '/meraki/blog', query: { id: id }})
}
init()
</script>

<style lang="scss" scoped>
.content{
    width: 70%;
    height: 100%;
    margin: 30px auto;
}
.container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    padding-bottom: 20px;
}
:deep(.arco-timeline-item-label-relative > .arco-timeline-item-label){
    max-width: 300px;
}
</style>