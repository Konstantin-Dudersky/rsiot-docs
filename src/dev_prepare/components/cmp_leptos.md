# cmp_leptos

Установить таргеты:

- [wasm32-unknown-unknown](../targets/wasm32-unknown-unknown.md)
- [aarch64-linux-android](../targets/aarch64-linux-android.md) (Tauri / Android)
- [armv7-linux-androideabi](../targets/armv7-linux-androideabi.md) (Tauri / Android)
- [i686-linux-android](../targets/i686-linux-android.md) (Tauri / Android)
- [x86_64-linux-android](../targets/x86_64-linux-android.md) (Tauri / Android)

```bash
cargo install trunk
```

**Tauri**

Если требуется разработка приложения Tauri (https://beta.tauri.app/guides/prerequisites/).

```bash
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

```bash
cargo install tauri-cli --version "^2.0.0-beta"
```

```bash
cargo install create-tauri-app
```

`~/.config/nushell/config.nu`:

```toml
$env.ANDROID_HOME = "/home/konstantin/Android/Sdk"
$env.NDK_HOME = "/home/konstantin/Android/Sdk/ndk/26.2.11394342"
$env.JAVA_HOME = "/snap/android-studio/current/jbr"
```

Проверить пути
