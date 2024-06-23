store: cmp_auth::ConfigStore::Local(vec![cmp_auth::ConfigStoreLocalItem {
    login: "admin".into(),
    password: "admin".into(),
    role: AuthPermissions::Admin,
}]),