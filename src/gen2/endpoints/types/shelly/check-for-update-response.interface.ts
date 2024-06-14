import { BaseResponse } from '@gen2/generic.types';
import { AvailableUpdates } from '@gen2/endpoints/types/common/available-updates.types';

export interface CheckForUpdateResponse extends BaseResponse<AvailableUpdates> {}
