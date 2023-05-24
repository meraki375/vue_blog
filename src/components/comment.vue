<template>
    <Waline 
        :serverURL="serverURL" 
        :path="path"  
        :reaction="props.reaction" 
        :locale="locale"
    />
  </template>
<script setup lang="ts" name="Comment">
import { Waline } from '@waline/client/component';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

import '@waline/client/dist/waline.css';

const serverURL = 'https://comment-system-pink.vercel.app';
const path = computed(() => useRoute().fullPath);

const props: any = defineProps({
    reaction: { //文章反应
        type: Boolean,
        default: () => false
    },
    locale: {//更换文本 详情：https://waline.js.org/cookbook/customize/locale.html#%E7%AE%80%E4%BB%8B
        type: Object,
        default: () => {}
    },

})
const locale ={
    ...props.locale,
    placeholder:'你是我一生只会遇见一次的惊喜没有重复却永住心底的意义，赶快评论吧！',
    
}
</script>