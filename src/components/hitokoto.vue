<template>
    
    <footer>
        <div class="container">
            <p>{{ data.hitokoto }}</p>
        </div>
    </footer>

</template>
<script setup lang="ts" name="Footer">
import { fetchHitokoto } from '@/apis'
import {  reactive } from 'vue'
const data = reactive({
    hitokoto:''
})
fetchHitokoto().then((res:any) =>{
    data.hitokoto = res.data.hitokoto
})
</script>
