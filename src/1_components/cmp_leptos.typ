== cmp_leptos

Компонент для интеграции веб-приложения на основе фреймворка [Leptos](https://leptos.dev).

=== Платформы

#table(
  columns: (auto, auto),
  "target triple", "Поддержка",
  "aarch64-linux-android", "-",
  "aarch64-unknown-linux-gnu", "-",
  "riscv32imc-esp-espidf", "-",
  "x86_64-linux-android", "-",
  "x86_64-unknown-linux-gnu", "-",
  "wasm32-unknown-unknown", "+",
)

=== Конфигурация

==== `Config`

#table(
  columns: (auto, auto, 1fr),
  [body_component],
  [],
  [Корневой компонент для монтирования],

  table.cell(colspan: 3)[
    ```rust
    body_component: || view! { <App/> }
    ```
  ],

  [hostname],
  [],
  [Имя хоста, на котором развернуто веб-приложение]
)
