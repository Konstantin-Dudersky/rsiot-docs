fn_input: |msg| {
    let Some(msg_custom) = msg.get_custom_data() else {
        return Ok(None);
    };
    let item = match msg_custom {
        Custom::ValueInstantString(value) => cmp_webstorage::ConfigWebstorageItem {
            key: "save_item".into(),
            value: value.to_string(),
        },
        _ => return Ok(None),
    };
    Ok(Some(item))
},