<template>
  <svg
    aria-hidden="true"
    :class="svgClass"
    v-bind="$attrs"
    :style="{ color: color, fill: color, width: iconSize, height: iconSize }"
  >
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup lang="ts" name="GiSvgIcon">
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: [Number, String],
    default: 20
  }
})

// 判断传入的值，是否带有单位，如果没有，就默认用px单位
const getUnitValue = (value: string | number): string | number => {
  return /(px|em|rem|%)$/.test(value.toString()) ? value : value + 'px'
}

const iconSize = computed<string | number>(() => {
  return getUnitValue(props.size)
})

const iconName = computed<string>(() => `#icon-${props.name}`)

const svgClass = computed<string>(() => {
  if (props.name) return `my-svg-icon `
  return 'svg-icon'
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: auto;
  height: auto;
  // fill: currentColor;
  vertical-align: middle;
  flex-shrink: 0;
}
.my-svg-icon use {
  fill: red; /* 设置SVG图标的填充色为红色 */
  stroke: blue; /* 设置SVG图标的描边色为蓝色 */
}

</style>
