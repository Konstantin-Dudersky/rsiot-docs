inputs: vec![cmp_raspberrypi_gpio::ConfigInput {
    pin_number: 4,
    fn_output: |value| Message::new_custom(Custom::Input4State(value)),
}],