(function() {var implementors = {
"ahash":[["impl&lt;T, S&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;<div class=\"where\">where\n    T: Eq + Hash,\n    S: BuildHasher,</div>"],["impl&lt;K, V, S&gt; Extend&lt;(K, V)&gt; for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: Eq + Hash,\n    S: BuildHasher,</div>"],["impl&lt;'a, K, V, S&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for <a class=\"struct\" href=\"ahash/struct.AHashMap.html\" title=\"struct ahash::AHashMap\">AHashMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: Eq + Hash + Copy + 'a,\n    V: Copy + 'a,\n    S: BuildHasher,</div>"],["impl&lt;'a, T, S&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"ahash/struct.AHashSet.html\" title=\"struct ahash::AHashSet\">AHashSet</a>&lt;T, S&gt;<div class=\"where\">where\n    T: 'a + Eq + Hash + Copy,\n    S: BuildHasher,</div>"]],
"allocator_api2":[["impl&lt;'a, T: Copy + 'a, A: <a class=\"trait\" href=\"allocator_api2/alloc/trait.Allocator.html\" title=\"trait allocator_api2::alloc::Allocator\">Allocator</a> + 'a&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"allocator_api2/vec/struct.Vec.html\" title=\"struct allocator_api2::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl&lt;T, A: <a class=\"trait\" href=\"allocator_api2/alloc/trait.Allocator.html\" title=\"trait allocator_api2::alloc::Allocator\">Allocator</a>&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"allocator_api2/vec/struct.Vec.html\" title=\"struct allocator_api2::vec::Vec\">Vec</a>&lt;T, A&gt;"],["impl&lt;A: <a class=\"trait\" href=\"allocator_api2/alloc/trait.Allocator.html\" title=\"trait allocator_api2::alloc::Allocator\">Allocator</a>&gt; Extend&lt;<a class=\"struct\" href=\"allocator_api2/boxed/struct.Box.html\" title=\"struct allocator_api2::boxed::Box\">Box</a>&lt;str, A&gt;&gt; for String"]],
"bytes":[["impl Extend&lt;<a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"],["impl Extend&lt;u8&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"],["impl&lt;'a&gt; Extend&lt;&amp;'a u8&gt; for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"]],
"futures_util":[["impl&lt;Fut: Future&gt; Extend&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesOrdered.html\" title=\"struct futures_util::stream::FuturesOrdered\">FuturesOrdered</a>&lt;Fut&gt;"],["impl&lt;St: <a class=\"trait\" href=\"futures_util/stream/trait.Stream.html\" title=\"trait futures_util::stream::Stream\">Stream</a> + Unpin&gt; Extend&lt;St&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.SelectAll.html\" title=\"struct futures_util::stream::SelectAll\">SelectAll</a>&lt;St&gt;"],["impl&lt;Fut&gt; Extend&lt;Fut&gt; for <a class=\"struct\" href=\"futures_util/stream/struct.FuturesUnordered.html\" title=\"struct futures_util::stream::FuturesUnordered\">FuturesUnordered</a>&lt;Fut&gt;"]],
"hashbrown":[["impl&lt;K, V, S, A&gt; Extend&lt;(K, V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    K: Eq + Hash,\n    S: BuildHasher,\n    A: <a class=\"trait\" href=\"allocator_api2/stable/alloc/trait.Allocator.html\" title=\"trait allocator_api2::stable::alloc::Allocator\">Allocator</a>,</div>"],["impl&lt;'a, K, V, S, A&gt; Extend&lt;&amp;'a (K, V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    K: Eq + Hash + Copy,\n    V: Copy,\n    S: BuildHasher,\n    A: <a class=\"trait\" href=\"allocator_api2/stable/alloc/trait.Allocator.html\" title=\"trait allocator_api2::stable::alloc::Allocator\">Allocator</a>,</div>"],["impl&lt;'a, T, S, A&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: 'a + Eq + Hash + Copy,\n    S: BuildHasher,\n    A: <a class=\"trait\" href=\"allocator_api2/stable/alloc/trait.Allocator.html\" title=\"trait allocator_api2::stable::alloc::Allocator\">Allocator</a>,</div>"],["impl&lt;T, S, A&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"hashbrown/hash_set/struct.HashSet.html\" title=\"struct hashbrown::hash_set::HashSet\">HashSet</a>&lt;T, S, A&gt;<div class=\"where\">where\n    T: Eq + Hash,\n    S: BuildHasher,\n    A: <a class=\"trait\" href=\"allocator_api2/stable/alloc/trait.Allocator.html\" title=\"trait allocator_api2::stable::alloc::Allocator\">Allocator</a>,</div>"],["impl&lt;'a, K, V, S, A&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for <a class=\"struct\" href=\"hashbrown/hash_map/struct.HashMap.html\" title=\"struct hashbrown::hash_map::HashMap\">HashMap</a>&lt;K, V, S, A&gt;<div class=\"where\">where\n    K: Eq + Hash + Copy,\n    V: Copy,\n    S: BuildHasher,\n    A: <a class=\"trait\" href=\"allocator_api2/stable/alloc/trait.Allocator.html\" title=\"trait allocator_api2::stable::alloc::Allocator\">Allocator</a>,</div>"]],
"indexmap":[["impl&lt;'a, K, V, S&gt; Extend&lt;(&amp;'a K, &amp;'a V)&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: Hash + Eq + Copy,\n    V: Copy,\n    S: BuildHasher,</div>"],["impl&lt;K, V, S&gt; Extend&lt;(K, V)&gt; for <a class=\"struct\" href=\"indexmap/map/struct.IndexMap.html\" title=\"struct indexmap::map::IndexMap\">IndexMap</a>&lt;K, V, S&gt;<div class=\"where\">where\n    K: Hash + Eq,\n    S: BuildHasher,</div>"],["impl&lt;'a, T, S&gt; Extend&lt;&amp;'a T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;<div class=\"where\">where\n    T: Hash + Eq + Copy + 'a,\n    S: BuildHasher,</div>"],["impl&lt;T, S&gt; Extend&lt;T&gt; for <a class=\"struct\" href=\"indexmap/set/struct.IndexSet.html\" title=\"struct indexmap::set::IndexSet\">IndexSet</a>&lt;T, S&gt;<div class=\"where\">where\n    T: Hash + Eq,\n    S: BuildHasher,</div>"]],
"serde_json":[["impl Extend&lt;(String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>)&gt; for <a class=\"struct\" href=\"serde_json/struct.Map.html\" title=\"struct serde_json::Map\">Map</a>&lt;String, <a class=\"enum\" href=\"serde_json/enum.Value.html\" title=\"enum serde_json::Value\">Value</a>&gt;"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; Extend&lt;&lt;A as <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt;::<a class=\"associatedtype\" href=\"smallvec/trait.Array.html#associatedtype.Item\" title=\"type smallvec::Array::Item\">Item</a>&gt; for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()