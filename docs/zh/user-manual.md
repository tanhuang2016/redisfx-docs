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
当打开一个连接，默认会加载500个key(取决于你高级选项中的配置)，并自动打开报表界面，双击key可以打开详情界面，双击目录会进行展开，支持Ctrl不连续多选和Shift连续多选，多选之后可以对key进行批量操作。
报表界面中会显示key的统计信息，可以在设置中关闭自动打开报表界面的功能。
<div class="tip custom-block" style="padding-top: 8px">
报表界面中会显示key的统计信息，可以在设置中关闭自动打开报表界面的功能。
</div>

### 工具栏
如果key的总数超过500个，会弹出工具栏，点击工具栏中的`加载更多`按钮可进行分段加载，或`加载所有`按钮，进行全部加载，还有定位当前打开的key选项、展开目录、收起目录、隐藏和显示工具栏的快捷按钮。

<ImageWithTheme 
  light-src="/png/manual/zh/key_tool.png"
  dark-src="/png/manual/zh/key_tool_dark.png"
  alt="搜索"
  margin="10px 120px 10px 120px"
/>

::: danger 注意
key的加载使用管道命令优化，性能有所提升，但巨量key加载到应用程序可能会造成卡顿，请谨慎使用`加载所有`按钮。
:::

### 搜索功能
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

### 右键菜单

<div style="display: flex; align-items: flex-start; justify-content: space-between;">
  <div style="flex: 1; text-align: left;margin-top: 20px;">
     <ul>
      <li>打开: 展开目录或打开key详情界面</li>
      <li>刷新: 刷新key列表</li>
      <li>删除: 只能对key进行删除，可以多选后批量操作</li>
      <li>清空: 执行flushdb命令,会删除所有key，请谨慎操作</li>
      <li>导出: 执行dump命令对key进行转储，支持多选后批量操作</li>
      <li>多选框: key选项支持多选框选择</li>
      <li>控制台: 打开命令控制台窗口，可以多开</li>
      <li>控制台: 打开命令监控窗口，一个连接只能打开一个</li>
      <li>控制台: 打开发布订阅窗口，一个连接只能打开一个</li>
      <li>控制台: 打开信息报表窗口，一个连接只能打开一个</li>
    </ul>
  </div>
  <div style="margin-left: 20px;margin-right: 60px;">
    <ImageWithTheme 
      light-src="/png/manual/zh/key_right_menu.png"
      dark-src="/png/manual/zh/key_right_menu_dark.png"
      alt="右键菜单"
      style="display: block; margin: 0;"
    />
  </div>
</div>

### 多选框功能

`Ctrl`和`Shift`是系统常见的多选方式，它快捷方便有其自有的优势，多选框是对其的补充，给用户一个更严谨直观的批量操作方式，多选框打开后会弹出副菜单栏，支持对key的删除和导出操作。

::: tip 注意
在RedisFX使用`Ctrl`和`Shift`对key选项进行多选时，只会对key进行多选，不会对目录进行多选。如果是多层级的树结构会带来不好的体验，则可以用多选框模式，支持对目录进行多选(会涵盖该目录下所有节点)。
:::

<ImageWithTheme 
  light-src="/png/manual/zh/key_checkbox.png"
  dark-src="/png/manual/zh/key_checkbox_dark.png"
  alt="搜索"
  margin="10px 120px 10px 120px"
/>

## Key详情界面 
Key详情界面会根据key的类型进行展示，目前支持的key类型有String、List、Hash、Set、Zset、Json、Stream，并统一提供了`重命名`、`时效修改`、`删除`、`刷新`按钮。
<div class="tip custom-block" style="padding-top: 8px">
鼠标停顿在刷新按钮1秒后会弹出自动刷新启动窗口，可进行自动刷新，最右侧会显示key的上次刷新时间。
</div>

### String类型
Redis的String类型存储的是字节数组，不仅仅支持文本存储，理论上是支持所有类型数据，例如图片、音视频等。对此抽象数据的展示区域统一提供了，查看器和编解码器的选择，并显示了数据的大小，提供了复制、导入/导出的快捷按钮，如果是文本类型数据还提供了字符集编码选择。
<ImageWithTheme 
  light-src="/png/manual/string.png"
  dark-src="/png/manual/string_dark.png"
  alt="string"
  margin="10px 10px 10px 10px"
/>

