        use leptos::*;
        use tokio::task::LocalSet;

        use crate::components::cmp_leptos;
        fn main() -> anyhow::Result<()> {
            #[component]
            fn App() -> impl IntoView {
                view! {}
            }

            // cmp_leptos --------------------------------------------------------------------------
            let config_leptos = cmp_leptos::Config {
                body_component: || view! { <App/> },
                hostname: "localhost".into(),
            };

            // config_executor ---------------------------------------------------------------------
            let config_executor = ComponentExecutorConfig {
                buffer_size: 100,
                executor_name: "example_leptos".into(),
                fn_auth: |msg, _| Some(msg),
            };

            // executor ----------------------------------------------------------------------------

            let context = LocalSet::new();
            context.spawn_local(async move {
                ComponentExecutor::<Custom>::new(config_executor)
                    .add_cmp(cmp_leptos::Cmp::new(config_leptos))
                    .wait_result()
                    .await?;
                Ok(()) as anyhow::Result<()>
            });
            spawn_local(context);
            Ok(())
        }