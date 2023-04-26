<template>
    <!-- <div 
        ref="playerRef"
    ></div> -->
    <meting-js
        :server="props.server"
        :type="props.type"
        :id="props.id"
        :autoplay="props.autoplay"
        :fixed="props.fixed">
    </meting-js>
</template>
    
     
<script setup lang="ts" name="player">
// import http from '@/api/http'
// import APlayers from 'aplayer';
import 'aplayer/dist/APlayer.min.css';
// import type {PropType} from '@vue/runtime-core';
// import {nextTick, onBeforeUnmount, onMounted, ref} from 'vue'

// const audioList =[
//     {
//         name:'卒業 (毕业)',
//         artist:'日之内绘美、Lotus Juice',
//         url:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308160218.mp3',
//         cover:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308160550.jpg',
//         lrc:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308170407.lrc', 
//         theme:'#C6F7D5',
//         type:'auto'
//     },
//     {
//         name:'psychedelic',
//         artist:'星晴keylion',
//         url:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308162912.mp3',
//         cover:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308164435.jpg',
//         lrc:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308170457.lrc', 
//         theme:'#65acb2',
//         type:'auto'
//     },
//     {
//         name:'Over the sea',
//         artist:'星晴keylion',
//         url:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308163103.mp3',
//         cover:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308164435.jpg', 
//         lrc:'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/app/pkg/20230308170457.lrc', 
//         theme:'#65acb2',
//         type:'auto'
//     },
// ]
// const playerRef = ref()
// let instance: any;

// // APlayer歌曲信息
// class Audio {
//     // 音频艺术家
//     artist: String;
//     // 音频名称
//     name: String;
//     // 音频链接
//     url: String;
//     // 音频封面
//     cover: String;
//     // 歌词
//     lrc: String;

//     constructor(artist: String, name: String, url: String, cover: String, lrc: String) {
//         this.artist = artist;
//         this.name = name;
//         this.url = url;
//         this.cover = cover;
//         this.lrc = lrc;
//     }
// }

const props = defineProps({
    //服务器 netease 网易云
    server:{
        type: String,
        default: "netease"
    },
    //类型 
    type:{ //song 单曲, playlist 榜单, album 专辑, search 搜索, artist 歌手
        type: String,
        default: "search"
    },
    //类型 
    id:{ //歌曲 ID / 播放列表 ID / 专辑 ID / 搜索关键字
        type: String,
        default: "周杰伦"
    },
    //是否自动播放
    autoplay:{
        type: Boolean,
        default: false
    },
    //最大高度
    list_max_height:{
        type: String,
        default: ""
    },
    //mini模式
    mini:{
        type: Boolean,
        default: false
    },
    //吸底模式
    fixed:{
        type: Boolean,
        default: false
    }
    // // 开启吸底模式
    // fixed: {
    //     type: Boolean as PropType<boolean>,
    //     default: false
    // },
    // // 开启迷你模式
    // mini: {
    //     type: Boolean as PropType<boolean>,
    //     default: false
    // },
    // // 音频自动播放
    // autoplay: {
    //     type: Boolean as PropType<boolean>,
    //     default: true
    // },
    // // 主题色
    // theme: {
    //     type: String as PropType<string>,
    //     default: 'rgba(255,255,255,0.2)'
    // },
    // // 音频循环播放
    // loop: {
    //     type: String as PropType<'all' | 'one' | 'none'>,
    //     default: 'all'
    // },
    // // 音频循环顺序
    // order: {
    //     type: String as PropType<'list' | 'random'>,
    //     default: 'random'
    // },
    // // 预加载
    // preload: {
    //     type: String as PropType<'auto' | 'metadata' | 'none'>,
    //     default: 'auto'
    // },
    // // 默认音量
    // volume: {
    //     type: Number as PropType<number>,
    //     default: 0.7,
    //     validator: (value: Number) => {
    //     return value >= 0 && value <= 1;
    //     }
    // },
    // // 歌曲服务器(netease-网易云, tencent-qq音乐, kugou-酷狗, xiami-小米音乐, baidu-百度音乐)
    // songServer: {
    //     type: String as PropType<'netease' | 'tencent' | 'kugou' | 'xiami' | 'baidu'>,
    //     default: 'netease'
    // },
    // // 播放类型(song-歌曲, playlist-播放列表, album-专辑, search-搜索, artist-艺术家)
    // songType: {
    //     type: String as PropType<string>,
    //     default: 'playlist'
    // },
    // // 歌的id
    // songId: {
    //     type: String as PropType<string>,
    //     default: '19723756'
    // },
    // // 互斥，阻止多个播放器同时播放，当前播放器播放时暂停其他播放器
    // mutex: {
    //     type: Boolean as PropType<boolean>,
    //     default: true
    // },
    // // 传递歌词方式
    // lrcType: {
    //     type: Number as PropType<number>,
    //     default: 3
    // },
    // // 列表是否默认折叠
    // listFolded: {
    //     type: Boolean as PropType<boolean>,
    //     default: false
    // },
    // // 列表最大高度
    // listMaxHeight: {
    //     type: String as PropType<string>,
    //     default: '100px'
    // },
    // // 存储播放器设置的 localStorage key
    // storageName: {
    //     type: String as PropType<string>,
    //     default: 'aplayer-setting'
    // }
})

// 初始化
// onMounted(() => {
//     nextTick(() => {
        // http.player.getSongSheet(props.songServer, props.songType, props.songId)
        // .then(res => {
        //     let audioList = res.data.map(value => new Audio(value.author, value.title, value.url, value.pic, value.lrc));
        //     instance = new APlayer({
        //     container: playerRef.value,
        //     fixed: props.fixed,
        //     mini: props.mini,
        //     autoplay: props.autoplay,
        //     theme: props.theme,
        //     loop: props.loop,
        //     order: props.order,
        //     preload: props.preload,
        //     volume: props.volume,
        //     mutex: props.mutex,
        //     lrcType: props.lrcType,
        //     listFolded: props.listFolded,
        //     listMaxHeight: props.listMaxHeight,
        //     storageName: props.storageName,
        //     audio: audioList
        //     })
        // })
        // instance = new APlayers({
        //     container: playerRef.value,
        //     fixed: props.fixed,
        //     mini: props.mini,
        //     autoplay: props.autoplay,
        //     theme: props.theme,
        //     loop: props.loop,
        //     order: props.order,
        //     preload: props.preload,
        //     volume: props.volume,
        //     mutex: props.mutex,
        //     lrcType: props.lrcType,
        //     listFolded: props.listFolded,
        //     listMaxHeight: props.listMaxHeight,
        //     storageName: props.storageName,
        //     audio: audioList
        // })
//     })
// })
// // 销毁
// onBeforeUnmount(() => {
//     instance.destroy()
// })
</script>
