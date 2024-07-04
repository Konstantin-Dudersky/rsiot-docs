== Sentryshot

Сохранение потока с видеокамеры. #link("https://codeberg.org/SentryShot/sentryshot")[Ссылка на репозиторий].

=== docker

#raw(
  lang: "yaml",
  read("/config_services/sentryshot/docker-compose.yml"),
)

Проверить версию - #link("https://codeberg.org/SentryShot/sentryshot/releases").

=== Файлы конфигурации

==== `./sentryshot/configs/sentryshot.toml`

Проверить `max_disk_usage`.

#raw(
  lang: "toml",
  read("../config_services/sentryshot/configs/sentryshot.toml"),
)

==== `./sentryshot/configs/monitors/`

В папке хранятся файлы конфигурации для каждой камеры. Пример файла для камеры RTSP:

#raw(
lang: "json",
  read("../config_services/sentryshot/configs/monitors/tapo.json")
)
