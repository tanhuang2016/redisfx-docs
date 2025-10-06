

# 构建

本项目使用Maven进行构建，在有运行环境的情况下，直接运行`mvn clean package -DskipTests`命令即可。

## 构建插件

- Windows和Linux使用[JavaPackager](https://github.com/fvarrui/JavaPackager)插件进行打包构建。
- MacOS使用jlink自定义jdk后(绕过签名问题)，使用jpackage进行打包构建。
## 本地构建

- 需要满足[JavaPackager](https://github.com/fvarrui/JavaPackager)插件的构建环境，才能打出安装包。
- 没有环境，也可以打出可执行jar包。

