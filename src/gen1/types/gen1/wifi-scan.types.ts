export interface WifiScanResponseGen1 {
  wifiscan?: 'failed' | 'done' | 'not AP mode' | 'started' | 'inprogress';
  results: any[];
}
