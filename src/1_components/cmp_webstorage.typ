== cmp_webstorage

Хранение и загрузка сообщений используя LocalStorage или SessionStorage браузера. Подробнее на #link("https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API")[MDN].

Используется модуль `storage` библиотеки #link("https://docs.rs/gloo/latest/gloo/storage/index.html")[gloo].

=== Платформы

#table(
  columns: (auto, auto),
  "target triple", "Поддержка",
  "aarch64-linux-android",     "-",
  "aarch64-unknown-linux-gnu", "-",
  "riscv32imc-esp-espidf",     "-",
  "x86_64-linux-android",      "-",
  "x86_64-unknown-linux-gnu",  "-",
  "wasm32-unknown-unknown",    "+",
)

=== Конфигурация

==== Config

#table(
  columns: (auto, 1fr),

  [kind],
  [Вид хранилища - localstorage или sessionStorage],
  table.cell(colspan: 2)[
    Тип - StorageKind

    - LocalStorage - Сохраняет данные при перезапуске браузера
    - SessionStorage - Сохраняет данные. При перезапуске браузера данные теряются

    #raw(read("/rsiot-src/components/cmp_webstorage/config/kind.rs"), lang: "rust")

  ],

  [fn_input],
  [Сохранение сообщений в хранилище],
  table.cell(colspan: 2)[
    Тип - #raw(read("/rsiot-src/components/cmp_webstorage/config/TFnInput.rs"), lang: "rust")

    Сохранять все сообщения:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/fn_input_save_all.rs"), lang: "rust")

    Сохранять некоторые сообщения:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/fn_input_filter.rs"), lang: "rust")
  ],

  [fn_output],
  [Загрузка сообщений из хранилища],
  table.cell(colspan: 2)[
    Тип - #raw(read("/rsiot-src/components/cmp_webstorage/config/TFnOutput.rs"), lang: "rust")

    Ничего не загружать:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/fn_output_not_load.rs"), lang: "rust")

    Загружать некоторые сообщения:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/fn_output_filter.rs"), lang: "rust")
  ],

  [default_items],
  [Значения по-умолчанию, когда хранилище пустое],
  table.cell(colspan: 2)[
    Нет значений по-умолчанию:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/default_items_empty.rs"), lang: "rust")

    Есть значения по-умолчанию:

    #raw(read("/rsiot-src/components/cmp_webstorage/config/default_items_non_empty.rs"), lang: "rust")

  ]
)
