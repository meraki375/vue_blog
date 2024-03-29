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
                <a-input placeholder="请输入笔记标题..." allow-clear style="width: 250px" v-model="data.q"> </a-input>
                <a-button type="primary" @click="getTableData">
                <template #icon><icon-search /></template>
                <span>搜索</span>
                </a-button>
            </a-input-group>
            </template>

            <template #columns>
            <a-table-column title="编号" :width="66" align="center" data-index="id" ></a-table-column>
            <a-table-column title="笔记标题" data-index="title" :width="120" align="center"></a-table-column> 
            <a-table-column title="创建时间" data-index="createAt" :width="150"  align="center">
                <template #cell="{ record }">
                <span>{{proxy.$moment(record.createAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
                </template>  
            </a-table-column> 
            <a-table-column title="上下架" :width="100" align="center">
                <template #cell="{ record }">
                <a-switch v-model="record.status" size="medium" :checked-value="1" :unchecked-value="0" @change="onSatatus(record)">
                    <template #checked>上架</template>
                    <template #unchecked>下架</template>
                </a-switch>
                </template>
            </a-table-column>
            <a-table-column title="操作" :width="200" align="center">
                <template #cell="{ record }">
                <a-space>
                    <a-button type="primary" size="mini" @click="onEdit(record)">修改</a-button>
                    <a-popconfirm type="warning" content="您确定要删除该项吗?"  @ok="onDelete(record.id)">
                        <a-button type="primary" status="danger" size="mini">删除</a-button>
                    </a-popconfirm>
                </a-space>
                </template>
            </a-table-column>
            </template>
        </GiTable>
    
        <GiFooter></GiFooter>
        <a-modal v-model:visible="visible">
            <template #title>
            {{ data.form.id ? '编辑笔记' : '新增笔记' }}
            </template>
            <div>
                <a-form :model="data.form" ref="formRef">
                    <a-form-item field="cover_url" label="笔记封面" >
                        <Mupload
                            :fileList="data.fileList"
                            fileKey="cover_url"
                            :form="data.form"
                            uploadFolder="image"
                        ></Mupload>
                    </a-form-item>
                    <a-form-item field="title" label="笔记标题" :rules="rules.title">
                        <a-input placeholder="请输入笔记标题..." allow-clear style="width: 250px" v-model="data.form.title"> </a-input>
                    </a-form-item>
                    <a-form-item field="url" label="笔记网址" :rules="rules.url">
                        <a-input placeholder="请输入笔记网址..." allow-clear style="width: 250px" v-model="data.form.url"> </a-input>
                    </a-form-item>
                    <a-form-item field="content" label="笔记内容" :rules="rules.content">
                        <a-textarea placeholder="请输入笔记内容..." allow-clear v-model="data.form.content"> </a-textarea>
                    </a-form-item>
                    <a-form-item field="status" label="上下架">
                        <a-switch v-model="data.form.status" :checked-value="1" :unchecked-value="0" />
                    </a-form-item>
                </a-form>
            </div>
            <template #footer>
                <a-space>
                    <a-button type="primary" @click="handleOk()">确认</a-button>
                    <a-button @click="handleCancel()">取消</a-button>
                </a-space>
            </template>
        </a-modal>
        </div>
    </template>
  
<script setup lang="ts" name="Note">
import { ref, reactive, getCurrentInstance, nextTick } from 'vue'
import { Message } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'
import { getNoteList, editNote, delNote } from '@/apis'
const { proxy }: any = getCurrentInstance()

const rules = {
  title: [{ required: true, message: '请输入标题', trigger: 'change'  }],
  content: [{ required: true, message: '请输入内容', trigger: 'change'  }],
  url: [
    { required: true, message: '请输入网络', trigger: 'change' },
  ],
}

const data = reactive({
    q: '',
    dateTime:'',
    form: {
        id: 0,
        title: '',
        content:'',
        url:'',
        cover_url:[],
        status: 1
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
        const res = await getNoteList(params) 
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
    nextTick(()=>{
        data.form.id = 0
        data.fileList =[]
    })
   
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
    let res = await editNote(elem)
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
    proxy.$refs.formRef.validate(async(valid:any) => {
        if(!valid){
            let res = await editNote({
                title: data.form.title,
                content: data.form.content,
                cover_url: data.form.cover_url,
                url: data.form.url,
                status: data.form.status,
                id: data.form.id
            })
            if(res.code === 201){
                getTableData()
                Message.success(res.message)
                visible.value = false;
            }else{
                Message.error(res.message)
            }
        }else{
            visible.value = true;
        }
    })
    
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
