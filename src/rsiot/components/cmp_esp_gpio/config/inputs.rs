inputs: vec![cmp_esp_gpio::ConfigGpioInput {
    peripherals: peripherals.pins.gpio9.into(),
    fn_output: |value| Message::new_custom(Custom::EspBootButton(value)),
}],