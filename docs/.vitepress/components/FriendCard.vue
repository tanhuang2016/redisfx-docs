<!-- .vitepress/components/FriendCard.vue -->
<script setup>
import { computed } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  favicon: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  }
})

// 默认 favicon URL（当加载失败时使用）
const defaultFavicon = computed(() => {
  try {
    const domain = new URL(props.url).origin
    return `${domain}/favicon.ico`
  } catch {
    return ''
  }
})

const handleFaviconError = (event) => {
  // 当自定义图标加载失败时，尝试使用网站默认 favicon
  if (event.target.src !== defaultFavicon.value) {
    event.target.src = defaultFavicon.value
  }
}
</script>

<template>
  <a 
    :href="url" 
    target="_blank" 
    rel="noopener noreferrer"
    class="friend-card"
  >
    <div class="friend-card-content">
      <img 
        :src="favicon" 
        :alt="`${title} favicon`"
        class="friend-favicon"
        @error="handleFaviconError"
      >
      <div class="friend-info">
        <h3 class="friend-title">{{ title }}</h3>
        <p v-if="description" class="friend-description">{{ description }}</p>
      </div>
    </div>
  </a>
</template>

<style scoped>
.friend-card {
  display: block;
  text-decoration: none;
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 16px;
  margin: 8px;
  transition: border-color 0.25s, box-shadow 0.25s;
  background-color: var(--vp-c-bg-soft);
}

.friend-card:hover {
  border-color: var(--vp-c-brand);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.friend-card-content {
  display: flex;
  align-items: center;
  gap: 12px;
}

.friend-favicon {
  width: 48px;
  height: 48px;
  border-radius: 6px;
  object-fit: contain;
}

.friend-info {
  flex: 1;
}

.friend-title {
  margin: 0 0 4px 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.4;
}

.friend-description {
  margin: 0;
  font-size: 14px;
  color: var(--vp-c-text-2);
  line-height: 1.4;
}

@media (max-width: 768px) {
  .friend-card {
    margin: 8px 0;
  }
}
</style>