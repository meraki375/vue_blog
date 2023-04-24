<template>
  <div class="step-form">
    <section class="form-box">
      <a-steps :current="current">
        <a-step description="确保个人信息正确">信息是否正确</a-step>
        <a-step description="确认文章信息">填写文章信息</a-step>
        <a-step description="恭喜您，发布成功">完成发布</a-step>
      </a-steps>

      <div :key="current" :class="animatedName">
        <div v-show="current === 1" @next="next" class="flex">
          <a-form :model="data.form" size="medium" auto-label-width>
            <a-form-item label="发布人" >
               <a-input v-model="userStore.username" placeholder="请输入发布人姓名" disabled/>
            </a-form-item>
            <a-form-item label="发布人邮箱" >
              <a-input-group style="width: 100%"> 
                <a-input v-model="userStore.email" placeholder="暂无邮箱" disabled/> 
              </a-input-group>
            </a-form-item>
            <a-form-item label="发布人手机号" >
              <a-input v-model="userStore.phone" placeholder="暂无手机号" disabled/>
            </a-form-item>
            <a-form-item label="性别" >
              <a-select :style="{width:'160px'}" :trigger-props="{ autoFitPopupMinWidth: true }" v-model="userStore.sex" disabled>
                <a-option label="男生" :value="1"></a-option>
                <a-option label="女生" :value="0"></a-option>
              </a-select>
            </a-form-item>
            <a-form-item>
              <div class="flex center"> 
                <a-button type="primary" @click="back">取消</a-button>
                <a-button type="primary" @click="next">下一步</a-button>
              </div> 
            </a-form-item>
          </a-form>
        </div>
        <div v-show="current === 2" :form="data.form" @next="next" @prev="prev" class="flex">
          <a-form  size="medium" :model="data.form" auto-label-width>
            <a-form-item label="标题" :rules="rules.title">
              <a-input v-model="data.form.title" placeholder="请输入标题" />
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
              <div  >
                <Editor
                :formKey="'centent'"
                :form="data.form"
              >
              </Editor>
              </div>
            
            </a-form-item>
            <a-form-item label="分类" >
              <a-select v-model="data.form.class"  placeholder="请选择分类" > 
                <a-option 
                  v-for="item in options"
                  :key="item.value"
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
            <a-form-item>
              <div class="flex center">
                <a-button @click="prev">上一步</a-button>
                <a-button type="primary" :loading="loading" @click="next(data.form)">提交</a-button> 
              </div>
            </a-form-item>
          </a-form>
        </div>
        <div v-show="current === 3" :form="data.form" @again="current = 1">
          <a-result status="success" title="操作成功">
            <template #subtitle>文章已发布</template>
          </a-result>
          <a-row justify="center">
            <a-space>
              <a-button type="primary" size="medium" @click="current = 1">发布新的文章</a-button>
              <a-button size="medium" @click="back">查看文章管理</a-button>
            </a-space>
          </a-row>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts" name="Blog_edit">
import { useUserStore } from '@/store'
import { editBlog, getBlog, getClassList } from '@/apis'
import { onBeforeUnmount, ref, shallowRef, onMounted, watch, reactive } from 'vue'
import {useRouter, useRoute } from 'vue-router'
const router = useRouter() 
const id = useRoute().query.id

const current = ref(1)

const data = reactive({
  form:{
    title: '',
    centent: '', 
    class:[] as any,
    status:1,
    cover_url:''
  },
  fileList:[] as any
})
const animatedName = ref('to-right')

const loading = ref(false)

const userStore:any = useUserStore().userInfo 

const options = ref([] as any);

const rules = {
  title: [{ required: true, message: '请输入标题' }],
  centent: [{ required: true, message: '请输入内容' }]
}

const next = async(form:any) => { 
  current.value++
  if (current.value === 3) {
    let params = {
      id:id,
      ...data.form,
      senderName:userStore.username,
      uid: userStore.id 
    } 
    let res = await editBlog(params)
  }
}
//返回上一步骤
const prev = () => {
  current.value--
}
//返回
const back = () =>{
  router.back()
} 

watch(
  () => current.value,
  (newVal, oldVal) => {
    if (newVal > oldVal || (newVal === 1 && oldVal === 3)) {
      animatedName.value = 'to-right'
    } else {
      animatedName.value = 'to-left'
    }
  }
)

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
// .flex{
//   margin-top:50px; 
// }
.center{
  justify-content:space-around;
  width:100%;
}

@keyframes toRight {
  0% {
    opacity: 0.5;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes toLeft {
  0% {
    opacity: 0.5;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.to-right {
  animation-name: toRight;
  animation-duration: 0.5s;
  margin-top:30px;
}
.to-left {
  animation-name: toLeft;
  animation-duration: 0.5s;
}
.step-form {
  overflow: scroll;
  flex: 1;
  margin: $margin;
  padding: $padding;
  background: var(--color-bg-1);
  display: flex;
  justify-content: center;
  .form-box {
    width: 100%;
    min-width: 500px;
    margin: 30px 120px;
  }
}
</style>
