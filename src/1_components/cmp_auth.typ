== cmp_auth

Компонент авторизации пользователей

=== Платформы

#table(
  columns: (auto, auto),
  "target triple", "Поддержка",
  "aarch64-linux-android", "-",
  "aarch64-unknown-linux-gnu", "+",
  "riscv32imc-esp-espidf", "-",
  "x86_64-linux-android", "-",
  "x86_64-unknown-linux-gnu", "+",
  "wasm32-unknown-unknown", "-",
)

=== Конфигурация

==== `Config`

#table(
  columns: (auto, auto, 1fr),
  [`secret_key`],
  [String],
  [Секретный ключ для валидации токенов],

  [`store`],
  [],
  [Хранилище данных доступа],

  table.cell(colspan: 3)[
    Локальное сохранение:

    #raw(read("/rsiot-src/components/cmp_auth/config/store_local.rs"), lang: "rust")
  ]
)
