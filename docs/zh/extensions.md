---
outline: deep
---

<script setup>
import ImageWithTheme from '../.vitepress/components/ImageWithTheme.vue'
</script>

# 扩展功能

RedisFX支持用户自定义扩展数据编/解码、数据查看方式。


## 数据编/解码

- 在数据展示区域点击菜单栏的`编/解码方式`按钮，选择`自定义扩展`，会弹出设置界面并定位到`编/解码器`选项，点击`+新增`按钮及可添加自定义扩展。
- 数据编/解码器是给用户提供一种自定义的数据转换方式，比如压缩、加/解密等场景。
- stdio使用标准输入输出进行数据交互，文件交互模式下使用文件进行数据交互，也就是输入输出数据会临时存储在`输入输出目录`中。

<ImageWithTheme 
  light-src="/png/extensions/zh/encode.png"
  dark-src="/png/extensions/zh/encode_dark.png"
  alt="encode"
  margin="10px 120px 10px 120px"
/>

::: tip 注意
如果是stdio交互模式，输入输出目录可以不填，文件交互模式下，输入输出目录必须填写。
stdio适合快速开发，文件交互模式更适合数据量大或者需要对数据转换进行持久化存储的场景。
:::


### stdio交互示例

1. 功能为使用`.bat`脚本实现对数据的转换，数据为hello字符串，解码器会将字符串拼接上word，而编码器会将末尾的word去掉。
[示例代码](https://github.com/tanhuang2016/RedisFX-demo/tree/main/extensions/converter/bat)

- 测试效果

![test](/png/extensions/cmd_bat_test.png)
分别在解码和编码配置的命令输入框填写脚本路径，如：E:/xxx/join_stdio_decode.bat 和 E:/xxx/join_stdio_encode.bat

- 解码器
``` bat
@echo off
setlocal enabledelayedexpansion

:: 从标准输入读取数据
set /p inputData=

:: 将数据转换为字符串（实际上在批处理中默认就是字符串）
set resultString=%inputData%

:: 拼接上 "word"
set finalResult=%resultString%word

:: 通过标准输出返回结果
echo %finalResult%

```

- 编码器
``` bat
@echo off
setlocal enabledelayedexpansion

:: 从标准输入读取数据
set /p inputData=

:: 将数据转换为字符串（实际上在批处理中默认就是字符串）
set resultString=%inputData%

:: 去掉末尾的 "word"
set finalResult=%resultString:~0,-4%

:: 通过标准输出返回结果
echo %finalResult%
```

### 文件交互示例


## 数据查看方式

基于jar包的插件开发模式，正在计划开发中。