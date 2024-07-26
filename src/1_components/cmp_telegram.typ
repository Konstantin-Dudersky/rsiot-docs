== cmp_telegram

Компонент для рассылки сообщений через телеграм.

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
  [bot_token],
  [String],
  [Токен бота. Определяется при создании бота через BotFather],

  table.cell(colspan: 3)[
    ```rust
    bot_token: "token".into(),
    ```
  ],

  [chat_id],
  [i64],
  [Идентификатор чата, в который бот будет отправлять сообщения. Определить идентификатор можно разными способами. Один из способов - через телеграм бот  #link("https://t.me/usinfbot")[usinfbot]. Нужно переслать сообщение из канала в данный бот, в ответе будет идентификатор канала. ],

  table.cell(colspan: 3)[
    ```rust
    chat_id: -1002220119164,
    ```
  ],
)
