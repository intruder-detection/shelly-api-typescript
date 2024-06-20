import { BaseShellyResponse } from '@gen2/generic.types';
import { WebhookConfig, WebhookRev } from '@gen2/endpoints/types/webhooks/webhook.common';

export interface UpdateWebhookBody extends WebhookConfig {}

export interface UpdateWebhookResponse extends BaseShellyResponse<WebhookRev> {}
