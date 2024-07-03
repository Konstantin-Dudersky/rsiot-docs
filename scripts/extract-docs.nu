# Извлечь данные для генерирования документации

# Для работы нужно установить утилиты:
# cargo install extract_anchors

extract_anchors ../rsiot/src src/rsiot
rm -rf src/config_services
cp -r ../rsiot/config_services/ src/
