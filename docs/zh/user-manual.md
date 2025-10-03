---
outline: deep
---
<script setup>
import ImageWithTheme from '../.vitepress/components/ImageWithTheme.vue'
</script>

# 使用说明



## 连接管理
打开RedisFX会默认弹出连接管理窗口或通过点击菜单 &rarr;<span style="color: var(--vp-c-brand);">文件</span> &rarr; <span style="color: var(--vp-c-brand);">连接</span> 进行打开，然后就可以再管理界面中新建分组和连接，支持编辑、重命名、删除等操作。
<ImageWithTheme 
  light-src="/png/manual/zh/connection.png"
  dark-src="/png/manual/zh/connection_dark.png"
  alt="连接管理"
  margin="10px 120px 10px 120px"
/>


### 新建连接
填写连接名称、地址、端口、密码(没有则不填)，可点击测试按钮进行测试，点击确定即可完成新建。

::: tip 集群和哨兵模式
集群模式只需勾选`集群模式`选项框即可，会自动识别集群模式下的节点。
<br/>
哨兵模式勾选之后需要填写主节点名称，会自动识别主节点的从节点。
:::

<ImageWithTheme 
  light-src="/png/manual/zh/new_connection.png"
  dark-src="/png/manual/zh/new_connection_dark.png"
  alt="新建连接"
  margin="10px 120px 10px 120px"
/>

### SSL/TLS协议配置
填写SSL/TLS协议的授权证书、公钥证书、私钥证书、私钥密码(没有则不填)，需要勾选`使用SSL协议`选项框才会生效。
<ImageWithTheme 
  light-src="/png/manual/zh/ssl.png"
  dark-src="/png/manual/zh/ssl_dark.png"
  alt="SSL/TLS协议配置"
  margin="10px 120px 10px 120px"
/>


### SSH隧道协议配置
填写SSH隧道协议的地址、端口、用户名、密码，如果使用证书配置还需要填写私钥证书、私钥密码(没有则不填)，需要勾选`使用SSH连接`选项框才会生效。
::: tip 端口转发
SSH转发端口默认是随机生成，后续可能会添加手动指定端口的功能。
:::
<ImageWithTheme 
  light-src="/png/manual/zh/ssh.png"
  dark-src="/png/manual/zh/ssh_dark.png"
  alt="SSL/TLS协议配置"
  margin="10px 120px 10px 120px"
/>

### 高级选项配置
高级选项的参数包括:连接超时时间、执行超时时间、Key分隔符、展示风格,后续版本会完善默认Key加载数量、类型展示等更多的参数配置。
<ImageWithTheme 
  light-src="/png/manual/zh/advanced.png"
  dark-src="/png/manual/zh/advanced_dark.png"
  alt="高级选项配置"
  margin="10px 120px 10px 120px"
/>

## Key操作面板
- **db切换:** 点击db下拉选框，可快速切换所在库(集群模式默认只有0库)。
- **新增Key:** 点击新增按钮，选择类型可以快速新增Key。
- **搜索触发方式:** 点击&#x1F50D;按钮或者Enter键后会触发搜索，也可以点击 `⋮`按钮设置自动搜索。
- **搜索类型:** 默认是全部类型，点击 `⋮`按钮可以切换搜索类型。
- **模糊搜索:** 默认是模糊搜索，点击`.*`按钮可以切换为精确查询。
- **搜索记录:** `Alt+↓键`会显示最近搜索记录，可点记录回显或清空记录。

<ImageWithTheme 
  light-src="/png/manual/zh/search.png"
  dark-src="/png/manual/zh/search_dark.png"
  alt="搜索"
  margin="10px 120px 10px 120px"
/>