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
        <a-button type="primary" status="danger" @click="onDelete">
          <template #icon><icon-delete /></template>
          <span>删除</span>
        </a-button>
        <a-button @click="onImport">
          <template #icon><icon-export /></template>
          <span>导入</span>
        </a-button>
        
        <a-input-group>
          <a-input placeholder="请输入用户名..." allow-clear style="width: 250px" v-model="data.q"> </a-input>
          <a-button type="primary" @click="getTableData">
            <template #icon><icon-search /></template>
            <span>搜索</span>
          </a-button>
        </a-input-group>
      </template>
      <template #columns>
        <a-table-column title="编号" :width="66" align="center" data-index="id" ></a-table-column>
        <a-table-column title="文章标题" data-index="title" :width="120" align="center"></a-table-column>
        <a-table-column title="查看量" data-index="readCnt" :width="80" align="center"></a-table-column>
        <a-table-column title="发布人" data-index="senderName" :width="150" align="center"></a-table-column>
        <a-table-column title="发送时间" data-index="updatedAt" :width="150" align="center">
          <template #cell="{ record }">
            <span>{{proxy.$moment(record.updatedAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
          </template>  
        </a-table-column>
        <a-table-column title="创建时间" data-index="createAt" :width="150"  align="center">
          <template #cell="{ record }">
            <span>{{proxy.$moment(record.createAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
          </template>  
        </a-table-column> 
        <a-table-column title="上下架" :width="100" align="center">
          <template #cell="{ record }">
            <a-switch v-model="record.status" size="medium">
              <template #checked>上架</template>
              <template #unchecked>下架</template>
            </a-switch>
          </template>
        </a-table-column>
        <a-table-column title="操作" :width="200" align="center">
          <template #cell="{ record }">
            <a-space>
              <a-button type="primary" size="mini" @click="onEdit(record.id)">修改</a-button>
              <a-button size="mini" @click="">详情</a-button>
              <a-popconfirm type="warning" content="您确定要删除该项吗?">
                <a-button type="primary" status="danger" size="mini">删除</a-button>
              </a-popconfirm>
            </a-space>
          </template>
        </a-table-column>
      </template>
    </GiTable>

    <GiFooter></GiFooter>
  </div>
</template>

<script setup lang="ts" name="Blog">
import { ref, reactive, getCurrentInstance } from 'vue'
import { Message } from '@arco-design/web-vue'
import { usePagination } from '@/hooks'
import { getBlogList } from '@/apis'
import type { ApiBlogItem } from '@/apis'
import {useRouter } from 'vue-router'
const { proxy }: any = getCurrentInstance()
 
const router = useRouter()

const data = reactive({
  q: '',
  dateTime:''
})

const loading = ref(false)
const tableData = ref<ApiBlogItem[]>([])

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
    const res = await getBlogList(params) 
    if (res.success) {
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
 return router.push({ path: '/blog/edit' }) 
}

const onEdit = (id:number) =>{
  return router.push({ path: '/blog/edit', query: { id: id }})
}
const onDelete = () => {
  Message.info('点击了删除')
}

const onImport = () => {
  Message.info('点击了导入')
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
