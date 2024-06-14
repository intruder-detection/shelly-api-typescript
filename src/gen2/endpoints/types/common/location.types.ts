import { Timezones } from '@gen2/endpoints/types/common/timezones.enum';

export interface Location {
  tz: Timezones;
  lat: number;
  lon: number;
}
