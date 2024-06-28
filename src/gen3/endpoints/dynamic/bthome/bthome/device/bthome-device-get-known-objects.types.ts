import { BaseShellyResponse } from '@common/generic.types';
import { BaseIdType } from '@common/base-id.types';

export interface BTHomeDeviceGetKnownObjectsBody extends BaseIdType {}

export interface BTHomeDeviceGetKnownObjectsResponse extends BaseShellyResponse<BTHomeDeviceGetKnownObjectsResponseResult> {}

interface BTHomeDeviceGetKnownObjectsResponseResult extends BaseIdType {
  objects: BTHomeObject[];
}

interface BTHomeObject {
  obj_id: number;
  idx: number;
  component: string | null;
}
