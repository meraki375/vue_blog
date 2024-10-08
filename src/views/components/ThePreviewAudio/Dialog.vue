<template>
  <transition name="slide-dynamic-origin">
    <div class="audio-preview-wrapper" ref="audioRef" :style="audioStyle" v-show="visible">
      <section style="padding: 10px 14px 14px 14px">
        <div class="head" ref="audioHeadRef">
          <div class="name">
            <icon-music :size="16" spin />
            <span>{{ props.fileInfo?.name }}.{{ props.fileInfo?.extendName }}</span>
          </div>
          <div class="close-icon" @click="handleClose">
            <icon-close :size="12" />
          </div>
        </div>

        <!-- 音频组件 -->
        <audio class="audio" :src="props.fileInfo?.src" controls autoplay></audio>
      </section>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, type PropType } from 'vue'
import { useDraggable, useWindowSize, useElementSize } from '@vueuse/core'
import type { ApiFileItem } from '@/apis'

const props = defineProps({
  fileInfo: Object as PropType<ApiFileItem>,
  onCancel: Function
})

const visible = ref(false)

const audioRef = ref<HTMLElement | null>(null)
const audioHeadRef = ref<HTMLElement | null>(null)

onMounted(() => {
  visible.value = true
})

const { width: windowWidth, height: windowHeight } = useWindowSize()
const { width: boxWidth, height: boxHeight } = useElementSize(audioRef)

const axis = ref({ top: 40, left: windowWidth.value - boxWidth.value })
const obj = JSON.parse(sessionStorage.getItem('AudioDialogXY') as string)
if (obj && obj.top && obj.left) {
  axis.value.top = obj.top
  axis.value.left = obj.left
}
const { x, y } = useDraggable(audioRef, {
  initialValue: { x: axis.value.left - boxWidth.value, y: axis.value.top }
})

const audioStyle = computed(() => {
  let left: number | string = x.value
  let top: number | string = y.value
  if (x.value > windowWidth.value - boxWidth.value) {
    left = windowWidth.value - boxWidth.value
  }
  if (x.value < 0) {
    left = 0
  }
  if (y.value > windowHeight.value - boxHeight.value) {
    top = windowHeight.value - boxHeight.value
  }
  if (y.value < 0) {
    top = 0
  }
  sessionStorage.setItem('AudioDialogXY', JSON.stringify({ top, left }))
  return {
    left: left + 'px',
    top: top + 'px'
  }
})

const handleClose = () => {
  visible.value = false
  props.onCancel && props.onCancel()
}

defineExpose({
  visible,
  handleClose
})
</script>

<style lang="scss" scoped>
.audio-preview-wrapper {
  width: 300px;
  position: fixed;
  border-radius: 8px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  background: linear-gradient(to right, $color-theme, rgb(var(--primary-2)));
  z-index: 9999;
  .head {
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: move;
    user-select: none;
    &:active {
      cursor: move;
    }
    .name {
      display: flex;
      align-items: center;
      > span {
        margin-left: 8px;
      }
    }
    .close-icon {
      width: 24px;
      height: 24px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0);
      transition: all 0.2s;
      cursor: pointer;
      svg {
        transition: all 0.2s;
      }
      &:hover {
        background: rgba(0, 0, 0, 0.1);
        svg {
          transform: scale(1.3);
        }
      }
    }
  }
  .audio {
    width: 100%;
    &::-webkit-media-controls-enclosure {
      background: #fff;
    }
  }
}
</style>
