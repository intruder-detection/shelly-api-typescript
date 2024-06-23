import { WebhookMethods } from '@gen2/methods.enum';
import { CreateWebhookBody } from '@gen2/endpoints/types/webhooks/create-webhook.types';
import { ShellyGen2PlusHTTPAPI } from '@common/shelly-gen-2-plus-http-api';

export class WebhooksHelpers {
  constructor(private readonly gen2Device: ShellyGen2PlusHTTPAPI) {}

  async creatWebhook(webhookBody: CreateWebhookBody) {
    this.validateName(webhookBody.name);
    this.validateUrls(webhookBody.urls);
    return this.gen2Device.post(WebhookMethods.Create, webhookBody);
  }

  private validateName(name: string) {
    if (name.length > 300) {
      throw new Error('Provided webhook name has more than 300 characters');
    }
  }

  private validateUrls(urls?: string[]) {
    if (!urls || urls.length < 1) {
      throw new Error('At least one urls is required');
    }
    if (urls?.length > 5) {
      throw new Error('The maximum number of URLS is 5');
    }
    const invalidUrlIndex = urls.findIndex((url: string) => url.length > 300);
    if (invalidUrlIndex !== -1) {
      throw new Error('Provided URL has more than 300 characters');
    }
  }
}
