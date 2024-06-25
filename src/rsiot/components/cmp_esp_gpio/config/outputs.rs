outputs: vec![cmp_esp_gpio::ConfigGpioOutput {
    peripherals: peripherals.pins.gpio1.into(),
    fn_input: |msg| match msg.data {
        MsgData::Custom(Custom::EspRelay(value)) => Some(value),
        _ => None,
    },
    is_low_triggered: false,
}],