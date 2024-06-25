# riscv32imc-esp-espidf

**toolchain**

```bash
rustup toolchain install nightly-2024-02-01-x86_64-unknown-linux-gnu --component rust-src
```

TODO - обновить когда пофиксят

**ESP-IDF**

Зависимости для ESP-IDF (https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/linux-macos-setup.html#for-linux-users):

```bash
sudo apt-get install git wget flex bison gperf python3 python3-pip python3-venv cmake ninja-build ccache libffi-dev libssl-dev dfu-util libusb-1.0-0
```

**ldproxy**

```bash
cargo install ldproxy
```

**LLVM**

```bash
sudo bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"
```

**espflash**

```bash
sudo usermod -a -G dialout $USER

sudo apt install libudev-dev

cargo install espflash
```
