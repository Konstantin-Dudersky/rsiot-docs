fn_input: |msg| {
    let key = msg.key.clone();
    let value = msg.serialize()?;
    let item = ConfigWebstorageItem { key, value };
    Ok(Some(item))
},