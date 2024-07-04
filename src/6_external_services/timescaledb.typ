== TimescaleDB

=== docker

#raw(
  lang: "yaml",
  read("../config_services/timescaledb/docker-compose.yml")
)

=== `postgresql.conf`

#raw(
  read("../config_services/timescaledb/postgresql.conf")
)

=== `pg_hba.conf`

#raw(
  read("../config_services/timescaledb/pg_hba.conf")
)

=== `init.sql`

#raw(
  lang: "sql",
  read("../config_services/timescaledb/init.sql")
)
