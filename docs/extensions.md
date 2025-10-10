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

2. The function uses `.python` scripts to implement data encryption/decryption.
[Sample Code](https://github.com/tanhuang2016/RedisFX-demo/tree/main/extensions/converter/python)

- Decoder
``` python
import sys
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# Configure key and IV (modify according to actual encryption parameters)
key = b"1234567890123456"  # 16-byte AES key
iv = b"1234567890123456"   # 16-byte IV

# Read binary data directly from stdin
data = sys.stdin.buffer.read()

# AES decryption
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
decryptor = cipher.decryptor()
decrypted = decryptor.update(data) + decryptor.finalize()

# Output binary result directly through stdout
sys.stdout.buffer.write(decrypted)
sys.stdout.flush()
```

- Encoder
``` python
import sys
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# Configure key and IV (consistent with decryption script)
key = b"1234567890123456"  # 16-byte AES key
iv = b"1234567890123456"   # 16-byte IV

# Read plaintext data from stdin
plaintext = sys.stdin.buffer.read()

# PKCS7 padding
padding_length = 16 - (len(plaintext) % 16)
plaintext += bytes([padding_length] * padding_length)

# AES encryption
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
encryptor = cipher.encryptor()
encrypted = encryptor.update(plaintext) + encryptor.finalize()

# Output encrypted result through stdout
sys.stdout.buffer.write(encrypted)
sys.stdout.flush()
```

### File Interaction Example

::: tip Note
In file interaction mode, the input and output filenames are fixed as `redis-fx.input` and `redis-fx.output`.
:::

1. The function uses `.python` scripts to implement data encryption/decryption.
[Sample Code](https://github.com/tanhuang2016/RedisFX-demo/tree/main/extensions/converter/python)


- Decoder
``` python
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# Configure key and IV (modify according to actual encryption parameters)
key = b"1234567890123456"  # 16-byte AES key
iv = b"1234567890123456"   # 16-byte IV
# Input/output paths need to be consistent with the configuration in the custom codec, 
# with input fixed as redis-fx.input and output fixed as redis-fx.output
io_dir = r'E:\test\decode'
with open(os.path.join(io_dir, 'redis-fx.input'), "rb") as f:
    # Read binary data from file
    data = f.read()

# AES decryption
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
decryptor = cipher.decryptor()
decrypted = decryptor.update(data) + decryptor.finalize()

# Write binary data to file
with open(os.path.join(io_dir, 'redis-fx.output'), "wb") as f:
    f.write(decrypted)

```

- Encoder
``` python
import os
from cryptography.hazmat.primitives.ciphers import Cipher, algorithms, modes

# Configure key and IV (consistent with decryption script)
key = b"1234567890123456"  # 16-byte AES key
iv = b"1234567890123456"   # 16-byte IV
# Input/output paths need to be consistent with the configuration in the custom codec,
# with input fixed as redis-fx.input and output fixed as redis-fx.output
io_dir = r'E:\test\encode'
with open(os.path.join(io_dir, 'redis-fx.input'), "rb") as f:
    # Read binary data from file
    data = f.read()

# PKCS7 padding
padding_length = 16 - (len(data) % 16)
data += bytes([padding_length] * padding_length)

# AES encryption
cipher = Cipher(algorithms.AES(key), modes.CBC(iv))
encryptor = cipher.encryptor()
encrypted = encryptor.update(data) + encryptor.finalize()
# Write binary data to file
with open(os.path.join(io_dir, 'redis-fx.output'), "wb") as f:
    f.write(encrypted)
```


## Data Viewing Method

Plugin development mode based on jar packages is under planning and development.