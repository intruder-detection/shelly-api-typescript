export interface WifiScanResponse {
  wifiscan?: 'failed' | 'done' | 'not AP mode' | 'started' | 'inprogress';
  results: any[];
}
