# cmp_raspberrypi_gpio

Компонент для работы с GPIO Raspberry Pi

Обертка над библиотекой [rppal](https://crates.io/crates/rppal)

Запускать программу скорее всего нужно из-под sudo.

[Распиновка](https://www.raspberrypi.com/documentation/computers/os.html#gpio-and-the-40-pin-header)

## Платформы

| Платформа                 | Поддержка |
| ------------------------- | --------- |
| aarch64-linux-android     | -         |
| aarch64-unknown-linux-gnu | +         |
| riscv32imc-esp-espidf     | -         |
| x86_64-linux-android      | -         |
| x86_64-unknown-linux-gnu  | -         |
| wasm32-unknown-unknown    | -         |

## Конфигурация

### Config

#### inputs

Обработка входов

**Примеры**

- Чтение входа с 4 пина

{{#shiftinclude auto:../src-rsiot/components/cmp_raspberrypi_gpio/config.rs:inputs}}

#### outputs

Обработка выходов

**Примеры**

- Управление вторым выходом

{{#shiftinclude auto:../src-rsiot/components/cmp_raspberrypi_gpio/config.rs:outputs}}
