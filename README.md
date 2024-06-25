# Документация для крейта rsiot

## Установить зависимостей

```bash
cargo install mdbook mdbook-autosummary mdbook-shiftinclude mdbook-pagetoc

# скачать pandoc, в репозитории старая версия - https://github.com/jgm/pandoc/releases/latest
sudo dpkg -i

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


## Typst

```nushell
typst compile --font-path /home/konstantin/projects/rsiot-docs/fonts src/main.typ rsiot-docs.pdf
```
