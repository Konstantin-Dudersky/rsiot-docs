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

=== Создание проекта

==== `.vscode/settings.json`

```json
{
  "rust-analyzer.cargo.target": "wasm32-unknown-unknown"
}
```

==== Tauri

```bash
cargo create-tauri-app --beta

# добавить поддержку Android
cargo tauri android init
```

==== Tailwind

Установить:

```bash
npm install -D tailwindcss
npm install -D @tailwindcss/forms
npx tailwindcss init
```

Создать файл `tailwind.config.js`:

```json
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: {
    files:  [
      "*.html",
    "./src/**/*.rs",
    "../../rsiot/src/components/cmp_leptos/components/**/*.rs"
    ],
  },
  plugins: [require('@tailwindcss/forms'),],
}
```

Создать файл `input.css` в корне проекта:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Добавить в `index.html`:

```html
<html>
  <head>
    <!-- Подключаем стили Tailwind -->
    <link data-trunk rel="tailwind-css" href="input.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
</html>
```

==== Material Theme

Создаем тему в #link("https://material-foundation.github.io/material-theme-builder/")[Material Theme Builder].
Скачиваем набор файлов css, распаковываем в папку `material-theme`. В начале файла `input.css` прописываем:

```css
/* Material theme */
@import "./material-theme/dark.css";
@import "./material-theme/dark-hc.css";
@import "./material-theme/dark-mc.css";
@import "./material-theme/light.css";
@import "./material-theme/light-hc.css";
@import "./material-theme/light-mc.css";
```

Прописать секцию `theme` в `tailwind.config.json`:

```json
module.exports = {
  content: {
    files:  [...],
  },
  plugins: [...],
  theme: {
    extend: {
      colors: {
        primary: "var(--md-sys-color-primary)",
        "surface-tint": "var(--md-sys-color-surface-tint)",
        "on-primary": "var(--md-sys-color-on-primary)",
        "primary-container": "var(--md-sys-color-primary-container)",
        "on-primary-container": "var(--md-sys-color-on-primary-container)",
        secondary: "var(--md-sys-color-secondary)",
        "on-secondary": "var(--md-sys-color-on-secondary)",
        "secondary-container": "var(--md-sys-color-secondary-container)",
        "on-secondary-container": "var(--md-sys-color-on-secondary-container)",
        tertiary: "var(--md-sys-color-tertiary)",
        "on-tertiary": "var(--md-sys-color-on-tertiary)",
        "tertiary-container": "var(--md-sys-color-tertiary-container)",
        "on-tertiary-container": "var(--md-sys-color-on-tertiary-container)",
        error: "var(--md-sys-color-error)",
        "on-error": "var(--md-sys-color-on-error)",
        "error-container": "var(--md-sys-color-error-container)",
        "on-error-container": "var(--md-sys-color-on-error-container)",
        background: "var(--md-sys-color-background)",
        "on-background": "var(--md-sys-color-on-background)",
        surface: "var(--md-sys-color-surface)",
        "on-surface": "var(--md-sys-color-on-surface)",
        "surface-variant": "var(--md-sys-color-surface-variant)",
        "on-surface-variant": "var(--md-sys-color-on-surface-variant)",
        outline: "var(--md-sys-color-outline)",
        "outline-variant": "var(--md-sys-color-outline-variant)",
        shadow: "var(--md-sys-color-shadow)",
        scrim: "var(--md-sys-color-scrim)",
        "inverse-surface": "var(--md-sys-color-inverse-surface)",
        "inverse-on-surface": "var(--md-sys-color-inverse-on-surface)",
        "inverse-primary": "var(--md-sys-color-inverse-primary)",
        "primary-fixed": "var(--md-sys-color-primary-fixed)",
        "on-primary-fixed": "var(--md-sys-color-on-primary-fixed)",
        "primary-fixed-dim": "var(--md-sys-color-primary-fixed-dim)",
        "on-primary-fixed-variant": "var(--md-sys-color-on-primary-fixed-variant)",
        "secondary-fixed": "var(--md-sys-color-secondary-fixed)",
        "on-secondary-fixed": "var(--md-sys-color-on-secondary-fixed)",
        "secondary-fixed-dim": "var(--md-sys-color-secondary-fixed-dim)",
        "on-secondary-fixed-variant": "var(--md-sys-color-on-secondary-fixed-variant)",
        "tertiary-fixed": "var(--md-sys-color-tertiary-fixed)",
        "on-tertiary-fixed": "var(--md-sys-color-on-tertiary-fixed)",
        "tertiary-fixed-dim": "var(--md-sys-color-tertiary-fixed-dim)",
        "on-tertiary-fixed-variant": "var(--md-sys-color-on-tertiary-fixed-variant)",
        "surface-dim": "var(--md-sys-color-surface-dim)",
        "surface-bright": "var(--md-sys-color-surface-bright)",
        "surface-container-lowest": "var(--md-sys-color-surface-container-lowest)",
        "surface-container-low": "var(--md-sys-color-surface-container-low)",
        "surface-container": "var(--md-sys-color-surface-container)",
        "surface-container-high": "var(--md-sys-color-surface-container-high)",
        "surface-container-highest": "var(--md-sys-color-surface-container-highest)",
        "green-color": "var(--md-extended-color-green-color)",
        "green-on-color": "var(--md-extended-color-green-on-color)",
        "green-color-container": "var(--md-extended-color-green-color-container)",
        "green-on-color-container": "var (--md-extended-color-green-on-color-container)",
        "yellow-color": "var(--md-extended-color-yellow-color)",
        "yellow-on-color": "var(--md-extended-color-yellow-on-color)",
        "yellow-color-container": "var(--md-extended-color-yellow-color-container)",
        "yellow-on-color-container": "var(--md-extended-color-yellow-on-color-container)",
      },
    },
  },
}
```

Для выбора темы применяем класс к элементу `html.body`:

```html
<body class="dark"></body>
```

Допустимые классы:

- dark-high-contrast
- dark-medium-contrast
- dark
- light-high-contrast
- light-medium-contrast
- light


Добавить в файл `input.css`:

```css
:root {
  --md-ref-typeface-brand: "Roboto";
  --md-ref-typeface-plain: system-ui;
}
```

Material theme builder почему-то не экспортирует настройки шрифтов. Когда пофиксят - пересмотреть.


==== Iconify

```bash
npm i -D @iconify/tailwind
npm i -D @iconify/json
```

Добавить в файл `tailwind.config.js`:

```json
const { addIconSelectors } = require("@iconify/tailwind");

module.exports = {
  plugins: [addIconSelectors(["mdi", "material-symbols"])],
}
```

Добавить в параметры `addIconSelectors` семейства иконок.

Далее в проекте иконки можно вставлять:

```html
<span class="iconify material-symbols--menu-rounded h-5 w-5"></span>
```
