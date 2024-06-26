import { BaseShellyResponse } from '@common/generic.types';
import { WebhookConfig, WebhookRev } from '@gen2/endpoints/types/webhooks/webhook.common';

export interface UpdateWebhookBody extends WebhookConfig {}

export interface UpdateWebhookResponse extends BaseShellyResponse<WebhookRev> {}
