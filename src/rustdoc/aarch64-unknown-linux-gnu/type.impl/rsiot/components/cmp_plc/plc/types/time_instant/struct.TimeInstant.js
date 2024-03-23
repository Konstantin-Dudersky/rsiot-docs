(function() {var type_impls = {
"rsiot":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TimeInstant\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#17-31\">source</a><a href=\"#impl-TimeInstant\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a></h3></section></summary><div class=\"impl-items\"><section id=\"method.now\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#18-22\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html#tymethod.now\" class=\"fn\">now</a>() -&gt; Self</h4></section><section id=\"method.duration_since\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#24-26\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html#tymethod.duration_since\" class=\"fn\">duration_since</a>(&amp;self, earlier: Self) -&gt; <a class=\"type\" href=\"rsiot/components/cmp_plc/plc/types/type.TimeDuration.html\" title=\"type rsiot::components::cmp_plc::plc::types::TimeDuration\">TimeDuration</a></h4></section><section id=\"method.elapsed\" class=\"method\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#28-30\">source</a><h4 class=\"code-header\">pub fn <a href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html#tymethod.elapsed\" class=\"fn\">elapsed</a>(&amp;self) -&gt; <a class=\"type\" href=\"rsiot/components/cmp_plc/plc/types/type.TimeDuration.html\" title=\"type rsiot::components::cmp_plc::plc::types::TimeDuration\">TimeDuration</a></h4></section></div></details>",0,"rsiot::components::cmp_plc::plc::types::TimeInstant"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-TimeInstant\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#33-39\">source</a><a href=\"#impl-Default-for-TimeInstant\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Default for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#34-38\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default</a>() -&gt; Self</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a>Read more</a></div></details></div></details>","Default","rsiot::components::cmp_plc::plc::types::TimeInstant"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-TimeInstant\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#41-48\">source</a><a href=\"#impl-Serialize-for-TimeInstant\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#42-47\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"rsiot/message/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(&amp;self, serializer: S) -&gt; Result&lt;S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Ok\" title=\"type serde::ser::Serializer::Ok\">Ok</a>, S::<a class=\"associatedtype\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html#associatedtype.Error\" title=\"type serde::ser::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"https://docs.rs/serde/1.0.197/serde/ser/trait.Serializer.html\" title=\"trait serde::ser::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"rsiot/message/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","rsiot::components::cmp_plc::plc::types::TimeInstant"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-TimeInstant\" class=\"impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#12\">source</a><a href=\"#impl-Clone-for-TimeInstant\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/rsiot/components/cmp_plc/plc/types/time_instant.rs.html#12\">source</a><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"since rightside\" title=\"Stable since Rust version 1.0.0\">1.0.0</span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">clone_from</a>(&amp;mut self, source: &amp;Self)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a>Read more</a></div></details></div></details>","Clone","rsiot::components::cmp_plc::plc::types::TimeInstant"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()