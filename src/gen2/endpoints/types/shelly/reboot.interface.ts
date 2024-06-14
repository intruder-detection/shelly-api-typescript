export interface RebootBody {
  // Delay until reboot in milliseconds. Any values are valid but the minimum is capped at 500 ms. Default value: 1000 ms. Optional
  delay_ms?: number;
}
