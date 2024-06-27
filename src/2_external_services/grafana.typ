== Grafana

=== docker

#raw(
  lang: "yaml",
  read("../config_services/grafana/docker-compose.yml")
)

=== Файлы конфигурации

==== `./config_services/grafana/datasources/`

В папке хранятся файлы для настройки источников данных.

`influxdb.yaml`:

#raw(
  lang: "yaml",
  read("../config_services/grafana/datasources/influxdb.yaml")
)

`loki.yaml`:

#raw(
  lang: "yaml",
  read("../config_services/grafana/datasources/loki.yaml")
)

`timescaledb.yaml`:

#raw(
  lang: "yaml",
  read("../config_services/grafana/datasources/timescaledb.yaml")
)

==== `./config_services/grafana/dashboards/`

В папке хранятся все дашбоарды. Структура папок переносится в структуру дашбоардов. В корне папки нужно разместить файл `config.yaml`:

#raw(
  lang: "yaml",
  read("../config_services/grafana/dashboards/config.yaml")
)
