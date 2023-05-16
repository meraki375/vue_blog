<template>
    <header>
        <div class="img"><img src="../assets/images/bilibili/1.png"></div>
        <div><img src="../assets/images/bilibili/2.png"></div>
        <div><img src="../assets/images/bilibili/3.png"></div>
        <div><img src="../assets/images/bilibili/4.png"></div>
        <div><img src="../assets/images/bilibili/5.png"></div>
        <div><img src="../assets/images/bilibili/6.png"></div>
        <template class="centent">
            <a-space size="large">
                <IconPark :type="props.form.icon" theme="outline" :size="'42px'" fill="#FFF"/>
                <h1 style="font-size: 36px; color:#fff;">{{ props.form.title }}</h1>
            </a-space> 
            <div class="center" v-if="!props.onlytitle">
                <icon-clock-circle style="margin: 10px; color: aliceblue;"/>
                <p>{{dayjs().diff(props.form.updatedAt,'day')  + "天前"}}</p>
                <icon-tag style="margin: 10px;color: aliceblue;" />
                <p>{{props.form.className}}</p>
            </div>
        </template>
    </header>
   
</template>
<script setup lang="ts" name="Wallpaper">
import {IconPark} from '@icon-park/vue-next/es/all';
import {onMounted, nextTick} from 'vue' 
import dayjs from 'dayjs'
    onMounted(() => {
        nextTick(() => {
            const images = document.querySelectorAll('header > div > img')
            const movementLog = {
                lastPosition: 0,
                percentage: 0,
            }
            let intervalID:any = null
            const header:any = document.querySelector('header')
            header.addEventListener('mousemove', (e:any) => {
                // 通过两次鼠标移动的位置差来控制效果变化
                let percentage = e.clientX / document.body.offsetWidth - movementLog.lastPosition
                // 更新运动记录
                movementLog.lastPosition = e.clientX / document.body.offsetWidth
                movementLog.percentage += percentage
                movementControl(movementLog.percentage)
            })

            header.addEventListener('mouseenter', (e:any) => {
                // 记录初始的位置信息
                movementLog.lastPosition = e.clientX / document.body.offsetWidth
                clearInterval(intervalID)
            })

            header.addEventListener('mouseleave', (e:any) => {
                // 复原进度
                intervalID = playReset(movementLog.percentage, 0, 400)
            })

            /*  控制运动的进度
            */ 
            const movementControl = (percentage:any) => {
                let offset = 20 * percentage
                let blur = 10
                for (let [index, image] of images.entries()) {
                    offset *= 1.5

                    let blurValue = (Math.pow((index / images.length - percentage), 2) * blur)

                    image.style.setProperty('--offset', `${offset}px`)
                    image.style.setProperty('--blur', `${blurValue}px`)
                }
            }

            const playReset = (start:any, end:any, duration:any) => {
                const FRAME_INTERVAL = 40
                const FRAME_QTY = duration / FRAME_INTERVAL
                let frameCount = 0
                let intervalID:any = null
                const run = () => {
                    if (frameCount >= FRAME_QTY) {
                        clearInterval(intervalID)
                    } else {
                        // 用 log 函数来模拟 ease-out 的效果
                        // 好像应该用其他函数才对
                        const step = (end - start) * (Math.log(++frameCount) / Math.log(FRAME_QTY))
                        movementLog.percentage = start + step
                        movementControl(movementLog.percentage)
                    }
                }
                intervalID = setInterval(run, FRAME_INTERVAL)
                return intervalID
            }


            //启动定时器 眨眼睛效果
            const imgs = document.querySelectorAll('img');
            setInterval(() => {
                setTimeout(() => {
                    imgs[1].src = 'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185359.png';
                });

                setTimeout(() => {
                    imgs[1].src = 'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185453.png';
                }, 100);

                setTimeout(() => {
                    imgs[1].src = 'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185359.png';
                }, 200);

                setTimeout(() => {
                    imgs[1].src = 'https://xwmusicdata.oss-accelerate.aliyuncs.com/zyguitartest/cover/20230330185512.png';
                }, 300);
            }, 3000);
        })
    })
    const props: any = defineProps({
        form: Object, // 表单 
        onlytitle:{ // 是否只有标题
            type: Boolean,
            default: () => false
        }
    })
</script>
<style scoped lang="scss"> 
     body {
        margin: 0;
    }

    header {
        height: 360px;
        position: relative;
        overflow: hidden;
    }

    header > div {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        
        --offset: 0px;
        --blur: 2px;
    }

    header > div > img {
        display: block;
        width: 110%;
        height: 100%;
        object-fit: cover;
        
        transform: translatex(var(--offset));
        filter: blur(var(--blur));
    }
    .centent{
        position: absolute;
        bottom: 10%;
        display: block;
        width: 100%;
        height: 50%;
        text-align: center; 
        color: azure;
    }
</style>
 