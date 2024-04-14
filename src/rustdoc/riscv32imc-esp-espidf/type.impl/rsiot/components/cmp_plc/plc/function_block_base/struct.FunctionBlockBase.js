(function() {var type_impls = {
"rsiot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#22-42\">source</a><a href=\"#impl-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, Q, S&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;<div class=\"where\">where\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    Self: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#30-34\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html#tymethod.new\" class=\"fn\">new</a>() -&gt; Self</h4></section></summary><div class=\"docblock\"><p>Создание экземпляря функционального блока со значениями по-умолчанию</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.call\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#37-41\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html#tymethod.call\" class=\"fn\">call</a>(&amp;mut self, input: I) -&gt; Q</h4></section></summary><div class=\"docblock\"><p>Вызов функционального блока</p>\n</div></details></div></details>",0,"rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::FB","rsiot::components::cmp_plc::plc::library::timer::ton::FB","rsiot::components::cmp_plc::template::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge.rs.html#27-34\">source</a><a href=\"#impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::S\">S</a>&gt; for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::S\">S</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.logic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge.rs.html#28-33\">source</a><a href=\"#method.logic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\" class=\"fn\">logic</a>(input: &amp;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::I\">I</a>, stat: &amp;mut <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::S\">S</a>) -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::Q\">Q</a></h4></section></summary><div class='docblock'>Основная логика выполнения блока <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\">Read more</a></div></details></div></details>","IFunctionBlock<I, Q, S>","rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#impl-Clone-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, Q, S&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;<div class=\"where\">where\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    Self: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;</h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::FB","rsiot::components::cmp_plc::plc::library::timer::ton::FB","rsiot::components::cmp_plc::template::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/library/timer/ton.rs.html#33-48\">source</a><a href=\"#impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::S\">S</a>&gt; for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::S\">S</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.logic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/library/timer/ton.rs.html#34-47\">source</a><a href=\"#method.logic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\" class=\"fn\">logic</a>(input: &amp;<a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::I\">I</a>, stat: &amp;mut <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::S\">S</a>) -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::Q\">Q</a></h4></section></summary><div class='docblock'>Основная логика выполнения блока <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\">Read more</a></div></details></div></details>","IFunctionBlock<I, Q, S>","rsiot::components::cmp_plc::plc::library::timer::ton::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#impl-Default-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, Q, S&gt; Default for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;<div class=\"where\">where\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Default,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Default,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Default,\n    Self: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::FB","rsiot::components::cmp_plc::plc::library::timer::ton::FB","rsiot::components::cmp_plc::template::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/template.rs.html#16-20\">source</a><a href=\"#impl-IFunctionBlock%3CI,+Q,+S%3E-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.I.html\" title=\"struct rsiot::components::cmp_plc::template::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::template::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.S.html\" title=\"struct rsiot::components::cmp_plc::template::S\">S</a>&gt; for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;<a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.I.html\" title=\"struct rsiot::components::cmp_plc::template::I\">I</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::template::Q\">Q</a>, <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.S.html\" title=\"struct rsiot::components::cmp_plc::template::S\">S</a>&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.logic\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/template.rs.html#17-19\">source</a><a href=\"#method.logic\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\" class=\"fn\">logic</a>(_input: &amp;<a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.I.html\" title=\"struct rsiot::components::cmp_plc::template::I\">I</a>, _stat: &amp;mut <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.S.html\" title=\"struct rsiot::components::cmp_plc::template::S\">S</a>) -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::template::Q\">Q</a></h4></section></summary><div class='docblock'>Основная логика выполнения блока <a href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html#tymethod.logic\">Read more</a></div></details></div></details>","IFunctionBlock<I, Q, S>","rsiot::components::cmp_plc::template::FB"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#impl-Serialize-for-FunctionBlockBase%3CI,+Q,+S%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;I, Q, S&gt; <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;<div class=\"where\">where\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a>,\n    <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/function_block_base.rs.html#6\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/message/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;__S&gt;(&amp;self, __serializer: __S) -&gt; Result&lt;__S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, __S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    __S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"rsiot/message/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::FB","rsiot::components::cmp_plc::plc::library::timer::ton::FB","rsiot::components::cmp_plc::template::FB"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()