Установка инструментов

Официальный гайд - [https://beta.tauri.app/guides/prerequisites/](https://beta.tauri.app/guides/prerequisites/)

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.1-dev \
  build-essential \
  curl \
  wget \
  file \
  libssl-dev \
  libayatana-appindicator3-dev \
  librsvg2-dev
```

## Установка Android Studio

```bash
sudo snap install android-studio --classic
```

Запустить Android Studio, поставить пакеты по-умолчанию. Открыть SDK Manager и установить NDK (Side by side) и Android SDK CLI.

Добавить target:

```bash
rustup target add aarch64-linux-android armv7-linux-androideabi i686-linux-android x86_64-linux-android wasm32-unknown-unknown
```

### Переменные среды

Необходимо задать переменные среды.

#### Nushell

Задать переменные среды в файле `~/.config/nushell/config.nu`. Проверить версию NDK

```bash
$env.JAVA_HOME = /snap/android-studio/current/jbr/
$env.ANDROID_HOME = "/home/konstantin/Android/Sdk"
$env.NDK_HOME = $"($env.ANDROID_HOME)/ndk/26.2.11394342"
```
