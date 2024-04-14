(function() {var implementors = {
"rsiot":[["impl&lt;TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_mqtt_client/struct.Config.html\" title=\"struct rsiot::components::cmp_mqtt_client::Config\">Config</a>&lt;TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + Clone,</div>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::I\">I</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/eav/eav_model/struct.EavModel.html\" title=\"struct rsiot::message::eav::eav_model::EavModel\">EavModel</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/auth_roles/enum.AuthPermissions.html\" title=\"enum rsiot::message::auth_roles::AuthPermissions\">AuthPermissions</a>"],["impl&lt;TMsg: Clone, TMessageChannel&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_redis_client/struct.Config.html\" title=\"struct rsiot::components::cmp_redis_client::Config\">Config</a>&lt;TMsg, TMessageChannel&gt;<div class=\"where\">where\n    TMessageChannel: <a class=\"trait\" href=\"rsiot/message/message_channel/trait.IMessageChannel.html\" title=\"trait rsiot::message::message_channel::IMessageChannel\">IMessageChannel</a> + Clone,</div>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_modbus_client/struct.TcpClientType.html\" title=\"struct rsiot::components::cmp_modbus_client::TcpClientType\">TcpClientType</a>"],["impl&lt;TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/executor/cmp_in_out/struct.CmpInOut.html\" title=\"struct rsiot::executor::cmp_in_out::CmpInOut\">CmpInOut</a>&lt;TMsg&gt;<div class=\"where\">where\n    TMsg: Clone,</div>"],["impl&lt;TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_server/shared_state/struct.SharedState.html\" title=\"struct rsiot::components::cmp_http_server::shared_state::SharedState\">SharedState</a>&lt;TMsg&gt;<div class=\"where\">where\n    TMsg: Clone + Clone,</div>"],["impl&lt;TMsg, TFnPeriodic&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_inject_periodic/struct.Config.html\" title=\"struct rsiot::components::cmp_inject_periodic::Config\">Config</a>&lt;TMsg, TFnPeriodic&gt;<div class=\"where\">where\n    TMsg: Clone + Clone,\n    TFnPeriodic: FnMut() -&gt; Vec&lt;<a class=\"struct\" href=\"rsiot/message/message/struct.Message.html\" title=\"struct rsiot::message::message::Message\">Message</a>&lt;TMsg&gt;&gt; + Clone,</div>"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_modbus_client/enum.Request.html\" title=\"enum rsiot::components::cmp_modbus_client::Request\">Request</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::S\">S</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.S.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::S\">S</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/auth_response_ok/struct.AuthResponseOk.html\" title=\"struct rsiot::message::system_messages::auth_response_ok::AuthResponseOk\">AuthResponseOk</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/auth_request_by_login/struct.AuthRequestByLogin.html\" title=\"struct rsiot::message::system_messages::auth_request_by_login::AuthRequestByLogin\">AuthRequestByLogin</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.I.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::I\">I</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/message_channel/tests/enum.MessageChannel.html\" title=\"enum rsiot::message::message_channel::tests::MessageChannel\">MessageChannel</a>"],["impl&lt;TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_server/struct.Config.html\" title=\"struct rsiot::components::cmp_http_server::Config\">Config</a>&lt;TMsg&gt;<div class=\"where\">where\n    TMsg: Clone + Clone,</div>"],["impl&lt;TMessage: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_client/struct.Config.html\" title=\"struct rsiot::components::cmp_http_client::Config\">Config</a>&lt;TMessage&gt;"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_timescaledb/struct.Config.html\" title=\"struct rsiot::components::cmp_timescaledb::Config\">Config</a>"],["impl&lt;TMessage, I, Q, S&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/config/struct.Config.html\" title=\"struct rsiot::components::cmp_plc::config::Config\">Config</a>&lt;TMessage, I, Q, S&gt;<div class=\"where\">where\n    TMessage: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + Clone,\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div>"],["impl&lt;TCustom: Clone&gt; Clone for <a class=\"enum\" href=\"rsiot/message/msg_data/enum.MsgData.html\" title=\"enum rsiot::message::msg_data::MsgData\">MsgData</a>&lt;TCustom&gt;"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/auth_response_error/struct.AuthResponseErr.html\" title=\"struct rsiot::message::system_messages::auth_response_error::AuthResponseErr\">AuthResponseErr</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_http_client/enum.HttpParam.html\" title=\"enum rsiot::components::cmp_http_client::HttpParam\">HttpParam</a>"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_client/struct.RequestInput.html\" title=\"struct rsiot::components::cmp_http_client::RequestInput\">RequestInput</a>&lt;TMsg&gt;"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_surrealdb/config/struct.InputConfig.html\" title=\"struct rsiot::components::cmp_surrealdb::config::InputConfig\">InputConfig</a>&lt;TMsg&gt;"],["impl&lt;TMainWindow, TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_slint/config/struct.Config.html\" title=\"struct rsiot::components::cmp_slint::config::Config\">Config</a>&lt;TMainWindow, TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a>,\n    TMainWindow: ComponentHandle,</div>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_auth/config/struct.Config.html\" title=\"struct rsiot::components::cmp_auth::config::Config\">Config</a>"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_surrealdb/config/struct.Config.html\" title=\"struct rsiot::components::cmp_surrealdb::config::Config\">Config</a>&lt;TMsg&gt;"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/ping_pong/struct.Pong.html\" title=\"struct rsiot::message::system_messages::ping_pong::Pong\">Pong</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_modbus_client/enum.ClientType.html\" title=\"enum rsiot::components::cmp_modbus_client::ClientType\">ClientType</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_auth/config/enum.ConfigStore.html\" title=\"enum rsiot::components::cmp_auth::config::ConfigStore\">ConfigStore</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/timestamp/struct.Timestamp.html\" title=\"struct rsiot::message::timestamp::Timestamp\">Timestamp</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_client/struct.ConnectionConfig.html\" title=\"struct rsiot::components::cmp_http_client::ConnectionConfig\">ConnectionConfig</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/edge_detect/rising_edge/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::edge_detect::rising_edge::Q\">Q</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::template::Q\">Q</a>"],["impl&lt;TMessage: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_modbus_client/struct.PeriodicConfig.html\" title=\"struct rsiot::components::cmp_modbus_client::PeriodicConfig\">PeriodicConfig</a>&lt;TMessage&gt;"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_websocket_client/struct.Config.html\" title=\"struct rsiot::components::cmp_websocket_client::Config\">Config</a>&lt;TMsg&gt;"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/eav/agg_type/enum.AggType.html\" title=\"enum rsiot::message::eav::agg_type::AggType\">AggType</a>"],["impl&lt;TMessage: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_modbus_client/struct.InputConfig.html\" title=\"struct rsiot::components::cmp_modbus_client::InputConfig\">InputConfig</a>&lt;TMessage&gt;"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/auth_request_by_token/struct.AuthRequestByToken.html\" title=\"struct rsiot::message::system_messages::auth_request_by_token::AuthRequestByToken\">AuthRequestByToken</a>"],["impl&lt;TCustom: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/message/message/struct.Message.html\" title=\"struct rsiot::message::message::Message\">Message</a>&lt;TCustom&gt;"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/eav/value_type/enum.ValueType.html\" title=\"enum rsiot::message::eav::value_type::ValueType\">ValueType</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/msg_trace/struct.MsgTrace.html\" title=\"struct rsiot::message::msg_trace::MsgTrace\">MsgTrace</a>"],["impl&lt;TMessage: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_modbus_client/struct.Config.html\" title=\"struct rsiot::components::cmp_modbus_client::Config\">Config</a>&lt;TMessage&gt;"],["impl&lt;I, Q, S&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/function_block_base/struct.FunctionBlockBase.html\" title=\"struct rsiot::components::cmp_plc::plc::function_block_base::FunctionBlockBase\">FunctionBlockBase</a>&lt;I, Q, S&gt;<div class=\"where\">where\n    I: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    Q: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    S: Clone + Default + <a class=\"trait\" href=\"rsiot/message/trait.Serialize.html\" title=\"trait rsiot::message::Serialize\">Serialize</a> + Clone,\n    Self: <a class=\"trait\" href=\"rsiot/components/cmp_plc/plc/function_block_base/trait.IFunctionBlock.html\" title=\"trait rsiot::components::cmp_plc::plc::function_block_base::IFunctionBlock\">IFunctionBlock</a>&lt;I, Q, S&gt;,</div>"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_websocket_server/struct.Config.html\" title=\"struct rsiot::components::cmp_websocket_server::Config\">Config</a>&lt;TMsg&gt;"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/example_message/enum.Custom.html\" title=\"enum rsiot::message::example_message::Custom\">Custom</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_auth/config/struct.ConfigStoreLocalItem.html\" title=\"struct rsiot::components::cmp_auth::config::ConfigStoreLocalItem\">ConfigStoreLocalItem</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_modbus_client/enum.Response.html\" title=\"enum rsiot::components::cmp_modbus_client::Response\">Response</a>"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_influxdb/struct.Config.html\" title=\"struct rsiot::components::cmp_influxdb::Config\">Config</a>&lt;TMsg&gt;"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/system_messages/ping_pong/struct.Ping.html\" title=\"struct rsiot::message::system_messages::ping_pong::Ping\">Ping</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.S.html\" title=\"struct rsiot::components::cmp_plc::template::S\">S</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/example_message/struct.StructInDataGroup.html\" title=\"struct rsiot::message::example_message::StructInDataGroup\">StructInDataGroup</a>"],["impl&lt;TMessage&gt; Clone for <a class=\"struct\" href=\"rsiot/executor/cache/struct.Cache.html\" title=\"struct rsiot::executor::cache::Cache\">Cache</a>&lt;TMessage&gt;"],["impl Clone for <a class=\"enum\" href=\"rsiot/components/cmp_timescaledb/model/agg_type/enum.AggType.html\" title=\"enum rsiot::components::cmp_timescaledb::model::agg_type::AggType\">AggType</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/example_message/enum.DataGroup.html\" title=\"enum rsiot::message::example_message::DataGroup\">DataGroup</a>"],["impl&lt;TMsg: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_logger/struct.Config.html\" title=\"struct rsiot::components::cmp_logger::Config\">Config</a>&lt;TMsg&gt;"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/example_message_channel/enum.ExampleMessageChannel.html\" title=\"enum rsiot::message::example_message_channel::ExampleMessageChannel\">ExampleMessageChannel</a>"],["impl Clone for <a class=\"enum\" href=\"rsiot/message/system_messages/enum.System.html\" title=\"enum rsiot::message::system_messages::System\">System</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/library/timer/ton/struct.Q.html\" title=\"struct rsiot::components::cmp_plc::plc::library::timer::ton::Q\">Q</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/template/struct.I.html\" title=\"struct rsiot::components::cmp_plc::template::I\">I</a>"],["impl Clone for <a class=\"struct\" href=\"rsiot/message/msg_trace/struct.MsgTraceItem.html\" title=\"struct rsiot::message::msg_trace::MsgTraceItem\">MsgTraceItem</a>"],["impl&lt;TMsg&gt; Clone for <a class=\"struct\" href=\"rsiot/components/_cmp_template/config/struct.Config.html\" title=\"struct rsiot::components::_cmp_template::config::Config\">Config</a>&lt;TMsg&gt;<div class=\"where\">where\n    TMsg: <a class=\"trait\" href=\"rsiot/message/msg_data_bound/trait.MsgDataBound.html\" title=\"trait rsiot::message::msg_data_bound::MsgDataBound\">MsgDataBound</a> + Clone,</div>"],["impl Clone for <a class=\"struct\" href=\"rsiot/components/cmp_plc/plc/types/time_instant/struct.TimeInstant.html\" title=\"struct rsiot::components::cmp_plc::plc::types::time_instant::TimeInstant\">TimeInstant</a>"],["impl&lt;TMessage: Clone&gt; Clone for <a class=\"struct\" href=\"rsiot/components/cmp_http_client/struct.RequestPeriodic.html\" title=\"struct rsiot::components::cmp_http_client::RequestPeriodic\">RequestPeriodic</a>&lt;TMessage&gt;"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()