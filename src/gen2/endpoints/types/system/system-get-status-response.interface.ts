import { BaseResponse } from '@gen2/generic.types';
import { SystemStatus } from '@gen2/endpoints/types/system/common.types.interfaces';

export interface SystemGetStatusResponse extends BaseResponse<SystemStatus> {}