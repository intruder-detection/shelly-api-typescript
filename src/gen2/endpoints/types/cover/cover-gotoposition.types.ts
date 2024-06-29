import { BaseIdType } from '@common/base-id.types';

export interface CoverGoToPositionBody extends BaseIdType {
  pos: number;
  rel: number;
}
