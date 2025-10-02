---
outline: deep
---

# 如何安装
::: tip 安全下载渠道:
- 前往 [官网首页](/zh/) 下载，请根据你的操作系统选择对应的最新发布版本进行下载。
- 前往 [GitHub 仓库](https://github.com/tanhuang2016/RedisFX/releases) 下载，可以自行选择对应的版本进行下载。
- 前往 [Gitee 仓库](https://gitee.com/tanhuang2016/RedisFX) 下载，可以自行选择对应的版本进行下载。
- Java开发的同学可以前往 [Maven 中央仓库](https://central.sonatype.com/artifact/io.github.tanhuang2016/rdm-ui) 复制POM 配置，引入依赖进行使用。
:::

## Windows
Windows 平台上提供了四种发行版本，不包含ARM架构(JavaFX目前在Windows平台仅支持x86_64架构)，其中`.exe` 和 `.msi`为安装版本，其安装过程与其他软件相同，推荐优先使用`.exe`进行安装，它支持自定义路径和规则配置，`.zip` 为便携版本，解压后即可运行，`.jar` 为Java原生版本，需要Java运行环境。


大家可以根据自己的使用习惯和需求进行选择。
-  `rdm-ui-v2.x.x-windows-x86_64.exe`
-  `rdm-ui-v2.x.x-windows-x86_64.zip` 
-  `rdm-ui-v2.x.x-windows-x86_64.msi` 
-  `rdm-ui-v2.x.x-windows-x86_64.jar` 

## Linux
Linux 平台上提供了三种发行版本，包括x86和ARM架构，其中`.rpm` 为安装版本，其安装过程与其他软件相同，`.gz` 为便携版本，解压后即可运行，`.jar` 为Java原生版本，需要Java运行环境。


-  `rdm-ui-v2.x.x-linux-x86_64.rpm`
-  `rdm-ui-v2.x.x-linux-x86_64.gz` 
-  `rdm-ui-v2.x.x-linux-x86_64.jar` 
-  `rdm-ui-v2.x.x-linux-arm64.rpm`
-  `rdm-ui-v2.x.x-linux-arm64.gz` 
-  `rdm-ui-v2.x.x-linux-arm64.jar` 

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
