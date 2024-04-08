# cmp_leptos

## Таргеты

- [wasm32-unknown-unknown](../targets/wasm32-unknown-unknown.md)
- [aarch64-linux-android](../targets/aarch64-linux-android.md) (Tauri / Android)
- [armv7-linux-androideabi](../targets/armv7-linux-androideabi.md) (Tauri / Android)
- [i686-linux-android](../targets/i686-linux-android.md) (Tauri / Android)
- [x86_64-linux-android](../targets/x86_64-linux-android.md) (Tauri / Android)

## Trunk

```bash
cargo install trunk
```

## Tauri

Если требуется разработка приложения Tauri (https://beta.tauri.app/guides/prerequisites/).

```bash
(sudo apt install libwebkit2gtk-4.1-dev
  build-essential
  curl
  wget
  file
  libssl-dev
  libayatana-appindicator3-dev
  librsvg2-dev)
```

### Tauri CLI

```bash
cargo install tauri-cli --version "^2.0.0-beta"
```

### Create tauri apps

```bash
cargo install create-tauri-app
```

### Env variables

`~/.config/nushell/config.nu`:

```toml
$env.JAVA_HOME = "/snap/android-studio/current/jbr"
$env.ANDROID_HOME = "/home/konstantin/Android/Sdk"
$env.NDK_HOME = $"($env.ANDROID_HOME)/ndk/26.2.11394342"
```

Проверить пути
