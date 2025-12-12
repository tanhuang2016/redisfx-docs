<script setup>
import ImageWithTheme from '.vitepress/components/ImageWithTheme.vue'
</script>

# What is RedisFX?

<div class="tip custom-block" style="padding-top: 8px">
The current document version is v2.3.21, and the document version will be consistent with the RedisFX application version.
</div>

## Introduction
RedisFX is a lightweight, modern-themed `Redis GUI` tool developed using `JavaFX`, running on JVM based on `Java`'s cross-platform mechanism. Supported platforms include:

- &#x2714; **Windows x86**
- &#x2714; **MacOS x86**
- &#x2714; **MacOS ARM64**
- &#x2714; **Linux x86**
- &#x2714; **Linux ARM64**

## Features
Almost covering all the functions you need. If not, please submit an [Issue](https://github.com/tanhuang2016/RedisFX/issues)

- &#x2714; Full protocol support for SSH, SSL
- &#x2714; Support for Cluster and Sentinel modes
- &#x2714; Support for String, List, Hash, Set, Zset, JSON, Stream types
- &#x2714; Console, command monitoring, publish/subscribe, information reports, batch import/export
- &#x2714; Custom extension support for data encoding/decoding and viewing methods
- &#x2714; Multiple windows running different Redis connection instances simultaneously
- &#x2714; Multi-theme, multi-language, and other personalized configurations

## Detailed Features and Roadmap

<ul>
  <li><input type="checkbox" checked disabled> Key supports precise search, fuzzy search, specified type search, shortcut key search, automatic search</li>
  <li><input type="checkbox" checked disabled> Query uses segmented loading, result display supports switching between list and tree structure</li>
  <li><input type="checkbox" checked disabled> Supports key type tag display, with customizable colors and tag names</li>
  <li><input type="checkbox" checked disabled> Key panel integrates loading progress display, locate to option, expand/collapse directory functions</li>
  <li><input type="checkbox" checked disabled> Supports Ctrl non-contiguous multi-selection, Shift contiguous multi-selection, checkbox multi-selection for batch deletion and export</li>
  <li><input type="checkbox" checked disabled> Can manage multiple Key details simultaneously, supports auto-refresh and quick copy, import/export of data</li>
  <li><input type="checkbox" checked disabled> Viewing methods support Text, Json, Xml, Yml, Hex, Binary, Image and custom extensions</li>
  <li><input type="checkbox" checked disabled> Encoding/decoding methods Base64, Gzip, Deflate, Msgpack, Zstd, Lz4, Brotli and custom extensions</li>
  <li><input type="checkbox" checked disabled> Text type data supports character set encoding switching (UTF-8, GBK, ISO-8859...)</li>
  <li><input type="checkbox" checked disabled> Supports quick new connection/group creation, opening recent connections, search history caching and other experience enhancement features</li>
<li><input type="checkbox" disabled> Text type data supports search and replace functionality (<a href="https://github.com/tanhuang2016/RedisFX/issues/11">Issue#11</a>)</li>
</ul>

## About Themes
Theme library uses [AtlantaFX](https://github.com/mkpaz/atlantafx), defaults to 7 themes, supports custom themes
<br>
<div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 30px;">
  <img src="/png/theme/theme-primer-light.png" alt="Theme 1" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-primer-dark.png" alt="Theme 2" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-nord-light.png" alt="Theme 3" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-nord-dark.png" alt="Theme 4" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-cupertino-light.png" alt="Theme 5" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-cupertino-dark.png" alt="Theme 6" style="width: 30%; height: auto;border-radius: 30px;">
  <img src="/png/theme/theme-dracula.png" alt="Theme 7" style="width: 30%; height: auto;border-radius: 30px;">
</div>

## Example Images

<ImageWithTheme 
  light-src="/png/introduction/example.png"
  dark-src="/png/introduction/example_dark.png"
  alt="Example Image"
  margin="10px 10px 10px 10px"
/>