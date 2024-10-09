(function() {var type_impls = {
"rsiot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Component%3CTConfig,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/executor/component/single_thread.rs.html#11-19\">source</a><a href=\"#impl-Component%3CTConfig,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TConfig, TMsg&gt; <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;TConfig, TMsg&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/executor/component/single_thread.rs.html#13-18\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/executor/component/single_thread/struct.Component.html#tymethod.new\" class=\"fn\">new</a>(config: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;TConfig&gt;) -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Создание компонента</p>\n</div></details></div></details>",0,"rsiot::components::_cmp_template::component::Cmp","rsiot::components::cmp_add_input_stream::Cmp","rsiot::components::cmp_add_output_stream::Cmp","rsiot::components::cmp_derive::component::Cmp","rsiot::components::cmp_external_fn_process::Cmp","rsiot::components::cmp_inject_periodic::Cmp","rsiot::components::cmp_logger::Cmp","rsiot::components::cmp_slint::component::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponent%3CTMsg%3E-for-Component%3CTConfig,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/executor/component/single_thread.rs.html#22-43\">source</a><a href=\"#impl-IComponent%3CTMsg%3E-for-Component%3CTConfig,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TConfig, TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponent.html\" title=\"trait rsiot::executor::component::single_thread::IComponent\">IComponent</a>&lt;TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;TConfig, TMsg&gt;<div class=\"where\">where\n    Self: <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;TConfig, TMsg&gt;,</div></h3></section></summary><div class=\"impl-items\"><section id=\"method.set_interface\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/executor/component/single_thread.rs.html#26-28\">source</a><a href=\"#method.set_interface\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponent.html#tymethod.set_interface\" class=\"fn\">set_interface</a>(&amp;mut self, in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;)</h4></section><section id=\"method.spawn\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/executor/component/single_thread.rs.html#30-42\">source</a><a href=\"#method.spawn\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponent.html#tymethod.spawn\" class=\"fn\">spawn</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 mut self,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"rsiot/executor/types/type.CmpResult.html\" title=\"type rsiot::executor::types::CmpResult\">CmpResult</a>&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></div></details>","IComponent<TMsg>","rsiot::components::_cmp_template::component::Cmp","rsiot::components::cmp_add_input_stream::Cmp","rsiot::components::cmp_add_output_stream::Cmp","rsiot::components::cmp_derive::component::Cmp","rsiot::components::cmp_external_fn_process::Cmp","rsiot::components::cmp_inject_periodic::Cmp","rsiot::components::cmp_logger::Cmp","rsiot::components::cmp_slint::component::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CCfg%3CTMsg%3E,+TMsg%3E-for-Component%3CCfg%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_add_input_stream/mod.rs.html#21-38\">source</a><a href=\"#impl-IComponentProcess%3CCfg%3CTMsg%3E,+TMsg%3E-for-Component%3CCfg%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_add_input_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_input_stream::Cfg\">Cfg</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_add_input_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_input_stream::Cfg\">Cfg</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + 'static,</div></h3></section></summary><div class=\"docblock\"><p>Компонент для добавления сообщений из побочного потока</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_add_input_stream/mod.rs.html#25-37\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_add_input_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_input_stream::Cfg\">Cfg</a>&lt;TMsg&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Cfg<TMsg>, TMsg>","rsiot::components::cmp_add_input_stream::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CCfg%3CTMsg%3E,+TMsg%3E-for-Component%3CCfg%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_add_output_stream/mod.rs.html#20-36\">source</a><a href=\"#impl-IComponentProcess%3CCfg%3CTMsg%3E,+TMsg%3E-for-Component%3CCfg%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_add_output_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_output_stream::Cfg\">Cfg</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_add_output_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_output_stream::Cfg\">Cfg</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_add_output_stream/mod.rs.html#24-35\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_add_output_stream/struct.Cfg.html\" title=\"struct rsiot::components::cmp_add_output_stream::Cfg\">Cfg</a>&lt;TMsg&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Cfg<TMsg>, TMsg>","rsiot::components::cmp_add_output_stream::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMainWindow,+TMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMainWindow,+TMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_slint/component.rs.html#13-29\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMainWindow,+TMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMainWindow,+TMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMainWindow, TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_slint/config/struct.Config.html\" title=\"struct rsiot::components::cmp_slint::config::Config\">Config</a>&lt;TMainWindow, TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_slint/config/struct.Config.html\" title=\"struct rsiot::components::cmp_slint::config::Config\">Config</a>&lt;TMainWindow, TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + 'static,\n    Self: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,\n    TMainWindow: ComponentHandle + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_slint/component.rs.html#20-28\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_slint/config/struct.Config.html\" title=\"struct rsiot::components::cmp_slint::config::Config\">Config</a>&lt;TMainWindow, TMsg&gt;,\n    input: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMainWindow, TMsg>, TMsg>","rsiot::components::cmp_slint::component::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/_cmp_template/component.rs.html#12-21\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/_cmp_template/config/struct.Config.html\" title=\"struct rsiot::components::_cmp_template::config::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/_cmp_template/config/struct.Config.html\" title=\"struct rsiot::components::_cmp_template::config::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/_cmp_template/component.rs.html#16-20\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/_cmp_template/config/struct.Config.html\" title=\"struct rsiot::components::_cmp_template::config::Config\">Config</a>&lt;TMsg&gt;,\n    msg_bus: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"type\" href=\"rsiot/executor/types/type.CmpResult.html\" title=\"type rsiot::executor::types::CmpResult\">CmpResult</a>&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMsg>, TMsg>","rsiot::components::_cmp_template::component::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_derive/component.rs.html#12-28\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_derive/config/struct.Config.html\" title=\"struct rsiot::components::cmp_derive::config::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_derive/config/struct.Config.html\" title=\"struct rsiot::components::cmp_derive::config::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + 'static,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_derive/component.rs.html#16-27\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_derive/config/struct.Config.html\" title=\"struct rsiot::components::cmp_derive::config::Config\">Config</a>&lt;TMsg&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMsg>, TMsg>","rsiot::components::cmp_derive::component::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_external_fn_process/mod.rs.html#120-134\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_external_fn_process/struct.Config.html\" title=\"struct rsiot::components::cmp_external_fn_process::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_external_fn_process/struct.Config.html\" title=\"struct rsiot::components::cmp_external_fn_process::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_external_fn_process/mod.rs.html#124-133\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_external_fn_process/struct.Config.html\" title=\"struct rsiot::components::cmp_external_fn_process::Config\">Config</a>&lt;TMsg&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMsg>, TMsg>","rsiot::components::cmp_external_fn_process::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_logger/mod.rs.html#44-59\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMsg%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_logger/struct.Config.html\" title=\"struct rsiot::components::cmp_logger::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_logger/struct.Config.html\" title=\"struct rsiot::components::cmp_logger::Config\">Config</a>&lt;TMsg&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_logger/mod.rs.html#48-58\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_logger/struct.Config.html\" title=\"struct rsiot::components::cmp_logger::Config\">Config</a>&lt;TMsg&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMsg>, TMsg>","rsiot::components::cmp_logger::Cmp"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IComponentProcess%3CConfig%3CTMsg,+TFnPeriodic%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg,+TFnPeriodic%3E,+TMsg%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_inject_periodic/mod.rs.html#29-46\">source</a><a href=\"#impl-IComponentProcess%3CConfig%3CTMsg,+TFnPeriodic%3E,+TMsg%3E-for-Component%3CConfig%3CTMsg,+TFnPeriodic%3E,+TMsg%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;TMsg, TFnPeriodic&gt; <a class=\"trait\" href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html\" title=\"trait rsiot::executor::component::single_thread::IComponentProcess\">IComponentProcess</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_inject_periodic/struct.Config.html\" title=\"struct rsiot::components::cmp_inject_periodic::Config\">Config</a>&lt;TMsg, TFnPeriodic&gt;, TMsg&gt; for <a class=\"struct\" href=\"rsiot/executor/component/single_thread/struct.Component.html\" title=\"struct rsiot::executor::component::single_thread::Component\">Component</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_inject_periodic/struct.Config.html\" title=\"struct rsiot::components::cmp_inject_periodic::Config\">Config</a>&lt;TMsg, TFnPeriodic&gt;, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a>,\n    TFnPeriodic: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/ops/function/trait.FnMut.html\" title=\"trait core::ops::function::FnMut\">FnMut</a>() -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/vec/struct.Vec.html\" title=\"struct alloc::vec::Vec\">Vec</a>&lt;<a class=\"struct\" href=\"rsiot/message/message/struct.Message.html\" title=\"struct rsiot::message::message::Message\">Message</a>&lt;TMsg&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.process\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_inject_periodic/mod.rs.html#35-45\">source</a><a href=\"#method.process\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/executor/component/single_thread/trait.IComponentProcess.html#tymethod.process\" class=\"fn\">process</a>&lt;'life0, 'async_trait&gt;(\n    &amp;'life0 self,\n    config: <a class=\"struct\" href=\"rsiot/components/cmp_inject_periodic/struct.Config.html\" title=\"struct rsiot::components::cmp_inject_periodic::Config\">Config</a>&lt;TMsg, TFnPeriodic&gt;,\n    in_out: <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;,\n) -&gt; <a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/core/pin/struct.Pin.html\" title=\"struct core::pin::Pin\">Pin</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/1.81.0/alloc/boxed/struct.Box.html\" title=\"struct alloc::boxed::Box\">Box</a>&lt;dyn <a class=\"trait\" href=\"https://doc.rust-lang.org/1.81.0/core/future/future/trait.Future.html\" title=\"trait core::future::future::Future\">Future</a>&lt;Output = <a class=\"enum\" href=\"https://doc.rust-lang.org/1.81.0/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.81.0/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"rsiot/executor/error/enum.ComponentError.html\" title=\"enum rsiot::executor::error::ComponentError\">ComponentError</a>&gt;&gt; + 'async_trait&gt;&gt;<div class=\"where\">where\n    Self: 'async_trait,\n    'life0: 'async_trait,</div></h4></section></summary><div class='docblock'>Основная функция компонента</div></details></div></details>","IComponentProcess<Config<TMsg, TFnPeriodic>, TMsg>","rsiot::components::cmp_inject_periodic::Cmp"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()