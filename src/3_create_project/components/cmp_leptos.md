# cmp_leptos

**`.vscode/settings.json`**

```json
{
  "rust-analyzer.cargo.target": "wasm32-unknown-unknown"
}
```

## Tauri

```bash
cargo create-tauri-app --beta

# добавить поддержку Android
cargo tauri android init
```

### Tailwind

```bash
npm install -D tailwindcss
npm install -D @tailwindcss/forms
npx tailwindcss init
```

**`tailwind.config.js`**

```json
module.exports = {
  content: {
    files:  [
      "*.html",
    "./src/**/*.rs",
    "../../rsiot/src/components/cmp_leptos/components/tailwind/**/*.rs"
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
    <!-- Подключаем стили, которые компилирует Tailwind -->
    <link data-trunk rel="tailwind-css" href="input.css" />
  </head>
</html>
```

#### Rustiwind

Для сортировки классов Tailwind можно поставить утилиту:

```bash
cargo install rustywind
```

Вызов:

```bash
rustywind --write src/
```
