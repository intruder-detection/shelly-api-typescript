export interface AvailableUpdates {
  stable?: Version;
  beta?: Version;
}

interface Version {
  version: string;
  build_id: string;
}
