import { BaseShellyResponse } from '@common/generic.types';

export interface ListMethodsResponse extends BaseShellyResponse<ListMethodsResponseResult> {}

interface ListMethodsResponseResult {
  methods: string[];
}
