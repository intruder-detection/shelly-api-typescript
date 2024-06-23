export interface ShellyResponse {
  type: string;
  mac: string;
  auth: boolean;
  fw: string;
  discoverable: boolean;
  num_outputs: number;
  num_meters: number;
}
