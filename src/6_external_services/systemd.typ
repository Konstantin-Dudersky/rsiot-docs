== SystemD

Пример создания файла для автозапуска сервисов с помощью SystemD

Файл `_PROJECT_.service`:

#raw(
  lang: "yaml",
  read("../config_services/systemd/project.service")
)

Установить сервис на целевой машине:

```nushell
sudo mv _PROJECT_.service /etc/systemd/system
sudo systemctl daemon-reload
sudo systemctl enable _PROJECT_
sudo systemctl start _PROJECT_
```
