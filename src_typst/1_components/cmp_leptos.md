# cmp_leptos

Компонент для интеграции веб-приложения на основе фреймворка [Leptos](https://leptos.dev).

## Платформы

| Платформа                 | Поддержка |
| ------------------------- | --------- |
| aarch64-linux-android     | -         |
| aarch64-unknown-linux-gnu | -         |
| riscv32imc-esp-espidf     | -         |
| x86_64-linux-android      | -         |
| x86_64-unknown-linux-gnu  | -         |
| wasm32-unknown-unknown    | +         |

## Конфигурация

### Config

#### body_component

Корневой компонент для монтирования

**Примеры**

```rust
body_component: || view! { <App/> }
```

#### hostname

Имя хоста, на котором развернуто веб-приложение
