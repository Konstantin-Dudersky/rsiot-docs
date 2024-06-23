outputs: vec![cmp_raspberrypi_gpio::ConfigOutput {
    pin_number: 2,
    fn_input: |msg| match msg.data {
        MsgData::Custom(Custom::SetOutput2(value)) => Some(value),
        _ => None,
    },
}],