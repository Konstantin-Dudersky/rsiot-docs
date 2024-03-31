# aarch64-linux-android

Получить отфильтрованные логи из телефона:

```bash
adb logcat RustStdoutStderr:I *:S
```

Выводить только сообщения от Rust с уровнем Info и выше.

Уровни фильтрации:

- V: Verbose (lowest priority)
- D: Debug
- I: Info
- W: Warning
- E: Error
- F: Fatal
- S: Silent (highest priority, where nothing is ever printed)
