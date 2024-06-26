import { BaseShellyResponse } from '@common/generic.types';
import { SystemStatus } from '@gen2/endpoints/types/system/common.types.interfaces';

export interface SystemGetStatusResponse extends BaseShellyResponse<SystemStatus> {}
