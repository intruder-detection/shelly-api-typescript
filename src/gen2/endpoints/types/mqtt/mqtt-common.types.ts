export interface MqttConfig {
  enable: boolean;
  server: string | null;
  client_id: string;
  user: string | null;
  ssl_ca: string | null;
  topic_prefix: string;
  rpc_ntf: boolean;
  status_ntf: boolean;
  use_client_cert: boolean;
  enable_rpc: boolean;
  enable_control: boolean;
}
