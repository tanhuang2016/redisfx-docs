---
outline: deep
---

# 如何安装
::: tip 安全下载渠道:
- 前往 [官网首页](/zh/) 下载，请根据你的操作系统选择对应的最新发布版本进行下载。
- 前往 [GitHub 仓库](https://github.com/tanhuang2016/RedisFX/releases) 下载，可以自行选择对应的版本进行下载。
- 前往 [Gitee 仓库](https://gitee.com/tanhuang2016/RedisFX) 下载，可以自行选择对应的版本进行下载。
:::

## Windows
Windows 平台上提供了四种发行版本，一种是 安装版，另一种则是 便携版 。便携版无需安装，解压后即可运行；安装版则需要安装，其安装过程与其他软件相同。大家可以根据自己的喜好进行选择。
-  rdm-ui-v2.x.x-windows-x86_64.exe 
-  rdm-ui-v2.x.x-windows-x86_64.zip 
-  rdm-ui-v2.x.x-windows-x86_64.msi 
-  rdm-ui-v2.x.x-windows-x86_64.jar 
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
