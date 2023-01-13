<template>
  <div class="user-manage">
     
    <section class="centent">
      <GiTitle title="用户列表"></GiTitle>
        
      <a-row justify="space-between" class="head">
        <a-space>
          <a-button type="primary" @click="showModal(0)">
            <template #icon><icon-plus /></template>
            <span>新增用户</span>
          </a-button>

          <a-input-group>
            <a-input placeholder="请输入用户名..." allow-clear style="width: 250px" v-model="data.q"> </a-input>
            <a-button type="primary" @click="getTableData">
              <template #icon><icon-search /></template>
              <span>搜索</span>
            </a-button>
          </a-input-group>
        </a-space>
      </a-row>
      <section class="table-box">
        <a-table
          row-key="id"
          v-loading="loading"
          :data="tableData"
          :scroll="{ x: '100%', y: '100%', minWidth: 900 }"
          :pagination="{ showPageSize: true, total: total, current: current, pageSize: pageSize }"
          @page-change="changeCurrent"
          @page-size-change="changePageSize"
        >
          <template #columns>
            <a-table-column title="用户编号" data-index="id"></a-table-column>
            <a-table-column title="用户名" data-index="username"></a-table-column>
            <a-table-column title="性别" data-index="sex">
              <template #cell="{ record }"> 
                <span v-if="!record.sex">未知</span>
                <span v-else-if="record.sex == 1">男</span>
                <span v-else>女</span>
              </template>
            </a-table-column>
            <a-table-column title="头像" data-index="avatar">
              <template #cell="{ record }">
                <a-avatar :size="60" :trigger-icon-style="{ color: '#3491FA' }">
                  <img src="@/assets/images/avatar.png" v-if="!record.avatar" />
                  <img :src="record.avatar" v-else />
                  <!-- <template #trigger-icon>
                    <IconCamera />
                  </template> -->
                </a-avatar>
              </template>
            </a-table-column>
            <a-table-column title="手机号" data-index="phone"> 
              <template #cell="{ record }">
                <a-tag bordered color="blue" v-if="!record.phone">
                  <template #icon>
                    <icon-minus-circle />
                  </template>
                   未填写
                </a-tag>
                <span v-else>{{record.phone}}</span>
              </template>
            </a-table-column>
            <a-table-column title="邮箱" data-index="email"> 
               <template #cell="{ record }">
                <a-tag bordered color="gold" v-if="!record.email">
                  <template #icon>
                    <icon-minus-circle />
                  </template>
                   未填写
                </a-tag>
                <span v-else>{{record.email}}</span>
              </template>
            </a-table-column>
            <a-table-column title="状态" :width="100">
              <template #cell="{ record }">
                <a-tag v-if="record.status == 1" color="green">正常</a-tag>
                <a-tag v-else color="red">禁用</a-tag>
              </template>
            </a-table-column>
            <a-table-column title="创建时间" data-index="createAt"> 
               <template #cell="{ record }">
                 <span>{{proxy.$moment(record.createAt).format('YYYY-MM-DD HH:mm:ss')}}</span>
              </template>
            </a-table-column>
            <a-table-column title="操作" :width="100" align="center">
              <template #cell="{ record }">
                <a-space>
                  <a-button type="primary" size="mini" @click="showModal(record)">
                    <template #icon><icon-edit /></template>
                  </a-button>
                  <a-popconfirm type="warning" content="您确定要删除该项吗?" @ok="confirm(record)">
                    <a-button type="primary" status="danger" size="mini">
                      <template #icon><icon-delete /></template>
                    </a-button>
                  </a-popconfirm>
                </a-space>
              </template>
            </a-table-column>
          </template>
        </a-table>
      </section>
    </section>

    <a-modal v-model:visible="visible" :title="!form.id ? '新增用户' : '编辑用户'" @on-before-ok="handleOk" @cancel="handleCancel">
      <a-form ref="formRef" :model="form" :labelCol="{ span: 4 }" auto-label-width>
        <a-form-item
          label="用户名"
          field="username"
          :rules="[ 
            { min: 2, max: 4, message: '长度在 1 - 18个字符', trigger: 'blur' }
          ]"
          :validate-trigger="['change', 'input']"
        >
          <a-input placeholder="请输入用户名" v-model="form.username"></a-input>
        </a-form-item>
        <a-form-item label="密码" field="password" v-if="!form.id">
          <a-input-password v-model="form.password" placeholder="密码" size="medium" allow-clear>
            <template #prefix><icon-lock :stroke-width="1" :style="{ fontSize: '20px' }" /></template>
          </a-input-password>
        </a-form-item>
        <a-form-item label="头像" field="avatar">
          <a-avatar :size="60" :trigger-icon-style="{ color: '#3491FA' }">
            <img src="@/assets/images/avatar.png" />
            <template #trigger-icon>
              <IconCamera />
            </template>
          </a-avatar>
        </a-form-item>
        <a-form-item label="性别" field="sex">
          <a-radio-group v-model="form.sex">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="0">女</a-radio>
          </a-radio-group>
        </a-form-item>
        <a-form-item label="邮箱" field="email">
          <a-input placeholder="请输入邮箱" v-model="form.email"></a-input>
        </a-form-item>
        <a-form-item label="手机号" field="email">
          <a-input placeholder="请输入手机号" v-model="form.phone"></a-input>
        </a-form-item> 
        <a-form-item label="状态" field="status">
          <a-switch   v-model="form.status" :checked-value="1" :unchecked-value="0">
            <template #checked-icon>
              <icon-check/>
            </template>
            <template #unchecked-icon>
              <icon-close/>
            </template>
          </a-switch>
        </a-form-item>
      </a-form>
      <template #footer>
        <a-button key="back" @click="handleCancel">取消</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">提交</a-button>
      </template>
    </a-modal>
  </div>
