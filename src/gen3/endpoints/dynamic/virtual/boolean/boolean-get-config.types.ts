import { BaseIdType } from '@gen2/endpoints/types/common/base-id.types';
import { BaseShellyResponse } from '@gen2/generic.types';
import { VirtualComponentConfig } from '../common/virtual-common.types';

export interface BooleanGetConfigBody extends BaseIdType {}

export interface BooleanGetConfigResponse extends BaseShellyResponse<VirtualComponentConfig<boolean>> {}
