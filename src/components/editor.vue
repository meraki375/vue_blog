<template>
    <div class="main-content flex" >
        <!--编辑器主题-->
        <div :class="props.border ? 'editor' : 'border'">
            <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" v-if="!props.readonly"/>
            <Editor
                style="width: 100%; min-height:360px; height: 100%; overflow-y: hidden;"
                v-model="props.form[props.formKey]"
                :defaultConfig="editorConfig"
                @onCreated="handleCreated"
                @onChange="handleChange"
            />
        </div>
        <!-- 标题目录 -->
        <a-affix :offset-top="0" :target="props.container">
          <div class="title" v-if="props.catalogue">
            <a-anchor :change-hash="false" :scroll-container="props.container" v-if="props.container">
                <a-anchor-link 
                    v-for="item in data.titleList" 
                    :key="item.id" 
                    :href="`#${item.id}`" 
                    :title="item.children[0].text" 
                    :class="item.type">
                </a-anchor-link>
            </a-anchor>
          </div>
          
        </a-affix>
    </div>
    
</template>

<script setup lang="ts" name="Editor">
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { onBeforeUnmount, ref, shallowRef, watch, reactive, nextTick, onMounted } from 'vue'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { uploadFile } from '@/apis'
const emit = defineEmits(['change'])
const props: any = defineProps({
  id: { //回显ID
    type: Number,
    default: () => null
  },
  readonly: { //是否只读
    type: Boolean,
    default: () => false
  },
  border: { //是否需要边框
    type: Boolean,
    default: () => true
  },
  catalogue:{ //是否需要目录
    type: Boolean,
    default: () => true
  },
  disabled: { //回显ID
    type: Boolean,
    default: () => false
  },
  container:Object, //滚动的容器
  formKey: String, // 表单字段
  form: Object, // 表单
  
})

const data = reactive({
    titleList:[] as any,
    isCatalogueFixed: false
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入内容...' } 
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const handleCreated = (editor: any) => {
    editorRef.value = editor // 记录 editor 实例，重要
    // 自定义上传方法
    const customUpload = async(file:any, insertFn:any) => {
        // file 即选中的文件
        await uploadFile(file.name, file, "eidtor").then((res:any)=>{
              if(res.code ===200){
                const url = "https://" + res.msg.Location;
                insertFn(url);
              }
        })
        
      };
      //将定义的上传方法与绑定给editor的uploadImage配置
      editor.getMenuConfig("uploadImage").customUpload = customUpload;
     
}
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleChange = (editor:any) => {
    data.titleList =  editor.getElemsByTypePrefix('header')
};

nextTick(() => {
  if(props.disabled){
      editorRef.value.disable()
  }
})

</script>

<style lang="scss" scoped>
.main-content {
  position: relative;
}
.editor {
  width: 100%;
  height: 100%;
  border: 1px solid var(--color-border-3);
  &.w-e-full-screen-container {
    z-index: 9999;
  }
}
.border {
  width: 100%;
  height: 100%;
  &.w-e-full-screen-container {
    z-index: 9999;
  }
}

.title{
    width: 220px; 
    background-color: #fff;
    padding: 10px;
}
.header1 {
    font-size: 20px;
    font-weight: bold;
}

.header2 {
    font-size: 16px;
    padding-left: 15px;
    font-weight: bold;
}

.header3 {
    font-size: 14px;
    padding-left: 30px;
}

.header4 {
    font-size: 12px;
    padding-left: 45px;
}

.header5{
    font-size: 12px;
    padding-left: 60px;
}
</style>

