# Документация для крейта rsiot

## Установить зависимостей

```bash
cargo install mdbook
sudo apt -y install pandoc
cargo install mdbook-pandoc
cargo install --git https://github.com/typst/typst --locked typst-cli
```

## Разработка

```bash
mdbook serve
```

Доступно локально по адресу http://localhost:3000/html/index.html

## Публикация

Доступно по адресу https://konstantin-dudersky.github.io/rsiot-docs/
