<script setup>
import ImageWithTheme from '../.vitepress/components/ImageWithTheme.vue'
</script>

# 什么是 RedisFX？

<div class="tip custom-block" style="padding-top: 8px">
当前文档版本为 v2.3.17，文档版本将与 RedisFX应用版本保持一致。
</div>

## 简介
RedisFX是使用`JavaFX`开发的一款轻量级、现代化主题的`Redis GUI`工具，
基于`Java`的跨平台机制运行在JVM上，支持的平台有：



- &#x2714; **Windows x86**
- &#x2714; **MacOS x86**
- &#x2714; **MacOS ARM64**
- &#x2714; **Linux x86**
- &#x2714; **Linux ARM64**


## 特性
几乎涵盖你需要的所有功能，那如果没有，请提 [Issue](https://github.com/tanhuang2016/RedisFX/issues)

- &#x2714; SSH、SSL 全协议支持
- &#x2714; Cluster(集群)、Sentinel(哨兵) 模式支持
- &#x2714; String、List、Hash、Set、Zset、JSON、Stream 类型支持
- &#x2714; 控制台、命令监控、发布订阅、信息报表、批量导入/导出
- &#x2714; 数据编/解码、查看方式支持自定义扩展
- &#x2714; 多窗口同时运行不同Redis连接实例
- &#x2714; 多主题、多语言、其他个性化配置

## 详细功能和计划

<ul>
  <li><input type="checkbox" checked disabled> Key支持精准搜索、模糊搜索、指定类型搜索、快捷键搜索、自动搜索</li>
  <li><input type="checkbox" checked disabled> 查询采用分段式加载，结果展示支持列表和树形结构切换</li>
  <li><input type="checkbox" checked disabled> 支持key类型标签显示，且可自定义颜色和标签名称</li>
  <li><input type="checkbox" checked disabled> Key面板集成加载进度显示、定位到选项、展开/收起目录功能</li>
  <li><input type="checkbox" checked disabled> 支持Ctrl非连续多选、Shift连续多选、复选框多选进行批量删除和导出</li>
  <li><input type="checkbox" checked disabled> 可同时对多个Key详情进行管理，支持自动刷新和对数据的快捷复制、导入/导出</li>
  <li><input type="checkbox" checked disabled> 查看方式支持Text、Json、Xml、Yml、Hex、Binary、Image且支持自定义扩展</li>
  <li><input type="checkbox" checked disabled> 编/解码方式Base64、Gzip、Deflate、Msgpack、Zstd、Lz4、Brotli且支持自定义扩展</li>
  <li><input type="checkbox" checked disabled> 文本类型数据支持字符集编码切换(UTF-8、GBK、ISO-8859...)</li>
  <li><input type="checkbox" checked disabled> 支持快捷新建连接/分组、打开最近连接、搜索记录缓存等提升体验方面的功能</li>
<li><input type="checkbox" disabled> 文本类型数据支持搜索和替换功能(<a href="https://github.com/tanhuang2016/RedisFX/issues/11">Issue#11</a>)</li>

</ul>

## 关于主题
主题库使用[AtlantaFX](https://github.com/mkpaz/atlantafx)，默认支持7种主题，支持自定义主题
<br>
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;">
  <img src="/png/theme/theme-primer-light.png" alt="主题1" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-primer-dark.png" alt="主题2" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-nord-light.png" alt="主题3" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-nord-dark.png" alt="主题4" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-cupertino-light.png" alt="主题5" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-cupertino-dark.png" alt="主题6" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-dracula.png" alt="主题7" style="width: 30%; height: auto;border-radius: 30px;">
</div>

## 示例图片

<ImageWithTheme 
  light-src="/png/introduction/zh/example.png"
  dark-src="/png/introduction/zh/example_dark.png"
  alt="示例图片"
  margin="10px 10px 10px 10px"
/>