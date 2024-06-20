import { BaseShellyResponse } from '@gen2/generic.types';

export interface ListSupportedWebhooksResponse extends BaseShellyResponse<ListSupportedWebhooksResponseResult> {}

interface ListSupportedWebhooksResponseResult {
  types: { [key: string]: TypeObject };
}

interface TypeObject {
  name: string;
  type: 'boolean' | 'number' | 'string';
  desc: string;
}