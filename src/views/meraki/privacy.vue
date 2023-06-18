<template>
    <div class="container" ref="containerRef" >
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="content"> 
            <Editor
                :formKey="'content'"
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

<script setup lang="ts" name="Timeline">
import { getPrivacy_c} from '@/apis'
import { reactive, ref} from 'vue'
const containerRef = ref() as any;
const data = reactive({
    form:{
        title:'个人声明',
        icon:'timeline'
    },
})
const init =  () => {
    getPrivacy_c({}).then((res:any)=>{
        Object.assign(data.form, res.data)
    })
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
    background-color: #fff;
    overflow-y: auto;
    padding-bottom: 20px;
}
:deep(.arco-timeline-item-label-relative > .arco-timeline-item-label){
    max-width: 300px;
}
</style>