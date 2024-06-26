import { BaseShellyResponse } from '@common/generic.types';

export interface WifiListAPClientsResponse extends BaseShellyResponse<ListAPClients> {}

interface ListAPClients {
  ts: number | null;
  ap_clients: ApClient[];
}

interface ApClient {
  mac: string;
  ip: string;
  ip_static: boolean;
  mport: number;
  since: number;
}
