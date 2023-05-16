<template>
  <div class="container" ref="containerRef">
    <a-form :form="data.form" size="medium" :model="data.form" auto-label-width>
      <a-form-item label="标题" :rules="rules.title">
        <a-input v-model="data.form.title" placeholder="请输入标题" />
      </a-form-item>
      <a-form-item label="简介" >
        <a-textarea  v-model="data.form.introduce" placeholder="请输入简介" :max-length="100" allow-clear show-word-limit auto-size/>
      </a-form-item>
      <a-form-item field="cover_url" label="博客封面">
          <Mupload
              :fileList="data.fileList"
              fileKey="cover_url"
              :form="data.form"
              uploadFolder="image"
          ></Mupload>
      </a-form-item>
      <a-form-item label="内容" >
        <Editor
          :formKey="'centent'"
          :form="data.form"
          :container="containerRef"
        >
        </Editor>
      </a-form-item>
      <a-form-item label="分类" >
        <a-select v-model="data.form.classId"  placeholder="请选择分类" > 
          <a-option 
            v-for="item in options"
            :key="item.id"
            :value="item.id"
            :label="item.name"
          ></a-option>
        </a-select>
      </a-form-item>
      <a-form-item label="上下架" >
        <a-switch v-model="data.form.status" :checked-value="1" :unchecked-value="0">
          <template #checked>
            上架
          </template>
          <template #unchecked>
            下架
          </template>
        </a-switch>
      </a-form-item>
        <a-space class="center">
          <a-button type="primary" @click="next(data.form)">提交</a-button>
          <a-button @click="router.back()">返回</a-button>
        </a-space>
    </a-form>
  </div>
</template>

<script setup lang="ts" name="Blog_edit">
import { useUserStore } from '@/store'
import { editBlog, getBlog, getClassList } from '@/apis'
import {  ref,reactive } from 'vue'
import {useRouter, useRoute } from 'vue-router'
import { Message } from '@arco-design/web-vue'
const id = useRoute().query.id
const router = useRouter()
const userStore:any = useUserStore().userInfo 
const containerRef = ref() as any
const data = reactive({
  form:{
    title: '',
    introduce:'',
    centent: '', 
    classId:null,
    status:1,
    cover_url:''
  } as any,
  fileList:[] as any
})

const options = ref([] as any);

const rules = {
  title: [{ required: true, message: '请输入标题' }],
  centent: [{ required: true, message: '请输入内容' }]
}
const next = async(form:any) => {
  let params = {
    id:id,
    ...data.form,
    senderName:userStore.username,
    uid: userStore.id 
  } 
  let res = await editBlog(params)
  if(res.code === 201){
    Message.success(res.message)
  }else{
    Message.error(res.message)
  }
}

const init = async () =>{
  let params = {
    pageSize: 9999,
    current:1,
    q:''
  } 
  const ret = await getClassList(params)
  options.value = ret.list
  if(id){
    const res = await getBlog({id:id})
    data.form = res.article
    if(res.article.cover_url){
      data.fileList = [{url: res.article.cover_url}]
    }
    
  }
}

init() 
</script>

<style lang="scss" scoped>
.container{
  background: #fff;
  margin: 20px;
  padding: 20px;
  overflow-y: auto;
}

</style>
