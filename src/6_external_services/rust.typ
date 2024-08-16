== Rust

Запуск программ на rust в контейнерах docker

=== docker (бекенд)

`docker-compose.yml`:

#raw(
  lang: "yaml",
  read("../config_services/rust (backend)/docker-compose.yml")
)

=== docker (cmp_leptos)

`docker-compose.yml`:

#raw(
  lang: "yaml",
  read("../config_services/rust (cmp_leptos)/docker-compose.yml")
)

`nginx.conf`:

#raw(
  lang: "nginx",
  read("../config_services/rust (cmp_leptos)/nginx.conf")
)
