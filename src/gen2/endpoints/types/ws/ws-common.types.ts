export interface WsConfig {
  enable: boolean;
  server: string | null;
  ssl_ca: '*' | 'user_ca.pem' | 'ca.pem';
}
