
# Build

This project uses Maven for building. With the required environment set up, you can directly run the mvn clean package -DskipTests command.

## Build Plugins

- Windows and Linux use the [JavaPackager](https://github.com/fvarrui/JavaPackager) plugin for packaging and building.
- MacOS uses jlink to customize the JDK (to bypass signing issues), then uses jpackage for packaging and building.
## Local Build

- You need to meet the build environment requirements of the [JavaPackager](https://github.com/fvarrui/JavaPackager) plugin to create an installation package.
- Without the environment, you can still generate an executable jar package.

