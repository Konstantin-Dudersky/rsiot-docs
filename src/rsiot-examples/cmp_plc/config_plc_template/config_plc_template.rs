
    use std::time::Duration;

    use rsiot::{components::cmp_plc, message::Message};

    pub fn config() -> cmp_plc::Config<Custom, fb_main::I, fb_main::Q, fb_main::S> {
        cmp_plc::Config {
            fn_cycle_init,
            fn_input,
            fn_output,
            fb_main: fb_main::FB::new(),
            period: Duration::from_millis(200),
            retention: None,
        }
    }

    fn fn_cycle_init(input: &mut fb_main::I) {}

    fn fn_input(input: &mut fb_main::I, msg: &Message<Custom>) {}

    fn fn_output(output: &fb_main::Q) -> Vec<Message<Custom>> {
        let msgs = vec![];

        msgs.into_iter()
            .map(|m| Message::new_custom(Custom::ExampleGroup(m)))
            .collect()
    }
