import { BaseShellyResponse } from '@common/generic.types';
import { Connected } from '@gen2/endpoints/types/common/connected.types';

export interface WsGetStatusResponse extends BaseShellyResponse<Connected> {}
