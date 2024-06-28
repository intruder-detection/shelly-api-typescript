import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';
import { WebhookConfig, WebhookRev } from '@gen2/endpoints/types/webhooks/webhook.common';

export interface CreateWebhookBody extends WebhookConfig {}

export interface CreateWebhookResponse extends BaseShellyResponse<CreateWebhookResponseResult> {}

interface CreateWebhookResponseResult extends BaseIdType, WebhookRev {}
