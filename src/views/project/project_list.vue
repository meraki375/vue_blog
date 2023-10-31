<template>
    <div class="table-page">
        <GiTable
            row-key="id"
            v-loading="loading"
            :data="tableData"
            :scroll="{ x: '100%', y: '100%', minWidth: 1000 }" 
            :pagination="{ showPageSize: true, total: total, current: current, pageSize: pageSize }"
            @page-change="changeCurrent"
            @page-size-change="changePageSize"
            @refresh="getTableData"
        >
            <template #custom-extra>
            <a-button type="primary" @click="onAdd">
                <template #icon><icon-plus /></template>
                <span>新增</span>
            </a-button>

            <a-input-group>
                <a-input placeholder="请输入项目名称..." allow-clear style="width: 250px" v-model="data.q"> </a-input>
                <a-button type="primary" @click="getTableData">
                <template #icon><icon-search /></template>
                <span>搜索</span>
                </a-button>
            </a-input-group>
            </template>

            <template #columns>
                <a-table-column title="编号" :width="66" align="center" data-index="id" ></a-table-column>
                <a-table-column title="项目名称" data-index="title" :width="120" align="center"></a-table-column>
                <a-table-column title="项目介绍" data-index="content" :width="120" align="center"></a-table-column>
                <a-table-column title="项目进度" data-index="progress" :width="120" align="center"></a-table-column> 
                <a-table-column title="创建时间" data-index="createAt" :width="150"  align="center">
                    <template #cell="{ record }">
                        <span>{{proxy.$moment(record.createAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
                    </template>  
                </a-table-column>
                <a-table-column title="操作" :width="200" align="center">
                    <template #cell="{ record }">
                    <a-space>
                        <a-button type="primary" size="mini" @click="onEdit(record)">查看详情</a-button>
                        <a-popconfirm type="warning" content="您确定要删除该项吗?"  @ok="onDelete(record.id)">
                            <a-button type="primary" status="danger" size="mini">删除</a-button>
                        </a-popconfirm>
                    </a-space>
                    </template>
                </a-table-column>
            </template>
        </GiTable>
    
        <GiFooter></GiFooter>
        <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
            <template #title>
            {{ data.form.id ? '编辑项目' : '新增项目' }}
            </template>
            <div>
                <a-form :model="data.form" ref="formRef">
                    <a-form-item field="cover_url" label="项目封面">
                        <Mupload
                            :fileList="data.fileList"
                            fileKey="cover_url"
                            :form="data.form"
                            uploadFolder="image"
                        ></Mupload>
                    </a-form-item>
                    <a-form-item field="title" label="项目标题">
                        <a-input placeholder="请输入项目标题..." allow-clear style="width: 250px" v-model="data.form.title"> </a-input>
                    </a-form-item>
                    <a-form-item field="content" label="项目介绍">
                        <a-textarea placeholder="请输入项目介绍..." allow-clear v-model="data.form.content"> </a-textarea>
                    </a-form-item>
                    <a-form-item field="progress" label="项目进度">
                        <a-slider :default-value="0" v-model="data.form.progress" :style="{ width: '200px' }" />
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
        </div>
    </template>
  
<script setup lang="ts" name="Project">
import { ref, reactive, getCurrentInstance } from 'vue'
import { Message } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'
import { getProjectList, editProject, delProject } from '@/apis'
const { proxy }: any = getCurrentInstance()

const data = reactive({
    q: '',
    dateTime:'',
    form: {
        id: 0,
        title: '',
        content:'',
        cover_url:[],
        progress: 0
    },
    fileList:[] as any,
})

const loading = ref(false)
const tableData = ref<any>([])
const visible = ref(false);
const { current, pageSize, total, changeCurrent, changePageSize, setTotal } = usePagination(() => {
    getTableData()
})

const getTableData = async () => {
    let params = {
        pageSize: pageSize.value,
        current:current.value,
        q:data.q,
        date:data.dateTime
    } 
    try {
        loading.value = true
        const res = await getProjectList(params) 
        if (res.code) {
        tableData.value = res.list
        setTotal(res.count)
        }
    } catch (error) {
        return error
    } finally {
        loading.value = false
    }
}

getTableData()

const onAdd = () => {
    data.form.id = 0
    data.fileList = []
    proxy.$refs.formRef.resetFields()
    return visible.value = true;
};

const onEdit = (elem:any) =>{
    data.form = {...elem}
    if(elem.cover_url){
        data.fileList = [{ url:  elem.cover_url }]
    }
    
    return visible.value = true;
}

const onSatatus = async(elem:any)=>{
    let res = await editProject(elem)
    if(res.code === 201){
        getTableData()
        Message.success(res.message)
        visible.value = false;
    }else{
        Message.error(res.message)
    }
}
const onDelete = async(id:number) => {
    let res = await delNote({id:id})
    if(res.code === 201){
        getTableData()
        return Message.success(res.message)
    } 
    return Message.error(res.message)
}   

const handleOk = async() => {
    let res = await editProject({
        title: data.form.title,
        content: data.form.content,
        cover_url: data.form.cover_url,
        progress: data.form.progress,
        id: data.form.id
    })
    if(res.code === 201){
        getTableData()
        Message.success(res.message)
        visible.value = false;
    }else{
        Message.error(res.message)
    }
    
};
const handleCancel = () => {
    visible.value = false;
}

</script>

<style lang="scss" scoped>
    .table-page {
        height: 100%;
        overflow: hidden;
        margin: $margin;
        background: var(--color-bg-1);
        padding: $padding;
        padding-bottom: 0;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
    .form {
        margin-top: 12px;
    }
}
</style>
