<template>
    <div class="table-page">
        <GiTable
            row-key="id"
            v-loading="loading"
            :data="tableData"
            :scroll="{ x: '100%', y: '100%', minWidth: 1000 }"
            :row-selection="{ type: 'checkbox', showCheckedAll: true }"
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
                <a-input placeholder="请输入标签名称..." allow-clear style="width: 250px" v-model="data.q"> </a-input>
                <a-button type="primary" @click="getTableData">
                <template #icon><icon-search /></template>
                <span>搜索</span>
                </a-button>
            </a-input-group>
            </template>

            <template #columns>
            <a-table-column title="编号" :width="66" align="center" data-index="id" ></a-table-column>
            <a-table-column title="标签名称" data-index="name" :width="120" align="center"></a-table-column>
            <a-table-column title="关联博客数" data-index="readCnt" :width="80" align="center"></a-table-column>
            <a-table-column title="创建时间" data-index="createAt" :width="150"  align="center">
                <template #cell="{ record }">
                <span>{{proxy.$moment(record.createAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
                </template>  
            </a-table-column> 
            <a-table-column title="上下架" :width="100" align="center">
                <template #cell="{ record }">
                <a-switch v-model="record.status" size="medium" :checked-value="1" :unchecked-value="0">
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
        <a-modal v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
            <template #title>
            {{ data.classForm.id ? '编辑标签' : '新增标签' }}
            </template>
            <div>
                <a-form :model="data.classForm" ref="formRef">
                    <a-form-item field="name" label="标签名称">
                        <a-input placeholder="请输入标签名称..." allow-clear style="width: 250px" v-model="data.classForm.name"> </a-input>
                    </a-form-item>
                    <a-form-item field="status" label="上下架">
                        <a-switch v-model="data.classForm.status" :checked-value="1" :unchecked-value="0" />
                    </a-form-item>
                </a-form>
            </div>
        </a-modal>
        </div>
    </template>
  
<script setup lang="ts" name="Class">
import { ref, reactive, getCurrentInstance } from 'vue'
import { Message } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'
import { getTabList, editTab, delTab } from '@/apis'
const { proxy }: any = getCurrentInstance()

const data = reactive({
    q: '',
    dateTime:'',
    classForm: {
        id: 0,
        name: '',
        status: 1
    }
})

const loading = ref(false)
const tableData = ref([]) as any
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
        const res = await getTabList(params) 
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
    data.classForm.id = 0
    proxy.$refs.formRef.resetFields()
    return visible.value = true;
};

const onEdit = (elem:any) =>{
    data.classForm = elem
    return visible.value = true;
}

const onDelete = async(id:number) => {
    let res = await delTab({id:id})
    if(res.code === 201){
        getTableData()
        return Message.success(res.message)
    } 
    return Message.error(res.message)
}   

const handleOk = async() => {
    let res = await editTab({
        name: data.classForm.name,
        status: data.classForm.status,
        id: data.classForm.id
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
