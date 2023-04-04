<template>
    <div class="container">
        <wallpaper :form="data.form"></wallpaper>
        <div class="centent"> 
            <Editor
                :formKey="'centent'"
                :form="data.form"
                :readonly="true"
                :disabled="true"
                :border="false"
            >

            </Editor> 
        </div>
        
    </div>
</template>

<script setup lang="ts" name="Mblog">
import { getBlog, getClassList } from '@/apis'
import { onBeforeUnmount, ref, shallowRef, onMounted, watch, reactive } from 'vue'
import { useRoute } from 'vue-router'  
const id = useRoute().query.id
const data = reactive({
    form: {
        title:'',
        centent:'',
        createAt:'',
        icon:'book-open'

    },
})
const init =  () => {
    
    getBlog({id:id}).then((res:any)=>{
        data.form = res.article
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
}
</style>