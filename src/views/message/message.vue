<template>
    <div class="contain">
        <Editor
            class="editor"
            :formKey="'centent'"
            :form="data.form"
            :catalogue="false"
        >
        </Editor>
        <div class="center">
            <a-buttom>发布</a-buttom>
        </div>
    </div>
</template>
<script setup lang="ts" name="Message">
import { reactive, } from 'vue'

const data = reactive({
    form: {
        title: '',
        centent: 'jfksjfjskfjkfjakfjfkafj',
    }
})
</script>
<style lang="scss" scoped>
// .editor {
//     height: 300px;
// }
.contain{
    padding: 20px;
    height: 500px;
}
// .center{
//     width: 100%;
//     height: 100%;
// }
</style>