import { WebhookRev } from '@gen2/endpoints/types/webhooks/webhook.common';
import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface DeleteWebhookBody extends BaseIdType {}

export interface DeleteWebhookResponse extends BaseShellyResponse<WebhookRev> {}
