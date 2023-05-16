<template>
    <div class="contain">
        <Editor 
            :formKey="'centent'"
            :form="data.form"
            :catalogue="false"
        >
        </Editor>
        <div class="center" >
            <a-button type="primary" size="large" @click="edit()">发布</a-button>
        </div>
    </div>
</template>
<script setup lang="ts" name="Message">
import { reactive, } from 'vue'
import { editMessage, getMessage, } from '@/apis'
import { Message } from '@arco-design/web-vue'
const data = reactive({
    form: {
        centent: '',
    }
})

const init = async () =>{
  const res:any = await getMessage()
  data.form.centent = res.data.centent
}
const edit = async () =>{   
    const res = await editMessage(data.form)
    if(res.code == 201){
        Message.success(res.message)
    }
}
init() 
</script>
<style lang="scss" scoped>
.contain{
    margin: 10px;
    height: 100%;
    padding: 20px;
    background-color: #fff;
    overflow-y: auto;
}
.center{
    width: 100%;
    height: 70px;
}
</style>