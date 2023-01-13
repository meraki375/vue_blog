<template>
  <div class="login">
    <section class="login-box animated flipInY"> 
      <div class="centent">
        <a-form
          :model="form"
          :style="{ width: '84%' }"
          :label-col-style="{ display: 'none' }"
          :wrapper-col-style="{ flex: 1 }"
        >
          <h3 class="login-form-title"><img class="logo" src="@/assets/images/logo.gif" /><span>Admin Pro</span></h3>
          <a-form-item  >
            <a-input v-model="form.username" placeholder="账号" size="medium" allow-clear>
              <template #prefix><icon-user :stroke-width="1" :style="{ fontSize: '20px' }" /></template>
            </a-input>
          </a-form-item>
          <a-form-item  >
            <a-input-password v-model="form.password" placeholder="密码" size="medium" allow-clear>
              <template #prefix><icon-lock :stroke-width="1" :style="{ fontSize: '20px' }" /></template>
            </a-input-password>
          </a-form-item>
          <a-form-item  >
            <a-input v-model="form.phone" placeholder="手机号" size="medium" allow-clear>
              <template #prefix><icon-user :stroke-width="1" :style="{ fontSize: '20px' }" /></template>
            </a-input>
          </a-form-item>
          <a-form-item  >
            <a-input v-model="form.email" placeholder="邮箱" size="medium" allow-clear>
              <template #prefix><icon-user :stroke-width="1" :style="{ fontSize: '20px' }" /></template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-space direction="vertical" fill style="width: 100px;margin:0 auto;">
              <a-button type="primary" size="large" long :loading="loading" @click="registering">注册</a-button> 
            </a-space>
          </a-form-item>
        </a-form>
      </div>
    </section>

    <GiThemeBtn class="theme-btn"></GiThemeBtn>

    <LoginBg></LoginBg>
  </div>
</template>

<script setup lang="ts" name="Login">
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router' 
import { useLoading } from '@/hooks'
import { Message } from '@arco-design/web-vue'
import { useUserStore, useNavTabStore } from '@/store'
import LoginBg from './components/LoginBg/index.vue' 
import { register } from '@/apis'
const router = useRouter() 
const userStore = useUserStore()
const navTabStore = useNavTabStore()

const form = reactive({
  username: '',
  password: '',
  phone:'',
  email:'',
  avatar:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/music/cover/20221104171147.png'
})
 
// 登录加载
const { loading, setLoading } = useLoading()
const errorMessage = ref('')

// 点击注册
const registering = async () => { 
  try {
    if (!form.username) {
      return Message.warning('请输入账户名称')
    }
    if (!form.password) {
      return Message.warning('请输入账户密码')
    }
    setLoading(true)
    await userStore.register(form)
    router.push('/home')
    setLoading(false)
    navTabStore.init()
    Message.success('登录成功')
  } catch (error) {
    errorMessage.value = (error as Error).message
  } finally {
    setLoading(false)
  }
}
</script>

<style lang="scss" scoped>
.register-btn,
.register-btn:hover {
  color: var(--color-text-2);
}

.login-form-title {
  color: var(--color-text-1);
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  margin-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 32px;
    height: 32px;
    margin-right: 6px;
  }
}

.theme-btn {
  position: fixed;
  top: 20px;
  left: 30px;
  z-index: 9999;
}

.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-bg-5);
  &-box {
    width: 720px;
    height: 380px;
    display: flex;
    z-index: 999;
    box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.08);
  }
} 

.centent {
  width: 100%;
  height: 100%;
  background: var(--color-bg-1);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  box-sizing: border-box;
}
</style>
