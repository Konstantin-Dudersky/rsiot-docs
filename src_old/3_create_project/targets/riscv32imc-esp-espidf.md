# riscv32imc-esp-espidf

```bash
cargo new project_name
```

**`.vscode/settings.json`**

```json
{
  "rust-analyzer.cargo.target": "riscv32imc-esp-espidf"
}
```

** `.zed/settings.json` **

```json
{
  "lsp": {
    "rust-analyzer": {
      "initialization_options": {
        "check": {
          "command": "clippy"
        },
        "cargo": {
          "target": "riscv32imc-esp-espidf"
        }
      }
    }
  }
}
```

**`.cargo/config.toml`**

```toml
[build]
target = "riscv32imc-esp-espidf"

[target.riscv32imc-esp-espidf]
linker = "ldproxy"
runner = "espflash flash --monitor"
rustflags = [
    "--cfg",
    "espidf_time64",
    "--cfg",
    "mio_unsupported_force_poll_poll", # https://github.com/tokio-rs/tokio/issues/5866
]

[unstable]
build-std = ["std", "panic_abort"]

[env]
MCU = "esp32c3"
# install all libraries globally, in folder ~/.espressif
ESP_IDF_TOOLS_INSTALL_DIR = "global"
# check current version on https://github.com/espressif/esp-idf/releases
ESP_IDF_VERSION = "v5.3"
```

**`build.rs`**

```rust
fn main() {
    embuild::espidf::sysenv::output();
}
```

**`rust-toolchain.toml`**

```toml
[toolchain]
channel = "nightly"
components = ["rust-src"]
```

**`sdkconfig.defaults`**

```
# Rust often needs a bit of an extra main task stack size compared to C (the default is 3K)
CONFIG_ESP_MAIN_TASK_STACK_SIZE=8000

# Use this to set FreeRTOS kernel tick frequency to 1000 Hz (100 Hz by default).
# This allows to use 1 ms granuality for thread sleeps (10 ms by default).
#CONFIG_FREERTOS_HZ=1000

# Workaround for https://github.com/espressif/esp-idf/issues/7631
#CONFIG_MBEDTLS_CERTIFICATE_BUNDLE=n
#CONFIG_MBEDTLS_CERTIFICATE_BUNDLE_DEFAULT_FULL=n

CONFIG_HTTPD_WS_SUPPORT=y

# Настройка логгирования
CONFIG_LOG_DEFAULT_LEVEL_VERBOSE=y
```

**`Cargo.toml`**

```toml
[dependencies]
esp-idf-svc = { version = "*" }

[build-dependencies]
embuild = { version = "*", features = ["espidf"] }
```

**`main.rs`**

Первой строкой в функции main():

```rust
esp_idf_svc::sys::link_patches();
```
