import { BaseShellyResponse } from '@common/generic.types';
import { AvailableUpdates } from '@gen2/endpoints/types/common/available-updates.types';

export interface CheckForUpdateResponse extends BaseShellyResponse<AvailableUpdates> {}