### List类型
List类型界面由一个数据列表，和列表元素显示区域，提供了新增头、新增尾、删除头、删除尾、删除选中行的功能。元素数据显示区域和String类型设计一致。
<ImageWithTheme 
  light-src="/png/manual/list.png"
  dark-src="/png/manual/list_dark.png"
  alt="list"
  margin="10px 10px 10px 10px"
/>

### Hash类型
Hash类型界面由一个数据列表，和列表元素显示区域，提供了新增和删除的功能。元素数据显示区域分为两块，分别是Hash的key、value，其设计和String类型一致。
<ImageWithTheme 
  light-src="/png/manual/hash.png"
  dark-src="/png/manual/hash_dark.png"
  alt="hash"
  margin="10px 10px 10px 10px"
/>

### Set类型

Set类型界面由一个数据列表，和列表元素显示区域，提供了新增、删除的功能。元素数据显示区域和String类型设计一致。

<ImageWithTheme 
  light-src="/png/manual/set.png"
  dark-src="/png/manual/set_dark.png"
  alt="set"
  margin="10px 10px 10px 10px"
/>

### Zset类型

Zset类型界面由一个数据列表，和列表元素显示区域，提供了新增、删除的功能。元素数据显示区域分为两块，分别是Zset的score和value，value展示区域String类型设计一致。

<ImageWithTheme 
  light-src="/png/manual/zset.png"
  dark-src="/png/manual/zset_dark.png"
  alt="zset"
  margin="10px 10px 10px 10px"
/>

### Json类型
Json类型界面几乎和String类型一致，只是数据只能是Json文本。
<ImageWithTheme 
  light-src="/png/manual/json.png"
  dark-src="/png/manual/json_dark.png"
  alt="json"
  margin="10px 10px 10px 10px"
/>

### Stream类型

Stream类型界面由一个数据列表，和列表元素显示区域，提供了新增、删除的功能。元素数据显示区域分为两块，分别是Stream的id和value，value展示区域String类型设计一致，只能是Json文本。
<ImageWithTheme 
  light-src="/png/manual/stream.png"
  dark-src="/png/manual/stream_dark.png"
  alt="stream"
  margin="10px 10px 10px 10px"
/>

## 功能界面
通过key控制面板的右键可以打开功能界面，功能界面包含命令控制台、命令监控、信息报表、发布订阅。

### 命令控制台 
- 通过命令的方式和Redis进行交互，`Enter键`发送命令，`clear`命令清空显示框。
- 输入命令或按`Tab键`会弹出命令提示框，按`↓键`可以进行选择，再按`Enter键`可以确认选择。
- 通过`↑键`和`↓键`可以查找历史输入命令。
::: tip 注意
提示命令来源于[Redis文档](https://github.com/redis/redis-doc/blob/master/commands.json)，可能不全。
<br/>
默认显示数据是1000行，如果结果超过1000行，会自动截断，比如 `keys *`命令。
:::

<ImageWithTheme 
  light-src="/png/manual/console.png"
  dark-src="/png/manual/console_dark.png"
  alt="console"
  margin="10px 10px 10px 10px"
/>


### 命令监控

- 监控Redis的命令，显示命令的调用时间、调用主机和命令信息。
::: tip 注意
命令监控会产生额外的开销，降低吞吐量，避免在生产环境使用此功能。
:::

<ImageWithTheme 
  light-src="/png/manual/monitor.png"
  dark-src="/png/manual/monitor_dark.png"
  alt="monitor"
  margin="10px 10px 10px 10px"
/>

### 信息报表

对Redis信息进行统计，包括key数量、内存占用、命令调用次数等，如果你有更好的想法，欢迎提[Issue](https://github.com/tanhuang2016/RedisFX/issues)。

<ImageWithTheme 
  light-src="/png/manual/report1.png"
  dark-src="/png/manual/report1_dark.png"
  alt="report1"
  margin="10px 10px 10px 10px"
/>

<ImageWithTheme 
  light-src="/png/manual/report2.png"
  dark-src="/png/manual/report2_dark.png"
  alt="report2"
  margin="10px 10px 10px 10px"
/>



### 发布订阅
支持发布/订阅功能。
<ImageWithTheme 
  light-src="/png/manual/pubsub.png"
  dark-src="/png/manual/pubsub_dark.png"
  alt="pubsub"
  margin="10px 10px 10px 10px"
/>