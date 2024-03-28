# aarch64-linux-android

Задать переменные в файле `.cargo/config.toml`:

```toml
[env]
ANDROID_HOME = "/home/konstantin/Android/Sdk"
ANDROID_NDK_ROOT = "/home/konstantin/Android/Sdk/ndk/26.2.11394342"
JAVA_HOME = "/snap/android-studio/current/jbr/"

CC_aarch64-linux-android = "/home/konstantin/Android/Sdk/ndk/26.2.11394342/toolchains/llvm/prebuilt/linux-x86_64/bin/aarch64-linux-android34-clang"
CCX_aarch64-linux-android = "/home/konstantin/Android/Sdk/ndk/26.2.11394342/toolchains/llvm/prebuilt/linux-x86_64/bin/aarch64-linux-android34-clang"
AR_aarch64-linux-android = "/home/konstantin/Android/Sdk/ndk/26.2.11394342/toolchains/llvm/prebuilt/linux-x86_64/bin/llvm-ar"
RANLIB_aarch64-linux-android = "/home/konstantin/Android/Sdk/ndk/26.2.11394342/toolchains/llvm/prebuilt/linux-x86_64/bin/llvm-ranlib"
```

Проверить путь установки, версию NDK (26.2.11394342), версию платформы (34).

Добавить настройку для rast-analyzer в `.vscode/settings.json`

```json
{
  "rust-analyzer.cargo.target": "aarch64-linux-android"
}
```
