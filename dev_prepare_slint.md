sudo apt-get install qtbase5-dev

## Android

sudo apt install openjdk-21-jdk

```
$env.JAVA_HOME = /snap/android-studio/current/jbr/

$env.ANDROID_HOME = "/home/konstantin/Android/Sdk"
$env.ANDROID_NDK_ROOT = $"($env.ANDROID_HOME)/ndk/26.2.11394342"

$env.TOOLCHAIN = $"($env.ANDROID_NDK_ROOT)/toolchains/llvm/prebuilt/linux-x86_64"
$env.TARGET = aarch64-linux-android
$env.API = 33

$env.AR = $"($env.TOOLCHAIN)/bin/llvm-ar"
$env.CC = $"($env.TOOLCHAIN)/bin/($env.TARGET)($env.API)-clang"
$env.AS = $env.CC
$env.CXX = $"($env.TOOLCHAIN)/bin/($env.TARGET)($env.API)-clang++"
$env.LD = $"($env.TOOLCHAIN)/bin/ld"
$env.RANLIB = $"($env.TOOLCHAIN)/bin/llvm-ranlib"
$env.STRIP = $"($env.TOOLCHAIN)/bin/llvm-strip"
```

Получить отфильтрованные логи из телефона:

adb logcat RustStdoutStderr:I \*:
