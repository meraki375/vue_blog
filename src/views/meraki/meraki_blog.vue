<template>
    <div class="container" ref="containerRef" >
        <wallpaper :form="data.form"></wallpaper>
        <div class="centent " >
            <div style="text-align: center;font-size: 16px;">
                <p>{{`提醒：本文已经超过${dayjs().diff(dayjs(data.form.updatedAt), 'day')}天未修改，其中某些信息可能已经过时，请谨慎使用！`}}</p>
                <p>你似乎正在查看一篇很久远的文章。</p>
                <p>为了你这样的访客，我特地保留了我的历史博文。不要笑话过去的我，用温柔的目光看下去吧。</p>
            </div>
            
            <Editor
                :formKey="'centent'"
                :form="data.form"
                :readonly="true"
                :disabled="true"
                :border="false"
                :container="containerRef"
            >

            </Editor> 
            <Footer></Footer>
        </div>
        
    </div>
</template>

<script setup lang="ts" name="Mblog">
import { getBlog_c } from '@/apis'
import { reactive, onActivated, ref } from 'vue'
import { useRoute } from 'vue-router'  
import dayjs from 'dayjs'
const containerRef = ref() as any;

const data = reactive({
    form: {
        title:'',
        centent:'',
        createAt:'',
        icon:'book-open',
        className:'',
        updatedAt:''
    },
    scrollType: 0
})
const init =  () => {
    const id = useRoute().query.id
    getBlog_c({id:id}).then((res:any)=>{
        data.form = res.article
        data.form.className = res.article.classObj.name
    })
}
onActivated(() => {
  init();
})
</script>

<style lang="scss" scoped>
.centent{
    width: 75%; 
    margin: 30px auto;
}
.container{
    background-color: #fff;
    overflow-y: auto;
}
</style>