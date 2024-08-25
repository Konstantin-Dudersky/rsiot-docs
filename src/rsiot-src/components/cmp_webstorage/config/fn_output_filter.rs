fn_output: |item| {
    let data = match item.key.as_str() {
        "save_item" => Custom::ValueInstantString(item.value),
        _ => return Ok(None),
    };
    let msg = Message::new_custom(data);
    Ok(Some(msg))
},