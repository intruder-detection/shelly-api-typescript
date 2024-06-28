import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface BTHomeDeleteSensorBody extends BaseIdType {}

export interface BTHomeDeleteSensorResponse extends BaseShellyResponse<null> {}
