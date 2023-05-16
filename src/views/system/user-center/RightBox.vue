<template>
  <div class="right-box">
    <section class="head-box">
      <a-avatar :size="80" :trigger-icon-style="{ color: '#3491FA' }">
        <img :src="userStore.userInfo.avatar" />
        <!-- <template #trigger-icon>
          <IconCamera />
        </template> -->
      </a-avatar>
      <section class="user-name">{{ data.form.username }}</section>
      <section class="label-list">
        <div><icon-user /><span>{{ data.form.position }}</span></div>
        <div><icon-safe /><span>{{ data.form.company }}</span></div>
        <div><icon-location /><span>{{ data.form.address }}</span></div>
      </section>
      <a-button type="primary" class="edit-btn" @click="edit()"
        ><template #icon> <icon-edit /> </template>编辑信息</a-button
      >
    </section>

    <a-tabs hide-content default-active-key="2">
      <a-tab-pane key="1">
        <template #title>文章</template>
      </a-tab-pane>
      <a-tab-pane key="2">
        <template #title>项目</template>
      </a-tab-pane>
      <a-tab-pane key="3">
        <template #title>应用（3）</template>
      </a-tab-pane>
    </a-tabs>

    <section class="comment-box">
      <a-comment
        v-for="(item, index) in list"
        :key="index"
        :author="item.name"
        datetime="1个小时之前"
        align="right"
        class="comment-item"
      >
        <template #actions>
          <a-space :size="20">
            <span class="action" key="heart">
              <span><IconHeart /></span>
              <span>83</span>
            </span>
            <span class="action" key="star">
              <span><IconStar /></span>
              <span>3</span>
            </span>
            <span class="action" key="reply"> <IconMessage /><span>回复</span></span>
          </a-space>
        </template>
        <template #avatar>
          <a-avatar>
            <img alt="avatar" :src="item.avatar" />
          </a-avatar>
        </template>
        <template #content>
          <div class="text">{{ item.text }}</div>
        </template>
      </a-comment>
    </section>
  </div>
  <a-drawer :width="340" :visible="visible" @ok="handleOk" @cancel="handleCancel" unmountOnClose>
    <template #title>
      编辑个人信息
    </template>
    <a-form :form="data.form" size="medium" :model="data.form" auto-label-width>
      <a-form-item label="昵称" :rules="rules.username">
        <a-input v-model="data.form.username" placeholder="请输入昵称" />
      </a-form-item>
      <a-form-item label="个人简介" :rules="rules.introductory">
        <a-textarea  v-model="data.form.introductory" placeholder="请输入个人简介" :max-length="100" allow-clear show-word-limit auto-size/>
      </a-form-item>
      <a-form-item label="头像" :rules="rules.avatar">
          <Mupload
              :fileList="data.fileList"
              fileKey="avatar"
              :form="data.form"
              uploadFolder="image"
          ></Mupload>
      </a-form-item>
      <a-form-item label="所在地" :rules="rules.address">
        <a-input v-model="data.form.address" placeholder="请输入所在地" />
      </a-form-item>
      <a-form-item label="公司名称" :rules="rules.company">
        <a-input v-model="data.form.company" placeholder="请输入公司名称" />
      </a-form-item>
      
      <a-form-item label="部门" :rules="rules.department">
        <a-input v-model="data.form.department" placeholder="请输入部门" />
      </a-form-item>
      <a-form-item label="职位" :rules="rules.position">
        <a-input v-model="data.form.position" placeholder="请输入职位" />
      </a-form-item>
      <a-form-item label="Email" :rules="rules.email">
        <a-input v-model="data.form.email" placeholder="请输入Email" />
      </a-form-item>
      <a-form-item label="性别" :rules="rules.sex">
        <a-radio-group v-model="data.form.sex">
            <a-radio :value="1">男</a-radio>
            <a-radio :value="0">女</a-radio>
          </a-radio-group>
      </a-form-item>
      <a-form-item label="手机号" :rules="rules.phone">
        <a-input-number v-model="data.form.phone" placeholder="请输入手机号" />
      </a-form-item>
      <a-form-item label="爱好" :rules="rules.hobby">
        <a-input-tag v-model="data.form.hobby" placeholder="请选择个人爱好" allow-clear/>
      </a-form-item>
    </a-form>
  </a-drawer>
