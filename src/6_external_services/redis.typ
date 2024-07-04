== Redis

=== docker

#raw(
  lang: "yaml",
  read("../config_services/redis/docker-compose.yml")
)

=== Файлы конфигурации

==== `redis.conf`

Для сохранения сообщений при перезапуске:

#raw(
  lang: "conf",
  read("../config_services/redis/redis.conf")
)
