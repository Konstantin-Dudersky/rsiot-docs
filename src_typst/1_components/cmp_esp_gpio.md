# cmp_esp_gpio

Компонент для работы с входами и выходами GPIO микроконтроллера ESP

## Платформы

| Платформа                 | Поддержка |
| ------------------------- | --------- |
| aarch64-linux-android     | -         |
| aarch64-unknown-linux-gnu | -         |
| riscv32imc-esp-espidf     | +         |
| x86_64-linux-android      | -         |
| x86_64-unknown-linux-gnu  | -         |
| wasm32-unknown-unknown    | -         |

## Конфигурация

### Config

#### inputs

Конфигурация входов

**Примеры**

```rust
{{#shiftinclude auto:../src-rsiot/components/cmp_esp_gpio/config.rs:inputs }}
```

#### outputs

Конфигурация выходов

**Примеры**

```rust
{{#shiftinclude auto:../src-rsiot/components/cmp_esp_gpio/config.rs:outputs }}
```