</template>

<script setup lang="ts" name="UserCenter">
import { useUserStore } from '@/store'
import { reactive, ref } from 'vue'
import { editUser } from '@/apis'
import { Message } from '@arco-design/web-vue'
const userStore:any = useUserStore()
console.log(userStore);

const props: any = defineProps({
    form: Object, // 表单 
})
const emit = defineEmits(['onSucceed'])
const data = reactive({
  form:userStore.userInfo,
  fileList:[] as any,
})
const rules = {
  username: [{ required: true, message: '请输入昵称' }],
  introductory: [{ required: true, message: '请输入个人简介' }],
  avatar: [{ required: true, message: '请输入头像' }],
  hobby: [{ required: true, message: '请输入爱好' }],
  company: [{ required: true, message: '请输入公司名称' }],
  position: [{ required: true, message: '请输入职位' }],
  department: [{ required: true, message: '请输入部门' }],
  phone: [{ required: true, message: '请输入手机号' }],
  email: [{ required: true, message: '请输入email' }],
  sex: [{ required: true, message: '请选择性别' }],
  address:[{ required: true, message: '请选择地址' }],
}
const list = [
  {
    avatar:
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    name: 'Lin',
    text: '生活会让你苦上一阵子，等你适应以后，再让你苦上一辈子'
  },
  {
    avatar:
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    name: 'Lin',
    text: '我从一无所有，到资产过亿，从家徒四壁，到豪车别墅，这些不是靠的别人，完全是靠我自己，一点一滴，想出来的'
  },
  {
    avatar:
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    name: 'Lin',
    text: '有很多事情你当时想不通，别着急，过一段时间你再想，就想不起来了'
  },
  {
    avatar:
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    name: 'Lin',
    text: '⽐你优秀的⼈都⽐你努⼒，你努力还有什么用'
  },
  {
    avatar:
      'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp',
    name: '窃·格瓦拉',
    text: '打工这辈子是不可能打工的，做生意又不会做，就是偷这种东西，才可以维持生活这样子'
  }
]
const visible = ref(false);

const edit = () => {
  if(!Array.isArray(data.form.hobby)){
    data.form.hobby = data.form.hobby.split(',')
  }
  data.form.phone = Number(data.form.phone)
  data.fileList = [{
    url: data.form.avatar
  }]
  visible.value = true;
};
const handleOk = async() => {
  let params = { ...data.form}
  params.hobby = params.hobby.join(',');
  let res = await editUser(params)  
    if(res.code === 201){
      visible.value = false;
      emit('onSucceed')
      userStore.editInfo(data.form)
      return Message.success(res.message)
    }else{
      emit('onSucceed')
      return Message.error(res.message)
    }
};
const handleCancel = () => {
  data.form = JSON.parse(localStorage.getItem('UserInfo') as string)
  visible.value = false;
}
if(props.form){
  data.form = props.form
}

</script>

<style lang="scss" scoped>
.edit-btn {
  color: #fff;
  border-color: #fff;
  background: transparent;
  &:hover {
    background: rgb(var(--primary-5));
    border-color: rgb(var(--primary-5));
  }
}

.right-box {
  flex: 1;
  margin: $margin;
  margin-left: 0;
  background-color: var(--color-bg-1);
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  overflow: hidden;
}

.head-box {
  min-height: 204px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  background-color: rgb(var(--primary-6));
  .user-name {
    font-size: 16px;
    font-weight: 500;
    margin: 10px 0;
  }
  .label-list {
    display: flex;
    margin-bottom: 10px;
    > div {
      margin-right: 15px;
      span {
        margin-left: 2px;
      }
    }
  }
}

.comment-box {
  flex: 1;
  padding: 20px 30px;
  padding-left: 16px;
  overflow: auto;
  .comment-item {
    margin-bottom: 15px;
    .text {
      color: $color-text-2;
    }
  }
}
</style>
