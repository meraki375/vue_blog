<template>
  <a-button size="mini" class="gi_hover_btn" @click="handleToggleTheme">
    <template #icon>
      <GiSvgIcon :size="30" name="1footprints"></GiSvgIcon>
      <!-- <1footprints :size="30" ></1footprints> -->
      <!-- <GiSvgIcon :size="30" name="1unfootprints" v-else ></GiSvgIcon>  -->
    </template>
  </a-button>
</template>

<script setup lang="ts" name="GiThemeBtn">
import { useDark, useToggle } from '@vueuse/core'
import { useAppStore } from '@/store'

const appStore = useAppStore()

const isDark = useDark({
  selector: 'body',
  attribute: 'arco-theme',
  valueDark: 'dark',
  valueLight: 'light',
  storageKey: 'arco-theme',
  onChanged(dark: boolean) {
    appStore.toggleTheme(dark)
  }
})
const toggleTheme = useToggle(isDark)

const handleToggleTheme = () => {
  toggleTheme()
}
</script>
