import { BaseShellyResponse } from '@gen2/generic.types';

export interface BTHomeGetStatusResponse extends BaseShellyResponse<BTHomeGetStatusResponseResult> {}

interface BTHomeGetStatusResponseResult {
  discovery?: Discovery;
  errors?: string[]; // Component error conditions. May contain observer_disabled or bluetooth_disabled
}

interface Discovery {
  started_at: number; // The initiation of the scanning process in UNIX timestamp
  duration: number; // Duration of the scan process
}
