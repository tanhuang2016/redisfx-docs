<script setup>
import { useData } from 'vitepress'
import { ref, watch } from 'vue'

const props = defineProps({
  lightSrc: String,
  darkSrc: String,
  alt: String
})

const { isDark } = useData()
const imageSrc = ref(props.lightSrc)

watch(isDark, (dark) => {
  imageSrc.value = dark ? props.darkSrc : props.lightSrc
}, { immediate: true })
</script>

<template>
  <img :src="imageSrc" :alt="alt">
</template>