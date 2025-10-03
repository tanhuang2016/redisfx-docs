<script setup>
import ImageWithTheme from '../.vitepress/components/ImageWithTheme.vue'
</script>
---
outline: deep
---

# 使用说明



## 新建连接
打开RedisFX会默认弹出连接管理窗口，可以新建分组和连接，支持编辑、重命名、删除等管理操作。
<ImageWithTheme 
  light-src="/png/manual/new_connection.png"
  dark-src="/png/manual/new_connection_dark.png"
  alt="连接示例"
/>

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress'

const { site, theme, page, frontmatter } = useData()
</script>

## Results

### Theme Data
<pre>{{ theme }}</pre>

### Page Data
<pre>{{ page }}</pre>

### Page Frontmatter
<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
