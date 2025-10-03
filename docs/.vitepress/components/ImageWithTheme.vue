<script setup>
import { useData } from 'vitepress'
import { ref, watch } from 'vue'

const props = defineProps({
  lightSrc: String,
  darkSrc: String,
  alt: String,
  margin: {
    type: String,
    default: '0'
  }
})

const { isDark } = useData()
const imageSrc = ref(props.lightSrc)
const showModal = ref(false)

watch(isDark, (dark) => {
  imageSrc.value = dark ? props.darkSrc : props.lightSrc
}, { immediate: true })

const openModal = () => {
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
}
</script>

<template>
  <div :style="{ textAlign: 'center', margin: margin }">
    <img 
      :src="imageSrc" 
      :alt="alt"
      style="cursor: zoom-in;"
      @click="openModal"
    >
  </div>
  
<!-- 弹框模态层 -->
<div 
  v-if="showModal"
  style="position: fixed; top: 0; left: 0; width: 100vw; height: 100vh; 
         background-color: rgba(0, 0, 0, 0.8); z-index: 1000; 
         display: flex; align-items: center; justify-content: center;
         cursor: zoom-out;"
  @click="closeModal"
>
  <img 
    :src="imageSrc" 
    :alt="alt"
    style="max-width: 90vw; max-height: 90vh; object-fit: contain; cursor: zoom-out;"
    @click="closeModal"
  >
</div>
</template>