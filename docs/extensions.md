---
outline: deep
---

<script setup>
import ImageWithTheme from '.vitepress/components/ImageWithTheme.vue'
</script>

# Extension Features

RedisFX supports user-defined extensions for data encoding/decoding and data viewing methods.

## Data Encoding/Decoding

- In the data display area, click the `Encoding/Decoding Method` button in the menu bar, select `Custom Extension`, which will pop up the settings interface and locate to the `Codec` option. Click the `+Add` button to add a custom extension.
- Data encoders/decoders provide users with a custom data conversion method, such as compression, encryption/decryption scenarios.
- stdio uses standard input/output for data interaction. In file interaction mode, files are used for data interaction, meaning input/output data will be temporarily stored in the `Input/Output Directory`.

<ImageWithTheme 
  light-src="/png/extensions/encode.png"
  dark-src="/png/extensions/encode_dark.png"
  alt="encode"
  margin="10px 120px 10px 120px"
/>

::: tip Note
In stdio interaction mode, the input/output directory can be left blank. In file interaction mode, the input/output directory must be filled in.
stdio is suitable for rapid development, while file interaction mode is more suitable for scenarios with large data volumes or where persistent storage of data conversion is required.
:::

### stdio Interaction Example

1. The function uses `.bat` scripts to implement data conversion. The data is a hello string. The decoder will concatenate the string with "word", while the encoder will remove the trailing "word".
[Sample Code](https://github.com/tanhuang2016/RedisFX-demo/tree/main/extensions/converter/bat)

- Test Results

![test](/png/extensions/cmd_bat_test.png)
Fill in the script paths in the command input boxes for decoding and encoding configurations, such as: E:/xxx/join_stdio_decode.bat and E:/xxx/join_stdio_encode.bat

- Decoder
``` bat
@echo off
setlocal enabledelayedexpansion

:: Read data from standard input
set /p inputData=

:: Convert data to string (actually default in batch processing)
set resultString=%inputData%

:: Concatenate with "word"
set finalResult=%resultString%word

:: Return result through standard output
echo %finalResult%
```

- Encoder
``` bat
@echo off
setlocal enabledelayedexpansion

:: Read data from standard input
set /p inputData=

:: Convert data to string (actually default in batch processing)
set resultString=%inputData%

:: Remove trailing "word"
set finalResult=%resultString:~0,-4%

:: Return result through standard output
echo %finalResult%
```

### File Interaction Example


## Data Viewing Method

Plugin development mode based on jar packages is under planning and development.