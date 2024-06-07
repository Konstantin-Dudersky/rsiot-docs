# cmp_webstorage

Хранение и загрузка сообщений используя LocalStorage или SessionStorage браузера. Подробнее на [MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API).

Используется модуль `storage` библиотеки [`gloo`](https://docs.rs/gloo/latest/gloo/storage/index.html).

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

#### kind

Вид хранилища - [localStorage](#localstorage) или [sessionStorage](#sessionstorage).

#### fn_input

Сохранение сообщений в хранилище

**Примеры**

- Сохранять все сообщения

```rust
{{#shiftinclude auto:../src-rsiot/components/cmp_webstorage/config.rs:fn_input_save_all}}
```

#### fn_output

Загрузка сообщений из хранилища (LocalStorage)

**Примеры**

- Ничего не загружать

```rust
{{#shiftinclude auto:../src-rsiot/components/cmp_webstorage/config.rs:fn_output_not_load}}
```

### ConfigKind

Вид хранилища

#### LocalStorage

Сохраняет данные при перезапуске браузера.

#### SessionStorage

Сохраняет данные. При перезапуске браузера данные теряются.