</template>

<script setup lang="ts" name="UserManage"> 
import { ref, nextTick, reactive, getCurrentInstance } from 'vue' 
import { usePagination } from '@/hooks'
import { Message } from '@arco-design/web-vue'
import { getSystemUserList, addSystemUser, delSystemUser } from '@/apis'
import type { ApiUserItem, ApiDeptItem } from '@/apis'
const { proxy }: any = getCurrentInstance()
const visible = ref<boolean>(false);
const loading = ref(false)
const tableData = ref<ApiUserItem[]>([])
 
const data = reactive({
  q: '',
  dateTime:''
})

const form = reactive({
  username: '',
  password:'',
  email:'',
  phone:'',
  sex: 0, 
  status:1,
  avatar:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/music/cover/20221104171147.png'
})
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
    const res = await getSystemUserList(params) 
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
//初始化数据
getTableData()

//提交按钮
const handleOk = async() => { 
  try {
    if (!form.username) {
      Message.warning('请输入账户名称')
      return false
    }
    if (!form.password && !form.id) {
      Message.warning('请输入账户密码')
      return false
    }
    const res = await addSystemUser(form)  
    if(res.success){
      getTableData()
      visible.value = false;
      return Message.success(res.message)
    }
     
  } catch (error) {
    errorMessage.value = (error as Error).message
  } 
  
};
//取消按钮
const handleCancel = () => {
  visible.value = false;
}
//打开新增/编辑表单
const showModal = (e?:any) => {
  const {avatar,email,id,phone,sex,status,username} = e   
  form.id = e ? id : ''
  form.avatar = e ? avatar : ''
  form.email = e ? email : ''
  form.phone = e ? phone : ''
  form.sex = e ? sex : ''
  form.status = e ? status : ''
  form.username = e ? username : ''  
  visible.value = true;
};
//删除按钮
const confirm = async(e: MouseEvent) => { 
  let res =  await delSystemUser({id:e.id})
  if(res.success === 201){
    getTableData()
    Message.success('Click on Yes');
  }
};
//关闭当前yeqian
</script>

<style lang="scss" scoped>
.user-manage {
  flex: 1;
  height: 100%;
  margin: $margin;
  box-sizing: border-box;
  display: flex;
  background: var(--color-bg-1);
  overflow: hidden;
  > .left {
    flex: 1;
    min-width: 250px;
    height: 100%;
    flex-shrink: 0;
    border-right: 1px dashed $color-border;
    box-sizing: border-box;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .content {
      flex: 1;
      padding: $padding;
      padding-top: 12px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }
    .tree-box {
      flex: 1;
      overflow: auto;
      padding-left: 4px;
    }
  }
  > .centent {
    flex: 4;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    .head {
      padding: $margin $padding 0;
    }
    .table-box {
      flex: 1;
      margin-top: $margin;
      margin-bottom: $padding;
      padding: 0 $padding;
      overflow: hidden;
    }
  }
}
</style>
