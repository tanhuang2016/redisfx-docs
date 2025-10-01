---
outline: deep
---

# 如何安装
::: tip 安全下载渠道:
- 前往 [官网首页](/zh) 下载，请根据你的操作系统选择对应的最新发布版本进行下载。
- 前往 [GitHub 仓库](https://github.com/tanhuang2016/RedisFX/releases) 下载，可以自行选择对应的版本进行下载。
- 前往 [Gitee 仓库](https://gitee.com/tanhuang2016/RedisFX) 下载，可以自行选择对应的版本进行下载。

:::

## Windows

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
