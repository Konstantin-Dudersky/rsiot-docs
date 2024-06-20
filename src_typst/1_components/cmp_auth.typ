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

==== Config

===== secret_key

Секретный ключ для валидации токенов

===== store

Хранилище данных доступа

**Примеры**

```rust
{{#shiftinclude auto:../src-rsiot/components/cmp_auth/config.rs:store_local}}
```
