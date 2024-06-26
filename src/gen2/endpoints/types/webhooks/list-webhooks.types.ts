import { BaseShellyResponse } from '@common/generic.types';
import { WebhookRev } from '@gen2/endpoints/types/webhooks/webhook.common';

export interface ListWebhooksResponse extends BaseShellyResponse<ListWebhooksResponseResult> {}

interface ListWebhooksResponseResult extends WebhookRev {
  hooks: Hook[];
}

interface Hook {
  id: number;
  cid: number;
  enable: boolean;
  event: string;
  name: string | null;
  ssl_ca: string | null;
  urls: string[];
  condition: string | null;
  repeat_period: number;
}
