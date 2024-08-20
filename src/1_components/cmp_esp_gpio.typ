== cmp_esp_gpio

Компонент для работы с входами и выходами GPIO микроконтроллера ESP

#table(
  columns: (auto, auto),
  "target triple", "Поддержка",
  "aarch64-linux-android", "-",
  "aarch64-unknown-linux-gnu", "-",
  "riscv32imc-esp-espidf", "+",
  "x86_64-linux-android", "-",
  "x86_64-unknown-linux-gnu", "-",
  "wasm32-unknown-unknown", "-",
)

=== Конфигурация

==== `Config`

#table(columns: (auto, auto, 1fr),
    [`inputs`],
    [],
    [Конфигурация входов],

    table.cell(colspan: 3)[
      #raw(read("/rsiot-src/components/cmp_esp_gpio/config/inputs.rs"), lang: "rust")
    ],

    [`outputs`],
    [],
    [Конфигурация выходов],
    table.cell(colspan: 3)[
      #raw(read("/rsiot-src/components/cmp_esp_gpio/config/outputs.rs"), lang: "rust")
    ],
)
