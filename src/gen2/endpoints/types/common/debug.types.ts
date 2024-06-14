import { Observer } from '@gen2/endpoints/types/common/observer.types';

export interface Debug {
  level: number;
  file_level: string | null;
  mqtt: Observer;
  websocket: Observer;
  udp: UDP;
}

interface UDP {
  addr: string | null;
}
