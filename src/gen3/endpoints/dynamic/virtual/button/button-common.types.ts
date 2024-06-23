import { VirtualMetaComponent } from '@gen3/endpoints/dynamic/virtual/common/virtual-common.types';

export interface ButtonVirtualComponentConfig extends VirtualMetaComponent {
  id: number;
  name: string | null;
}
