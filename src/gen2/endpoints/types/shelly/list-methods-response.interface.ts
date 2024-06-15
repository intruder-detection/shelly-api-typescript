import { BaseShellyResponse } from '@gen2/generic.types';

export interface ListMethodsResponse extends BaseShellyResponse<ListMethodsResponseResult> {}

interface ListMethodsResponseResult {
  methods: string[];
}
