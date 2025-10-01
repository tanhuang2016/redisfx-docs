# 什么是 RedisFX？

::: tip
当前文档版本为 v2.3.9，文档版本将与 RedisFX应用版本一致。
:::
## 简介
RedisFX是使用`JavaFX`开发的一款轻量级、现代化主题的`Redis GUI`工具，
基于`Java`的跨平台机制运行在JVM上，支持的平台有：



- &#x2714; **Windows x86**
- &#x2714; **MacOS x86**
- &#x2714; **MacOS ARM64**
- &#x2714; **Linux x86**
- &#x2714; **Linux ARM64**


## 特性
几乎涵盖你需要的所有功能，那如果没有，请提 [Issues](https://github.com/tanhuang2016/RedisFX/issues)

- &#x2714; SSH、SSL 全协议支持
- &#x2714; Cluster(集群)、Sentinel(哨兵) 模式支持
- &#x2714; String、List、Hash、Set、Zset、JSON、Stream 类型支持
- &#x2714; 控制台、命令监控、发布订阅、信息报表、批量导入/导出
- &#x2714; 数据编/解码、查看方式支持自定义扩展
- &#x2714; 多窗口同时运行不同Redis连接实例
- &#x2714; 多主题、多语言、其他个性化配置

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

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::



::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
