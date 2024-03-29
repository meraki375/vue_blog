import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import moment from 'moment'
// 引入 Arco Design 组件库以及自定义主题
import ArcoVue from '@arco-design/web-vue'
import '@/styles/arco-ui/index.less'
// import '@arco-themes/vue-gi-demo/index.less'
// import '@arco-design/web-vue/dist/arco.css'

// 额外引入 Arco Design Icon图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon'

import '@/styles/css/transition.css'
// 导入全局scss主文件
import '@/styles/index.scss'

// 支持SVG
import 'virtual:svg-icons-register'

// 自定义指令
import directives from './directives'

// 解决 json-editor-vue3 报错
import 'jsoneditor'
//字节图标库
import {install} from '@icon-park/vue-next/es/all';
const app = createApp(App)

install(app); // use default prefix 'icon', eg: icon is People, name is icon-people.
install(app, 'i'); // use custom prefix 'i', eg: icon is People, name is i-people.

app.use(router)
app.use(createPinia())
app.use(ArcoVue)
app.use(ArcoVueIcon)
app.use(directives)

app.config.globalProperties.$moment = moment;
// 全局注册自定义组件(注：一定要定义组件的name！！！)
// 注意：目前已使用unplugin-vue-components插件实现自定义组件自动导入

// const GiComponents = import.meta.globEager('/src/components/*.vue')
// const files = Object.assign(GiComponents)
// Object.keys(files).forEach((item) => {
//   const component = files[item]?.default
//   app.component(component.name, component)
// })

app.mount('#app')
