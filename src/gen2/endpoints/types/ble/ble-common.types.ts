import { Observer } from '@gen2/endpoints/types/common/observer.types';

export interface BLEConfig {
  enable: boolean;
  rpc: Observer;
  observer: Observer;
}
