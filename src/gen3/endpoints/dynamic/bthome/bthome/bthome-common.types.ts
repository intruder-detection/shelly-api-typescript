export interface BTHomeDeviceConfig {
  id?: number;
  name: string | null;
  addr: string;
  key: string | null;
  meta?: {
    ui: MetaUIProperties;
  };
}

export interface BTHomeSensorConfig {
  id?: number;
  name: string | null;
  obj_id: number;
  obj_idx: number;
  addr: string;
  meta?: {
    ui: MetaUIProperties;
  };
}

interface MetaUIProperties {
  // Define any other UI properties if needed.
  icon: string | null;
}
