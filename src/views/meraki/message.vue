<template>
    <div class="container wh100" ref="containerRef" >
        <wallpaper 
            :form="data.form"
            :onlytitle=true
             >
        </wallpaper>
        <div class="content">
            <div class="text-center ">
                <Player id="五月天" autoplay class="player" listMaxHeight='100px'></Player>
                <Editor
                    :formKey="'content'"
                    :form="data.form"
                    :readonly="true"
                    :disabled="true"
                    :border="false"
                    :container="containerRef"
                />

                <Comment class="comment" :locale="{reactionTitle:'关于本站你有什么想说的喵？'}" reaction></Comment>
            </div>
            <Footer></Footer>
        </div>
        
    </div>
</template>
<script setup lang="ts" name="Timeline">
import dayjs from 'dayjs'
import { getMessage } from '@/apis'
import { reactive, ref } from 'vue'

const containerRef = ref() as any;

const data = reactive({
    form:{
        title:'留言表',
        icon:'calendar',
        text: '',
    }
})
const init =  () => {
    getMessage().then((res:any)=>{
        data.form = {...res.data,title:'留言表',}
    })
}
init()
</script>

<style lang="scss" scoped>
.content{
    width: 70%;
    height: 100%;
    margin: 30px auto;
}
.container{
    background-color: #fff;
    overflow-y: auto;
    padding-bottom: 20px;
}
.player{
    width: 100%;
}
.comment{
    z-index: 99;
    position: relative; 
    background: #fff;
}
</style>