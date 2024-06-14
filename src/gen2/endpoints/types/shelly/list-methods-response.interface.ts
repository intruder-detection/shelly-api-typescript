import { BaseResponse } from '@gen2/generic.types';

export interface ListMethodsResponse extends BaseResponse<ListMethodsResponseResult> {}

interface ListMethodsResponseResult {
  methods: string[];
}
