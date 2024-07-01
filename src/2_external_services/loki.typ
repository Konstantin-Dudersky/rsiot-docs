== Loki

Для проверки запуска можно открыть в браузере:

- http://localhost:3100/metrics
- http://localhost:3100/ready

=== docker

#raw(
  lang: "yaml",
  read("../config_services/loki/docker-compose.yml")
)
