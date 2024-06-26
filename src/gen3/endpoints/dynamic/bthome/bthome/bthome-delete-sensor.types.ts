import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';

export interface BTHomeDeleteSensorBody extends BaseIdType {}

export interface BTHomeDeleteSensorResponse extends BaseShellyResponse<null> {}
