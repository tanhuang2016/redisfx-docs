

# 开发

本项目使用Maven进行构建，非常简单，在有运行环境的情况下，导入之后，就可以直接运行了。

## 开发环境

环境也很简单，就JDK21 + Maven 对应版本即可。



## 项目结构

```treeview
RedisDesktopManagerFX
├─rdm-common 公共模块，定义通用工具，线程池等
├─rdm-redis redis服务模块，对ui需要的接口进行约束
├─rdm-redis-imp redis 服务实现模块，具体客户端接口的实现
└─rdm-ui 整个工具的gui模块
  └─src
   ├─main
   │  ├─java
   │  │  └─xyz
   │  │   └─hashdog
   │  │     ─rdm
   │  │      └─ui 
   │  │       ├─common 公共封装
   │  │       ├─controller view的控制层
   │  │       ├─entity 实体类bean
   │  │       ├─exceptions ui异常
   │  │       ├─handler 封装处理器
   │  │       └─util ui相关的工具
   │  └─resources 
   │     ├─css ui相关样式表
   │     ├─fxml 视图对应的fxml文件
   │     ├─i18n 国际化
   │     ├─svg  图标
   │     └─icon 图标
```

## 运行
导入项目且Maven依赖都加载完之后，直接运行redisfx.tanh.rdm.ui.RedisFX中的man方法即可。