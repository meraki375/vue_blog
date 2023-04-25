<template>
    <a-space direction="vertical" :style="{ width: '100%' }">
      <a-upload  
        :list-type="props.list_type"
        :limit="props.limit"
        :custom-request="customRequest"
        :onSuccess="onSuccess"
        :before-remove="beforeRemove"
        image-preview
        :file-list="props.fileList"
        /> 
    </a-space>
  </template>
<script setup lang="ts" name="Wallpaper">
import { reactive } from 'vue' 
import { uploadFile } from '@/apis'
const props: any = defineProps({
    fileList:{ // 回显图片
        type: Array,
        default: () => [{url:''}]
    },
    list_type:{ // 列表样式 picture-card:照片墙 picture:图标列表
        type: Boolean,
        default: () => 'picture-card'
    },
    limit:{ // 限制上传数量
        type: Number,
        default: () => 1
    },
    fileKey: String, // 文件key
    form: Object, // 表单
    uploadFolder: String, // 上传到oss的文件目录
})

const emit = defineEmits(['uploadSuccess','uploadError'])
  
const data = reactive({
    fileList: [], // 图片地址设置为数组 
    imgUrl: '',
    currentImageUid: null,
    typeList: 'image/*',
    percent: 0 // 进度条的百分数 
})

const customRequest = async(option:any) => {
    const { onProgress, onError, onSuccess, fileItem, name } = option;
    await uploadFile(fileItem.name, fileItem.file, props.uploadFolder,
        (progressData:any) => {
            const percentCompleted = Math.round((progressData.loaded / progressData.total) * 100);
            onProgress(percentCompleted, progressData);
        }).then((res:any)=>{
            if(res.code ===500){
                onError(res.msg);
            }else{
                onSuccess(res.msg);
            }
    })
    return {
        abort() {
            // cos-js-sdk-v5 不支持中断上传请求，因此在这里不能做任何操作
        }
    };
};

//成功回调
const onSuccess = (file:any) => {
    let url = "https://" + file.response.Location
  if (props.fileKey) {
    props.form[props.fileKey] =  url
  }
  
  emit('uploadSuccess', file, props.fileKey, url)
}
//删除文件前回调
const beforeRemove = (fileItem:any) => {
    console.log(fileItem);
    
    emit('uploadError', fileItem)
}
</script>
