<template>
    <div class="contain">
        <Editor 
            :formKey="'content'"
            :form="data.form" 
        >
        </Editor>
        <div class="center" >
            <a-button type="primary" size="large" @click="edit()">更新</a-button>
        </div>
    </div>
</template>
<script setup lang="ts" name="Privacy">
import { reactive, } from 'vue'
import { editPrivacy, getPrivacy, } from '@/apis'
import { Message } from '@arco-design/web-vue'
const data = reactive({
    form: {
        content: '',
    }
})

const init = async () =>{
  const res:any = await getPrivacy()
  data.form.content = res.data.content
}
const edit = async () =>{   
    const res = await editPrivacy(data.form)
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