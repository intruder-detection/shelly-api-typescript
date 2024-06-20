export interface WebhookRev {
  rev: number;
}

export interface WebhookConfig {
  id: number;
  event: string;
  cid: number;
  enable?: boolean;
  name?: string | null;
  ssl_ca: '*' | 'user_ca.pem' | null;
  urls: string[];
  active_between?: string[];
  condition?: string | null;
  repeat_period?: number;
}
