<template>
    <a-tabs>
        <a-tab-pane key="1">
            <template #title>
                <icon-calendar/> 最新评论
            </template>
                <a-list :max-height="350" @reach-bottom="fetchData" :scrollbar="false">
                    <template #scroll-loading>
                        <div v-if="bottom">没有更多评论啦</div>
                        <a-spin v-else />
                    </template>
                    <a-list-item v-for="item of data.commentsList">
                        <a-comment :author="item.nick" :datetime="getTimeDifferenceString(item.insertedAt) + '  ago'" align="right">
                            <template #actions>
                                <span class="action" key="heart" @click="onLikeChange(item.objectId, item)">
                                    <span v-if="item.likeType" >
                                        <IconHeartFill :style="{ color: '#f53f3f' }" />
                                    </span>
                                    <span v-else>
                                        <IconHeart />
                                    </span>
                                    {{ item.like }}
                                </span>
                                <span class="action" key="reply" @click="navigateToBlog(item.url)">
                                    <IconMessage /> 去看看？
                                </span>
                            </template>
                            <template #avatar>
                                <a :href="'http://' + item.link" target="_blank">
                                    <a-avatar>
                                        <img alt="avatar" :src="item.avatar" />
                                    </a-avatar>
                                </a>
                            </template>
                            <template #content>
                            <div v-html="item.comment"></div>
                            </template>
                        </a-comment>
                    </a-list-item>
                </a-list>
        </a-tab-pane>
        <a-tab-pane key="2">
        <template #title>
            <icon-clock-circle/> 用户排行榜
        </template>
            <a-list :max-height="350" @reach-bottom="fetchRankData" :scrollbar="false" :split="false">
                <template #scroll-loading>
                    <div v-if="rankBottom">没有更多访客了</div>
                    <a-spin v-else />
                </template>
                <a-list-item v-for="item of data.userList">
                    <a-list-item-meta
                        :title="item.nick"
                    >
                        <template #avatar>
                            <a :href="'http://' + item.link" target="_blank">
                                <a-avatar>
                                    <img alt="avatar" :src="item.avatar" />
                                </a-avatar>
                            </a>
                        </template>
                    </a-list-item-meta>
                    <template #actions>
                        {{ `贡献了${item.count}条评论` }}
                    </template>
                </a-list-item>
            </a-list>
        </a-tab-pane>
        <a-tab-pane key="3">
        <template #title>
            <icon-user/> 读者墙
        </template>
        <a-space :size="32" style="padding: 0 10px;">
            <a-avatar-group>
                <a-avatar  v-for="item in data.userList" shape="circle">
                    <a :href="'http://' + item.link" target="_blank">
                        <a-tooltip  position="tl" :content="item.nick" :background-color="getRandomColor()">
                            
                                <img
                                    alt="avatar"
                                    :src="item.avatar"
                                />
                            
                        </a-tooltip>
                    </a>
                </a-avatar>
            </a-avatar-group>
        </a-space>
        </a-tab-pane>
    </a-tabs>
</template>
<script setup lang="ts">
import { computed, ref, reactive, nextTick  } from 'vue';
import '@waline/client/dist/waline.css';
import { getconmentList, getrankList } from '@/apis'
import { getTimeDifferenceString } from '../../../utils/common'
import { useLikeStore } from '@/store'
import {useRouter } from 'vue-router'
import { getRandomColor } from '../../../utils/common'
const router = useRouter()

const props: any = defineProps({
    commentCount: { //总评论数
        type: Number,
        default: () => 0
    },
    userCount: { //用户论数
        type: Number,
        default: () => 0
    },

})
const likeStore = useLikeStore()
const bottom = ref(false);
const rankBottom = ref(false);
const data = reactive({
    commentsList:[] as any,
    userList: [] as any,
    commentsCount:10,
    usersCount:10,
});

const fetchRankData = () =>{
    if(rankBottom.value == false){
        getrankList({pageSize:data.usersCount, lang: 'zh-CN}'}).then((res:any)=>{
            if(props.userCount >= data.usersCount ){
                data.usersCount += props.userCount ? 10 : 0
                rankBottom.value = false
            }else{
                rankBottom.value = true
            }
            data.userList = res.data;
        })
    }
}

const fetchData = () => {
    if(bottom.value === false){
        getconmentList({type: 'recent', count: data.commentsCount, lang: 'zh-CN'}).then((res: any) => {
            let comments: any = likeStore.likes
            res.map((item:any)=>{
                if(comments.indexOf(item.objectId) !=-1 ){
                    item.likeType = true
                }else{
                    item.likeType = false
                }
                
            })
            if(props.commentCount >= data.commentsCount ){
                data.commentsCount += props.commentCount ? 10 : 0
                bottom.value = false
            }else{
                bottom.value = true
            }
            data.commentsList = res;
        });
    }
    
}
const onLikeChange = async(id:number, value:any) =>{
    if(value.likeType){
        await likeStore.unLike(id).then(()=>{
            value.likeType = !value.likeType
            value.like -= 1
        })
    }else{
        await likeStore.onLike(id).then(()=>{
            value.likeType = !value.likeType
            value.like += 1
        })
    }
   
}
const navigateToBlog = (url:string) => {
    const regex = /id=(\d+)/;
    const match = url.match(regex);
    const id = match ? match[1] : null;
    router.push({ path: '/meraki/blog', query: { id: id } });
}

</script>
<style scoped>


</style>