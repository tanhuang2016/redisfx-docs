---
outline: deep
---

# How to Install

::: tip Secure Download Channels:
- Go to [Official Website Home Page](/) to download. Please choose the latest release version according to your operating system.
- Go to [GitHub Repository](https://github.com/tanhuang2016/RedisFX/releases) to download. You can choose the corresponding version yourself.
- Go to [Gitee Repository](https://gitee.com/tanhuang2016/RedisFX) to download. You can choose the corresponding version yourself.
- For Java developers, you can go to [Maven Central Repository](https://central.sonatype.com/artifact/io.github.tanhuang2016/rdm-ui) to copy the POM configuration, introduce the dependency for use. See details below.
:::

## Windows

Four distribution versions are provided on the Windows platform, excluding ARM architecture (JavaFX currently only supports x86_64 architecture on Windows platform). Among them, `.exe` and `.msi` are installation versions, whose installation process is the same as other software. It is recommended to use `.exe` for installation first, as it supports custom paths and rule configuration. `.zip` is a portable version that can be run after decompression. `.jar` is the native Java version that requires a Java runtime environment.

Everyone can choose according to their usage habits and needs.
- `rdm-ui-v2.x.x-windows-x86_64.exe`
- `rdm-ui-v2.x.x-windows-x86_64.zip`
- `rdm-ui-v2.x.x-windows-x86_64.msi`
- `rdm-ui-v2.x.x-windows-x86_64.jar`

## Linux

Three distribution versions are provided on the Linux platform, including x86 and ARM architectures. Among them, `.rpm` is an installation version, whose installation process is the same as other software. `.gz` is a portable version that can be run after decompression. `.jar` is the native Java version that requires a Java runtime environment.

- `rdm-ui-v2.x.x-linux-x86_64.rpm`
- `rdm-ui-v2.x.x-linux-x86_64.gz`
- `rdm-ui-v2.x.x-linux-x86_64.jar`
- `rdm-ui-v2.x.x-linux-arm64.rpm`
- `rdm-ui-v2.x.x-linux-arm64.gz`
- `rdm-ui-v2.x.x-linux-arm64.jar`

## MacOS

Two distribution versions are provided on the MacOS platform, including x86 and ARM architectures. Among them, `.dmg` is an installation version, whose installation process is the same as other software. `.gz` is a portable version that can be run after decompression. `.jar` is the native Java version that requires a Java runtime environment.

- `rdm-ui-v2.x.x-macos-x86_64.dmg`
- `rdm-ui-v2.x.x-macos-x86_64.jar`
- `rdm-ui-v2.x.x-macos-arm64.dmg`
- `rdm-ui-v2.x.x-macos-arm64.jar`

::: danger To be optimized
The dmg installation package currently contains the entire Java runtime environment, resulting in a large volume. Subsequent optimizations will be made to slim down the lib. ([Issue#10](https://github.com/tanhuang2016/RedisFX/issues/10))
:::

## Using Maven Dependency

Starting from version v2.3.10, RedisFX supports Maven dependency introduction for use. The purpose of providing Maven dependencies is to prepare for subsequent plugin extensions.

```xml
        <dependency>
            <groupId>io.github.tanhuang2016</groupId>
            <artifactId>rdm-ui</artifactId>
            <!-- 2.3.10.2 is a temporary release version, please introduce the latest version yourself -->
            <version>2.3.10.2</version>
        </dependency>
```
After introducing the dependency, RedisFX can be run in the project.
```java
        public class Main {
            public static void main(String[] args) {
                RedisFX.main(args);
            }
        }
```

## Other Installation Methods
Support for other package management tools has not been completed yet. If you have this need, please submit an [Issue](https://github.com/tanhuang2016/RedisFX/issues)